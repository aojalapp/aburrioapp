
import { Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-b border-blue-100 px-6 py-4 z-50 animate-slide-down">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-500">
          BAF
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            asChild
          >
            <Link to="/notifications">
              <Bell className="w-5 h-5 text-blue-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
          >
            <Link to="/profile">
              <User className="w-5 h-5 text-blue-500" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
