
import { Card } from "@/components/ui/card";

const notifications = [
  {
    id: 1,
    type: "join",
    content: "Laura wants to join your plan 'Beers & English Practice'",
    time: "5 minutes ago"
  },
  {
    id: 2,
    type: "like",
    content: "Your plan just received a new like",
    time: "10 minutes ago"
  },
  {
    id: 3,
    type: "join",
    content: "Maria joined your plan 'Weekend Hiking'",
    time: "1 hour ago"
  }
];

const Notifications = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-900">Notifications</h1>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card 
            key={notification.id}
            className="p-4 bg-white/70 backdrop-blur-sm border-blue-100 hover:border-blue-200 transition-all"
          >
            <p className="text-blue-900">{notification.content}</p>
            <p className="text-sm text-blue-500 mt-2">{notification.time}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
