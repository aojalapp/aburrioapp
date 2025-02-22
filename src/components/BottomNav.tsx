
import { MessageSquare, Radio, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BottomNav = () => {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-t border-blue-100 px-6 py-3 z-50 animate-slide-up">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="flex flex-col items-center gap-1"
        >
          <MessageSquare className="w-6 h-6 text-blue-500" />
          <span className="text-xs text-blue-500">Chat</span>
        </Link>

        <Button
          variant={isAvailable ? "default" : "outline"}
          className={`flex flex-col items-center gap-1 ${
            isAvailable ? "bg-blue-500" : "border-blue-500 text-blue-500"
          }`}
          onClick={() => setIsAvailable(!isAvailable)}
        >
          <Radio className="w-6 h-6" />
          <span className="text-xs">Available</span>
        </Button>

        <Link 
          to="/plans" 
          className="flex flex-col items-center gap-1"
        >
          <Calendar className="w-6 h-6 text-blue-500" />
          <span className="text-xs text-blue-500">Plans</span>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
