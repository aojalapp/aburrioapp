
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
    content: "I wanna go to have a few beers with some friends to the city center, but we wanna join us a group of girls",
  },
  {
    id: 3,
    sender: "ai",
    content: "Seems a great plan! At what time approximately would you like to go for those beers to the city center?",
  },
  {
    id: 4,
    sender: "user",
    content: "Today in the afternoon would be great",
  },
  {
    id: 5,
    sender: "ai",
    content: "Awesome! I will post your plan in the plan screen so people can join you. I will only show your plan to users matching your requirements, which in your case are girls. If you want me to help you find any other specific kind of user just let me know (for example, with a specific age range, nationality, language they speak, or hobbies in common)",
  },
  {
    id: 6,
    sender: "user",
    content: "Cool! Then try to find girls between 20 and 30 years old in the city which speak English, it would be awesome to have a few beers with them so me and my friends can practice English as well!",
  },
  {
    id: 7,
    sender: "ai",
    content: "Awesome! Creating your plan now... Plan created! You can take a look at it in 'My Plans' and wait for people to join you! I've set it up with: Location: city center, Age range: 20-30, Languages: English, Time: Today afternoon. Good luck!",
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
              className={`p-4 max-w-[80%] ${
                message.sender === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "mr-auto bg-white"
              }`}
            >
              {message.content}
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
