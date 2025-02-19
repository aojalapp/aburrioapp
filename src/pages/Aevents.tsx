
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const mockEvents = [
  {
    id: 1,
    title: "Tech Conference 2024",
    date: "March 15, 2024",
    location: "San Francisco",
    capacity: "250 spots",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    description: "Join us for an exciting conference featuring the latest in technology and innovation. Network with industry leaders and learn about emerging trends.",
  },
  {
    id: 2,
    title: "AI Summit",
    date: "April 20, 2024",
    location: "New York",
    capacity: "300 spots",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Explore the future of artificial intelligence with leading experts and researchers. Hands-on workshops and networking opportunities included.",
  },
  {
    id: 3,
    title: "Web3 Workshop",
    date: "May 5, 2024",
    location: "London",
    capacity: "150 spots",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "Deep dive into blockchain, NFTs, and the future of the web. Perfect for developers and entrepreneurs.",
  },
  {
    id: 4,
    title: "Developer Meetup",
    date: "June 10, 2024",
    location: "Berlin",
    capacity: "200 spots",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    description: "Connect with fellow developers, share experiences, and learn about the latest tools and technologies.",
  },
  {
    id: 5,
    title: "Design Systems Workshop",
    date: "July 15, 2024",
    location: "Amsterdam",
    capacity: "100 spots",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12",
    description: "Learn how to create and maintain scalable design systems. Perfect for designers and developers working on large applications.",
  }
];

interface EventCardProps {
  event: typeof mockEvents[0];
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
  translateX: number;
}

const EventCard = ({ event, onSwipeLeft, onSwipeRight, translateX }: EventCardProps) => (
  <Card className="mb-6 overflow-hidden bg-white/80 backdrop-blur-sm border border-orange-100 hover:border-orange-200 transition-all">
    <div 
      className="relative transition-transform duration-300 ease-out"
      style={{ transform: `translateX(${translateX}px)` }}
    >
      <div className="relative aspect-video">
        <img
          src={event.image}
          alt={event.title}
          className="object-cover w-full h-full rounded-t-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold text-orange-900">{event.title}</h2>
        
        <div className="flex items-center gap-4 text-orange-700">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{event.capacity}</span>
          </div>
        </div>

        <p className="text-orange-700">{event.description}</p>

        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex-1 border-red-400 text-red-500 hover:bg-red-50 hover:border-red-500 transition-colors"
            onClick={onSwipeLeft}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Not interested
          </Button>
          <Button 
            className="flex-1 bg-orange-400 hover:bg-orange-500 text-white transition-colors"
            onClick={onSwipeRight}
          >
            I wanna go
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  </Card>
);

const Aevents = () => {
  const [swipeStates, setSwipeStates] = useState<{ [key: number]: number }>(
    mockEvents.reduce((acc, event) => ({ ...acc, [event.id]: 0 }), {})
  );

  const handleSwipeLeft = (eventId: number) => {
    setSwipeStates(prev => ({
      ...prev,
      [eventId]: -100
    }));
    setTimeout(() => {
      setSwipeStates(prev => ({
        ...prev,
        [eventId]: -9999
      }));
    }, 300);
  };

  const handleSwipeRight = (eventId: number) => {
    setSwipeStates(prev => ({
      ...prev,
      [eventId]: 100
    }));
    setTimeout(() => {
      setSwipeStates(prev => ({
        ...prev,
        [eventId]: 9999
      }));
    }, 300);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-orange-900">Upcoming Events</h1>
        <p className="text-orange-700">Find your next adventure!</p>
      </div>

      <div className="space-y-6">
        {mockEvents.map((event) => (
          <div 
            key={event.id}
            style={{
              display: Math.abs(swipeStates[event.id]) >= 9000 ? 'none' : 'block'
            }}
          >
            <EventCard
              event={event}
              onSwipeLeft={() => handleSwipeLeft(event.id)}
              onSwipeRight={() => handleSwipeRight(event.id)}
              translateX={swipeStates[event.id] || 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aevents;
