
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
  },
  {
    id: 5,
    title: "Music in the Park",
    description: "An evening of live music under the stars. Support this event to bring melody to our community!",
    likes: 89,
  },
  {
    id: 6,
    title: "Startup Networking",
    description: "Connect with fellow entrepreneurs and innovators. Let's make this networking event happen!",
    likes: 31,
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
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
          Proposed Events
        </h1>
        <p className="text-purple-700/70">Support events you'd like to see happen</p>
      </div>

      <div className="grid gap-6">
        {events.map((event) => (
          <Card 
            key={event.id} 
            className="group relative overflow-hidden bg-white/70 backdrop-blur-sm border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100"
          >
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-purple-900 group-hover:text-purple-700 transition-colors">
                {event.title}
              </h2>
              
              <p className="text-purple-700/70 leading-relaxed">
                {event.description}
              </p>

              <Button 
                variant="ghost" 
                onClick={() => handleLike(event.id)}
                className="w-full gap-3 hover:bg-purple-50 group/btn transition-all duration-300"
              >
                <Heart 
                  className={`w-6 h-6 transition-all duration-300 ${
                    likedEvents.has(event.id) 
                      ? "fill-purple-500 text-purple-500 scale-110" 
                      : "text-purple-400 group-hover/btn:scale-110"
                  }`} 
                />
                <span className={`font-medium ${
                  likedEvents.has(event.id) 
                    ? "text-purple-500" 
                    : "text-purple-400"
                }`}>
                  {event.likes} likes
                </span>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pevents;
