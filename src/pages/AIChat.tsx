
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type Message = {
  id: number;
  sender: "ai" | "user";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    content: "Hello! What kind of plan would you like to do today?",
  },
  {
    id: 2,
    sender: "user",
    content: "I'd like to organize a language exchange meetup at a café in the city center",
  },
  {
    id: 3,
    sender: "ai",
    content: "That's a great idea! What time would you like to schedule the language exchange meetup?",
  },
  {
    id: 4,
    sender: "user",
    content: "Today in the afternoon would be perfect",
  },
  {
    id: 5,
    sender: "ai",
    content: "Great! I can help you set up a language exchange meetup. Would you like me to look for people interested in specific languages or with particular language learning goals?",
  },
  {
    id: 6,
    sender: "user",
    content: "Yes! I'd like to practice English, and I can help others with Spanish. Maybe we could find people interested in this language exchange?",
  },
  {
    id: 7,
    sender: "ai",
    content: "Perfect! I'm creating your plan now... Done! I've set it up with: Location: city center café, Languages: English/Spanish exchange, Time: Today afternoon. You can find it in 'My Plans'. I'll notify you when other language enthusiasts join!",
  },
];

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "user",
        content: newMessage.trim(),
      }]);
      setNewMessage("");
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          sender: "ai",
          content: "I'll help you create a plan based on that! What other details would you like to add?",
        }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 pt-[4rem] pb-[5rem]">
      <div className="absolute top-[4rem] bottom-[4rem] left-0 right-0 overflow-y-auto px-4">
        <div className="space-y-4 py-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`p-4 ${
                message.sender === "user"
                  ? "ml-auto bg-blue-500 text-white max-w-[85%]"
                  : "mr-auto bg-white max-w-[85%]"
              }`}
            >
              <div className="break-words">{message.content}</div>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="fixed bottom-[5rem] left-0 right-0 p-4 border-t bg-white">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Tell me what plan you want to do..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
