
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-t border-purple-100 px-6 py-3 z-50 animate-slide-up">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <Link 
          to="/aevents" 
          className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-purple-50 transition-all"
        >
          <span className="text-2xl font-bold text-purple-600">A</span>
          <span className="text-xs text-purple-600/70">Events</span>
        </Link>
        <Link 
          to="/pevents" 
          className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-purple-50 transition-all"
        >
          <span className="text-2xl font-bold text-purple-600">P</span>
          <span className="text-xs text-purple-600/70">Proposed</span>
        </Link>
        <Link 
          to="/create-pevent" 
          className="flex flex-col items-center gap-1 p-2 rounded-xl hover:bg-purple-50 transition-all"
        >
          <PlusCircle className="w-6 h-6 text-purple-600" />
          <span className="text-xs text-purple-600/70">Create</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
