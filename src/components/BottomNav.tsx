
import { MessageCircle, Bot, List } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-t border-blue-100 px-6 py-3 z-50 animate-slide-up">
      <div className="max-w-lg mx-auto flex justify-around items-center">
        <Link 
          to="/chats" 
          className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
            isActive("/chats") ? "text-blue-500" : "text-blue-400"
          }`}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Chats</span>
        </Link>

        <Link 
          to="/ai-chat" 
          className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
            isActive("/ai-chat") ? "text-blue-600" : "text-blue-500"
          }`}
        >
          <Bot className="w-7 h-7" />
          <span className="text-xs">AI Assistant</span>
        </Link>

        <Link 
          to="/plans" 
          className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
            isActive("/plans") ? "text-blue-500" : "text-blue-400"
          }`}
        >
          <List className="w-6 h-6" />
          <span className="text-xs">Plans</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
