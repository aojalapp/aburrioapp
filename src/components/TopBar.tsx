
import { Wallet, User } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-b border-purple-100 px-6 py-4 z-50 animate-slide-down">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          Aivent
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/wallet"
            className="p-2 rounded-full hover:bg-purple-50 transition-colors"
          >
            <Wallet className="w-6 h-6 text-purple-600" />
          </Link>
          <Link
            to="/profile"
            className="p-2 rounded-full hover:bg-purple-50 transition-colors"
          >
            <User className="w-6 h-6 text-purple-600" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
