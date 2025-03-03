
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
    <header className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-lg border-b border-green-100 px-6 py-4 z-50 animate-slide-down">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-green-50"
            asChild
          >
            <Link to="/profile">
              <User className="w-5 h-5 text-green-500" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-green-50 relative"
            asChild
          >
            <Link to="/notifications">
              <Bell className="w-5 h-5 text-green-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </Button>
        </div>

        <span className="text-2xl font-bold text-green-500 tracking-wider">Aburrio</span>

        <Switch
          checked={isAvailable}
          onCheckedChange={handleAvailabilityChange}
          className="w-16 h-8 bg-gray-200 data-[state=checked]:bg-green-500"
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
              isAvailable ? "text-green-500" : "text-gray-400"
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
