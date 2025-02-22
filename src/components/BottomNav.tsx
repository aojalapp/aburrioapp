
import { MessageCircle, MapPin, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-t border-blue-100 px-6 py-3 z-50 animate-slide-up">
      <div className="max-w-lg mx-auto flex justify-around items-center">
        <Link 
          to="/plans" 
          className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
            isActive("/plans") ? "text-blue-500" : "text-blue-400"
          }`}
        >
          <Calendar className="w-6 h-6" />
          <span className="text-xs">Plans</span>
        </Link>

        <Link 
          to="/chats" 
          className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
            isActive("/chats") ? "text-blue-600" : "text-blue-500"
          }`}
        >
          <MessageCircle className="w-7 h-7" />
          <span className="text-xs">Chats</span>
        </Link>

        <Link 
          to="/map" 
          className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors ${
            isActive("/map") ? "text-blue-500" : "text-blue-400"
          }`}
        >
          <MapPin className="w-6 h-6" />
          <span className="text-xs">Map</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
