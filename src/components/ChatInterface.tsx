import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

// Typing dots animation for assistant loading (slower, smoother)
const TypingDots = () => (
  <span className="inline-flex items-center gap-1 h-5">
    <span className="dot bg-primary animate-bounce" data-delay="0" />
    <span className="dot bg-primary animate-bounce" data-delay="200" />
    <span className="dot bg-primary animate-bounce" data-delay="400" />
    <style>{`
      .dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 2px;
        opacity: 0.7;
        animation: bounce 1.4s infinite both;
      }
      .dot[data-delay="0"] { animation-delay: 0s; }
      .dot[data-delay="200"] { animation-delay: 0.2s; }
      .dot[data-delay="400"] { animation-delay: 0.4s; }
      @keyframes bounce {
        0%, 80%, 100% { transform: translateY(0); opacity: 0.7; }
        40% { transform: translateY(-8px); opacity: 1; }
      }
    `}</style>
  </span>
);

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pendingAssistant, setPendingAssistant] = useState(false);
  const [sessionId] = useState(() => {
    const stored = localStorage.getItem("chat-session-id");
    if (stored) return stored;
    const newId = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem("chat-session-id", newId);
    return newId;
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load messages from localStorage
    const stored = localStorage.getItem("chat-messages");
    if (stored) {
      try {
        setMessages(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse stored messages:", e);
      }
    }
  }, []);

  useEffect(() => {
    // Save messages to localStorage
    if (messages.length > 0) {
      localStorage.setItem("chat-messages", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    // Scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setPendingAssistant(true); // Show response block with dots immediately

    try {
      const response = await fetch("http://localhost:5678/webhook/dcy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
          sessionId: sessionId,
          timestamp: Date.now(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      const aiMessage: Message = {
        role: "assistant",
        content: data[0].output || "I received your message!",
        timestamp: Date.now(),
      };

      // Animate the response in the same block
      setMessages((prev) => {
        // If last message is a pending assistant, replace it
        if (pendingAssistant) {
          return [...prev.slice(0, -1), { ...aiMessage, content: "" }];
        }
        return [...prev, { ...aiMessage, content: "" }];
      });
      setPendingAssistant(false);
      const words = aiMessage.content.split(" ");
      for (let i = 0; i < words.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 90)); // slower typing
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessage = newMessages[newMessages.length - 1];
          if (lastMessage.role === "assistant") {
            lastMessage.content = words.slice(0, i + 1).join(" ");
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
      setMessages((prev) => prev.slice(0, -1)); // Remove user message on error
      setPendingAssistant(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border backdrop-blur-lg bg-background/80 p-4">
        <div className="container mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => window.location.href = "/"}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-glow bg-clip-text text-transparent">
              AI Assistant
            </h1>
            <p className="text-sm text-muted-foreground">Ask me anything!</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto max-w-4xl space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Start a Conversation</h2>
              <p className="text-muted-foreground">
                Type your message below to begin chatting with our AI assistant
              </p>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] ${
                  message.role === "user"
                    ? "bg-gradient-glow text-white shadow-lg"
                    : "backdrop-blur-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] shadow-md"
                }`}
              >
                <p className="whitespace-pre-wrap leading-relaxed">
                  {message.content}
                  {/* If this is the last assistant message and loading, show TypingDots */}
                  {isLoading &&
                    message.role === "assistant" &&
                    index === messages.length - 1 && !message.content && <TypingDots />}
                </p>
                <span className="text-xs opacity-70 mt-3 block">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}

          {/* If waiting for agent response, show a pending assistant bubble with dots */}
          {pendingAssistant && (
            <div className="flex justify-start animate-fade-in">
              <div className="backdrop-blur-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-5">
                <TypingDots />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border backdrop-blur-lg bg-background/80 p-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 bg-input border-border h-12 px-6 text-base focus:ring-2 focus:ring-primary transition-all duration-300"
            />
            <Button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-gradient-glow hover:opacity-90 hover:scale-105 transition-all duration-300 h-12 px-6"
            >
              {isLoading ? (
                <Send className="w-5 h-5" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
