
import { Bell, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const TopBar = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const { toast } = useToast();

  const handleAvailabilityChange = (checked: boolean) => {
    setIsAvailable(checked);
    toast({
      title: checked ? "¡Ahora estás Aburrio!" : "Estado actualizado",
      description: checked 
        ? "Otros usuarios ahora pueden ver que estás activamente buscando un plan para hoy" 
        : "Activa esto de nuevo cuando estés aburrido y buscando un plan",
      variant: "default",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 glass z-50 animate-slide-down">
      <div className="max-w-lg mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary-100 transition-colors duration-200 relative"
            asChild
          >
            <Link to="/profile">
              <User className="w-5 h-5 text-primary-600" />
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-primary-400 rounded-full border-2 border-white"></span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary-100 transition-colors duration-200 relative"
            asChild
          >
            <Link to="/notifications">
              <Bell className="w-5 h-5 text-primary-600" />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center shadow-sm border border-white">
                2
              </span>
            </Link>
          </Button>
        </div>

        <Link to="/" className="relative andalusian-title-bg">
          <span className="relative text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-800 bg-clip-text text-transparent tracking-wider px-2 py-1 z-10">Aburrio</span>
        </Link>

        <Switch
          checked={isAvailable}
          onCheckedChange={handleAvailabilityChange}
          className="w-16 h-8 bg-gray-200 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-primary-500 data-[state=checked]:to-primary-600"
        >
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className={`text-sm font-medium transition-opacity ${
              isAvailable ? "opacity-0" : "opacity-100 text-gray-400"
            }`}>
              OFF
            </span>
          </span>
          <span className="block h-7 w-7 rounded-full bg-white shadow-lg ring-0 transition-transform duration-200 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[2.1rem]">
            <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${
              isAvailable ? "text-primary-500" : "text-gray-400"
            }`}>
              ABR
            </span>
          </span>
        </Switch>
      </div>
    </header>
  );
};

export default TopBar;
