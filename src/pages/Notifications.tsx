import { Card } from "@/components/ui/card";
import { Bell, UserPlus, Heart, Calendar, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BackButton from "@/components/BackButton";

type NotificationType = "join" | "like" | "accept" | "reminder";

interface Notification {
  id: number;
  type: NotificationType;
  content: string;
  time: string;
  read: boolean;
  actions?: boolean;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "join",
      content: "Laura wants to join your plan 'Beers & English Practice'",
      time: "5 minutes ago",
      read: false,
      actions: true
    },
    {
      id: 2,
      type: "like",
      content: "Your plan just received a new like",
      time: "10 minutes ago",
      read: false,
      actions: false
    },
    {
      id: 3,
      type: "join",
      content: "Maria joined your plan 'Weekend Hiking'",
      time: "1 hour ago",
      read: true,
      actions: false
    },
    {
      id: 4,
      type: "accept",
      content: "Carlos accepted your request to join 'Tech Conference 2024'",
      time: "2 hours ago",
      read: true,
      actions: false
    },
    {
      id: 5,
      type: "reminder",
      content: "Don't forget your upcoming plan 'English Practice' tomorrow at 6 PM",
      time: "3 hours ago",
      read: true,
      actions: false
    }
  ]);

  const handleAccept = (id: number) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, actions: false, read: true } : notification
    ));
  };

  const handleReject = (id: number) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case "join":
        return <UserPlus className="w-6 h-6 text-primary-500" />;
      case "like":
        return <Heart className="w-6 h-6 text-red-500" />;
      case "accept":
        return <Check className="w-6 h-6 text-green-500" />;
      case "reminder":
        return <Calendar className="w-6 h-6 text-primary-500" />;
      default:
        return <Bell className="w-6 h-6 text-primary-500" />;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center mb-4">
        <BackButton />
        <div className="flex items-center justify-between flex-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Notifications</h1>
          <div className="text-xs font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {notifications.filter(n => !n.read).length} new
          </div>
        </div>
      </div>

      {notifications.length === 0 ? (
        <div className="glass-card p-6 text-center space-y-3">
          <Bell className="w-10 h-10 text-primary-300 mx-auto" />
          <p className="text-gray-500">No notifications yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id}
              className={`p-4 overflow-hidden transition-all duration-300 ${
                notification.read 
                  ? "glass-card opacity-80 hover:opacity-100" 
                  : "glass-card border-l-4 border-l-primary-500 shadow-md"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`rounded-full p-2 ${notification.read ? "bg-primary-50" : "bg-primary-100"}`}>
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <p className={`text-gray-800 ${!notification.read ? "font-medium" : ""}`}>
                    {notification.content}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {notification.time}
                  </p>
                  {notification.actions && (
                    <div className="flex gap-2 mt-3">
                      <Button 
                        onClick={() => handleAccept(notification.id)}
                        className="bg-primary-500 hover:bg-primary-600 text-white text-sm px-3 py-1 h-8 rounded-lg"
                      >
                        Accept
                      </Button>
                      <Button 
                        onClick={() => handleReject(notification.id)}
                        variant="outline"
                        className="text-gray-600 text-sm px-3 py-1 h-8 rounded-lg"
                      >
                        Decline
                      </Button>
                    </div>
                  )}
                </div>
                {!notification.actions && (
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 rounded-full hover:bg-gray-100"
                    onClick={() => handleReject(notification.id)}
                  >
                    <X className="h-4 w-4 text-gray-400" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
