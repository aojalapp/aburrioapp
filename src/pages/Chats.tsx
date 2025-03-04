
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Users } from "lucide-react";

const chatGroups = [
  {
    id: "beer-group",
    name: "🍺 English Practice @ Irish Pub",
    lastMessage: "I'll be there in 5!",
    time: "14:45",
    members: 6,
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
      <div className="text-center">
        <h1 className="text-2xl font-bold text-green-900">Chats</h1>
        <p className="text-green-600">Your plan conversations</p>
      </div>

      <div className="space-y-2">
        {chatGroups.map((chat) => (
          <Link key={chat.id} to={`/chat/${chat.id}`}>
            <Card className="p-4 hover:bg-green-50/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-green-900 truncate">
                      {chat.name}
                    </h3>
                    <span className="text-xs text-green-400 whitespace-nowrap ml-2">
                      {chat.time}
                    </span>
                  </div>
                  <p className="text-sm text-green-600 truncate">
                    {chat.lastMessage}
                  </p>
                  <div className="text-xs text-green-400 mt-1">
                    {chat.members} members
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Chats;
