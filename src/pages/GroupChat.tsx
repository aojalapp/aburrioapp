
import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Send, ArrowLeft, Paperclip, Image, Smile, Mic, MoreVertical, Phone, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

const chatData = {
  "beer-group": {
    name: "🍺 English Practice @ Irish Pub",
    messages: [
      { id: 1, sender: "John", content: "Hey everyone! Ready for some English practice?", time: "14:30", avatar: "J" },
      { id: 2, sender: "Maria", content: "Yes! I'll be there around 6", time: "14:35", avatar: "M" },
      { id: 3, sender: "You", content: "Perfect! First round's on me 🍺", time: "14:40", avatar: "Y" },
      { id: 4, sender: "Alex", content: "I'll be there in 5!", time: "14:45", avatar: "A" },
    ]
  },
  "football": {
    name: "⚽ Sunday Football Match",
    messages: [
      { id: 1, sender: "Coach", content: "Don't forget to bring your gear!", time: "10:00", avatar: "C" },
      { id: 2, sender: "You", content: "Can someone bring an extra ball?", time: "10:15", avatar: "Y" },
      { id: 3, sender: "Mike", content: "I got you covered", time: "10:20", avatar: "M" },
    ]
  },
  "museum": {
    name: "🏛️ Modern Art Exhibition",
    messages: [
      { id: 1, sender: "Guide", content: "The tour will start at the main entrance", time: "09:00", avatar: "G" },
      { id: 2, sender: "Emma", content: "Is there a café inside?", time: "09:05", avatar: "E" },
      { id: 3, sender: "Guide", content: "Yes, on the second floor!", time: "09:07", avatar: "G" },
    ]
  },
  "concert": {
    name: "🎸 Rock Concert Tonight",
    messages: [
      { id: 1, sender: "Sarah", content: "Got my tickets ready!", time: "15:00", avatar: "S" },
      { id: 2, sender: "You", content: "Let's meet at the entrance at 8", time: "15:10", avatar: "Y" },
      { id: 3, sender: "Tom", content: "Don't forget your tickets!", time: "15:15", avatar: "T" },
    ]
  }
};

const GroupChat = () => {
  const { chatId } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const chat = chatData[chatId as keyof typeof chatData];
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chat) {
      setMessages(chat.messages);
    }
  }, [chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: "You",
        content: newMessage.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: "Y"
      };
      setMessages([...messages, newMsg]);
      setNewMessage("");
    }
  };

  if (!chat) return <div>Chat not found</div>;

  const getInitials = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getRandomColor = (name: string) => {
    const colors = [
      "bg-primary-500", "bg-red-500", "bg-blue-500", 
      "bg-purple-500", "bg-amber-500", "bg-teal-500"
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const isConsecutiveMessage = (messageIndex: number) => {
    if (messageIndex === 0) return false;
    return messages[messageIndex].sender === messages[messageIndex - 1].sender;
  };

  return (
    <div className="fixed inset-0 pt-[4rem] pb-[5rem] bg-gradient-to-br from-primary-50 via-white to-primary-100">
      <div className="fixed top-[4rem] left-0 right-0 glass z-10 border-b border-primary-200">
        <div className="max-w-lg mx-auto flex items-center justify-between gap-4 p-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild className="text-primary-600 hover:bg-primary-100">
              <Link to="/chats">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <span className="text-primary-600 font-medium">{chat.name.split(" ")[0]}</span>
              </div>
              <div>
                <h1 className="font-semibold text-primary-800">{chat.name}</h1>
                <p className="text-xs text-primary-600">{messages.length} messages</p>
              </div>
            </div>
          </div>
          <div className="flex gap-1">
            <Button variant="ghost" size="icon" className="text-primary-600 hover:bg-primary-100 h-8 w-8">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-600 hover:bg-primary-100 h-8 w-8">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-600 hover:bg-primary-100 h-8 w-8">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-[8rem] bottom-[4rem] left-0 right-0 overflow-y-auto px-4">
        <div className="space-y-3 py-4 max-w-lg mx-auto">
          <div className="text-center mb-6">
            <div className="inline-block bg-primary-100 rounded-full px-3 py-1.5 text-xs text-primary-700">
              Today
            </div>
          </div>

          {messages.map((message, index) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === "You" ? "justify-end" : "justify-start"} ${
                isConsecutiveMessage(index) ? "mt-1" : "mt-4"
              }`}
            >
              {message.sender !== "You" && !isConsecutiveMessage(index) && (
                <Avatar className={`mr-2 ${getRandomColor(message.sender)}`}>
                  <div className="flex h-full w-full items-center justify-center text-sm font-medium text-white">
                    {getInitials(message.sender)}
                  </div>
                </Avatar>
              )}

              <div className={`space-y-1 max-w-[75%] ${message.sender === "You" ? "items-end" : "items-start"}`}>
                {!isConsecutiveMessage(index) && message.sender !== "You" && (
                  <div className="text-xs font-medium text-primary-800 ml-1">
                    {message.sender}
                  </div>
                )}
                
                <Card
                  className={`p-3 shadow-sm ${
                    message.sender === "You"
                      ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-tl-2xl rounded-tr-xl rounded-bl-2xl"
                      : "glass-card rounded-tr-2xl rounded-tl-xl rounded-br-2xl"
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                </Card>
                
                <div className={`text-xs text-gray-500 ${message.sender === "You" ? "text-right mr-1" : "ml-1"}`}>
                  {message.time}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="fixed bottom-[5rem] left-0 right-0 glass border-t border-primary-200">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white rounded-full border border-primary-100 shadow-sm pl-4 pr-2 py-1 flex-1">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="border-0 focus-visible:ring-0 bg-transparent text-sm flex-1 h-8 px-0"
              />
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-400 hover:text-primary-500 hover:bg-primary-50">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-400 hover:text-primary-500 hover:bg-primary-50">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-400 hover:text-primary-500 hover:bg-primary-50">
                  <Image className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-primary-400 hover:text-primary-500 hover:bg-primary-50">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button 
              onClick={handleSend} 
              size="icon" 
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-full h-10 w-10 shadow-md"
              disabled={!newMessage.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupChat;
