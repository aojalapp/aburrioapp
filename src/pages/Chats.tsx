
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Users, Search, Plus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const chatGroups = [
  {
    id: "beer-group",
    name: "🍺 English Practice @ Irish Pub",
    lastMessage: "I'll be there in 5!",
    time: "14:45",
    members: 6,
    unread: 3,
  },
  {
    id: "football",
    name: "⚽ Sunday Football Match",
    lastMessage: "Let's meet at the usual spot",
    time: "Yesterday",
    members: 12,
  },
  {
    id: "museum",
    name: "🏛️ Modern Art Exhibition",
    lastMessage: "The guided tour starts at 3PM",
    time: "Yesterday",
    members: 4,
  },
  {
    id: "concert",
    name: "🎸 Rock Concert Tonight",
    lastMessage: "Don't forget your tickets!",
    time: "Monday",
    members: 8,
  },
];

const Chats = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Chats</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full border-primary-200 text-primary-600 hover:bg-primary-50">
            <Search className="w-4 h-4" />
          </Button>
          <Button size="icon" className="rounded-full bg-primary-500 hover:bg-primary-600 text-white">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="space-y-3 relative">
          {chatGroups.map((chat) => (
            <Link key={chat.id} to={`/chat/${chat.id}`}>
              <Card className="p-4 hover:bg-primary-50/50 transition-all duration-300 glass-card border-primary-100">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-primary-500" />
                    </div>
                    {chat.unread && (
                      <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center border-2 border-white">
                        {chat.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-primary-800 truncate">
                        {chat.name}
                      </h3>
                      <span className="text-xs text-primary-500 whitespace-nowrap ml-2 bg-primary-50 px-2 py-0.5 rounded-full">
                        {chat.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate mt-0.5">
                      {chat.lastMessage}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-primary-500 mt-1">
                      <Users className="w-3 h-3" />
                      <span>{chat.members} members</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chats;
