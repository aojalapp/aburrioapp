
import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { useState } from "react";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "Convention Center"
  },
  {
    id: 2,
    title: "Beers & Practice English",
    date: "2024-03-20",
    time: "06:00 PM",
    location: "Irish Pub Downtown"
  }
];

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-900">My Calendar</h1>
        <p className="text-blue-600">Your upcoming plans and events</p>
      </div>

      <Card className="p-4 bg-white/80 backdrop-blur-sm">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border-blue-100"
        />
      </Card>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-blue-900">Upcoming Plans</h2>
        {upcomingEvents.map((event) => (
          <Card
            key={event.id}
            className="p-4 bg-white/80 backdrop-blur-sm border-blue-100 hover:border-blue-200 transition-all"
          >
            <div className="space-y-2">
              <h3 className="font-medium text-blue-900">{event.title}</h3>
              <div className="flex items-center gap-4 text-sm text-blue-600">
                <div className="flex items-center gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
              </div>
              <p className="text-sm text-blue-500">{event.location}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
