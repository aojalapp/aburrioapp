import { Card } from "@/components/ui/card";
import { Calendar as CalendarIcon, Clock, MapPin, Users, Star, Filter } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BackButton from "@/components/BackButton";

const upcomingEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "Convention Center",
    type: "event",
    participants: 250,
    featured: true
  },
  {
    id: 2,
    title: "Beers & Practice English",
    date: "2024-03-20",
    time: "06:00 PM",
    location: "Irish Pub Downtown",
    type: "social",
    participants: 8
  },
  {
    id: 3,
    title: "Weekend Hiking Trip",
    date: "2024-03-25",
    time: "08:00 AM",
    location: "Mountain Park",
    type: "outdoor",
    participants: 12
  }
];

type EventType = "all" | "event" | "social" | "outdoor";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [filter, setFilter] = useState<EventType>("all");
  
  const filteredEvents = filter === "all" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === filter);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center mb-4">
        <BackButton />
        <div className="text-center flex-1">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">My Calendar</h1>
          <p className="text-primary-600">Your upcoming plans and events</p>
        </div>
      </div>

      <Card className="glass-card p-4 overflow-hidden">
        <CalendarComponent
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border-primary-100"
        />
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-primary-800">Upcoming Plans</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-xs rounded-full px-3 ${filter === "all" ? "bg-primary-100 text-primary-700" : "text-gray-600"}`}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-xs rounded-full px-3 ${filter === "event" ? "bg-primary-100 text-primary-700" : "text-gray-600"}`}
            onClick={() => setFilter("event")}
          >
            Events
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-xs rounded-full px-3 ${filter === "social" ? "bg-primary-100 text-primary-700" : "text-gray-600"}`}
            onClick={() => setFilter("social")}
          >
            Social
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredEvents.map((event) => (
          <Card
            key={event.id}
            className={`p-0 overflow-hidden glass-card ${event.featured ? "border-primary-300" : ""}`}
          >
            {event.featured && (
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs py-1 px-3 flex items-center justify-center">
                <Star className="w-3 h-3 mr-1" /> Featured Event
              </div>
            )}
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-primary-800">{event.title}</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    <div className="flex items-center gap-1.5 text-sm text-primary-600">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-primary-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-primary-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-primary-600">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} attendees</span>
                    </div>
                  </div>
                </div>
                <div className={`rounded-full px-2.5 py-1 text-xs font-medium 
                  ${event.type === 'event' ? 'bg-blue-100 text-blue-700' : 
                  event.type === 'social' ? 'bg-purple-100 text-purple-700' : 
                  'bg-green-100 text-green-700'}`}
                >
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </div>
              </div>
              <div className="flex justify-end mt-3">
                <Button size="sm" className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
