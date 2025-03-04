
import { MessageCircle, Bot, List } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass border-t border-primary-200 px-4 py-2 z-50 animate-slide-up">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-around items-center">
          <NavItem 
            to="/chats" 
            icon={<MessageCircle />} 
            label="Chats" 
            isActive={isActive("/chats")} 
          />
          
          <NavItem 
            to="/ai-chat" 
            icon={<Bot />} 
            label="NicoAI" 
            isActive={isActive("/ai-chat")} 
            isPrimary={true}
          />
          
          <NavItem 
            to="/plans" 
            icon={<List />} 
            label="Planes" 
            isActive={isActive("/plans")} 
          />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ 
  to, 
  icon, 
  label, 
  isActive, 
  isPrimary = false 
}: { 
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  isPrimary?: boolean;
}) => {
  return (
    <Link 
      to={to} 
      className={`flex flex-col items-center gap-0.5 p-2 rounded-xl transition-all duration-200 ${
        isActive 
          ? "bg-primary-50 text-primary-600" 
          : "text-gray-500 hover:text-primary-600 hover:bg-primary-50/50"
      } ${isPrimary ? "scale-110" : ""}`}
    >
      <div className={`p-2 rounded-full ${
        isActive 
          ? isPrimary 
            ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-glow" 
            : "bg-primary-100 text-primary-600"
          : "text-inherit"
      } transition-colors duration-200`}>
        {React.cloneElement(icon as React.ReactElement, { 
          className: `w-5 h-5 ${isActive && isPrimary ? "animate-pulse-gentle" : ""}` 
        })}
      </div>
      <span className={`text-xs font-medium ${
        isActive ? "text-primary-800" : "text-inherit"
      }`}>
        {label}
      </span>
    </Link>
  );
};

export default BottomNav;
