
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const chatData = {
  "beer-group": {
    name: "🍺 English Practice @ Irish Pub",
    messages: [
      { id: 1, sender: "John", content: "Hey everyone! Ready for some English practice?", time: "14:30" },
      { id: 2, sender: "Maria", content: "Yes! I'll be there around 6", time: "14:35" },
      { id: 3, sender: "You", content: "Perfect! First round's on me 🍺", time: "14:40" },
      { id: 4, sender: "Alex", content: "I'll be there in 5!", time: "14:45" },
    ]
  },
  "football": {
    name: "⚽ Sunday Football Match",
    messages: [
      { id: 1, sender: "Coach", content: "Don't forget to bring your gear!", time: "10:00" },
      { id: 2, sender: "You", content: "Can someone bring an extra ball?", time: "10:15" },
      { id: 3, sender: "Mike", content: "I got you covered", time: "10:20" },
    ]
  },
  "museum": {
    name: "🏛️ Modern Art Exhibition",
    messages: [
      { id: 1, sender: "Guide", content: "The tour will start at the main entrance", time: "09:00" },
      { id: 2, sender: "Emma", content: "Is there a café inside?", time: "09:05" },
      { id: 3, sender: "Guide", content: "Yes, on the second floor!", time: "09:07" },
    ]
  },
  "concert": {
    name: "🎸 Rock Concert Tonight",
    messages: [
      { id: 1, sender: "Sarah", content: "Got my tickets ready!", time: "15:00" },
      { id: 2, sender: "You", content: "Let's meet at the entrance at 8", time: "15:10" },
      { id: 3, sender: "Tom", content: "Don't forget your tickets!", time: "15:15" },
    ]
  }
};

const GroupChat = () => {
  const { chatId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const chat = chatData[chatId as keyof typeof chatData];

  if (!chat) return <div>Chat not found</div>;

  const handleSend = () => {
    if (newMessage.trim()) {
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="flex items-center gap-4 p-4 border-b bg-white">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/chats">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="font-semibold text-blue-900">{chat.name}</h1>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {chat.messages.map((message) => (
          <Card
            key={message.id}
            className={`p-4 max-w-[80%] ${
              message.sender === "You"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-white"
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs opacity-75">{message.sender}</span>
              <p>{message.content}</p>
              <span className="text-xs opacity-75 text-right">{message.time}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
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

export default GroupChat;
