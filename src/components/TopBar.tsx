
import { Wallet, User } from "lucide-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4 z-50 animate-slide-down">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-primary">
          Aivent
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to="/wallet"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Wallet className="w-6 h-6 text-gray-600" />
          </Link>
          <Link
            to="/profile"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <User className="w-6 h-6 text-gray-600" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
