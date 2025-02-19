
import { Home, PlusCircle, Calendar, Heart, Wallet, User } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-6 py-3 z-50 animate-slide-up">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <Link to="/aevents" className="flex flex-col items-center gap-1">
          <Calendar className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Events</span>
        </Link>
        <Link to="/pevents" className="flex flex-col items-center gap-1">
          <Heart className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Proposed</span>
        </Link>
        <Link to="/create-pevent" className="flex flex-col items-center gap-1">
          <PlusCircle className="w-6 h-6 text-primary" />
          <span className="text-xs text-gray-600">Create</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center gap-1">
          <User className="w-6 h-6 text-gray-600" />
          <span className="text-xs text-gray-600">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
