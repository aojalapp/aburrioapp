
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

type PEvent = {
  id: number;
  title: string;
  description: string;
  likes: number;
};

const mockPevents: PEvent[] = [
  {
    id: 1,
    title: "Community Meetup",
    description: "A community gathering to discuss local initiatives and meet your neighbors. Help make this event happen by showing your support!",
    likes: 24,
  },
  {
    id: 2,
    title: "Tech Workshop Series",
    description: "Weekly workshops covering different programming languages and frameworks. Vote if you'd like to see this happen!",
    likes: 42,
  },
  {
    id: 3,
    title: "Art Exhibition",
    description: "Local artists showcasing their work. Support this event to bring more culture to our community!",
    likes: 15,
  },
  {
    id: 4,
    title: "Food Festival",
    description: "A celebration of local cuisine and food vendors. Help make this culinary experience a reality!",
    likes: 67,
  }
];

const Pevents = () => {
  const [likedEvents, setLikedEvents] = useState<Set<number>>(new Set());
  const [events, setEvents] = useState<PEvent[]>(mockPevents);

  const handleLike = (eventId: number) => {
    setEvents(events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          likes: likedEvents.has(eventId) ? event.likes - 1 : event.likes + 1
        };
      }
      return event;
    }));

    setLikedEvents(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(eventId)) {
        newLiked.delete(eventId);
      } else {
        newLiked.add(eventId);
      }
      return newLiked;
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Proposed Events</h1>
        <p className="text-gray-600">Support events you'd like to see happen</p>
      </div>

      {events.map((event) => (
        <Card key={event.id} className="p-6 space-y-4">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            
            <p className="text-gray-600">{event.description}</p>

            <Button 
              variant="ghost" 
              onClick={() => handleLike(event.id)}
              className="w-full gap-2 hover:bg-transparent"
            >
              <Heart 
                className={`w-6 h-6 transition-colors ${
                  likedEvents.has(event.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                }`} 
              />
              <span className={`${
                likedEvents.has(event.id) ? "text-red-500" : "text-gray-600"
              }`}>
                {event.likes} likes
              </span>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Pevents;
