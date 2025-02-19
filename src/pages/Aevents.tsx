
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
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
  }
];

const Aevents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    if (currentIndex < mockEvents.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
        <p className="text-gray-600">Swipe right to book, left to pass</p>
      </div>

      <div className="relative">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {mockEvents.map((event) => (
            <Card key={event.id} className="flex-shrink-0 w-full p-6 space-y-4">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">{event.title}</h2>
                
                <div className="flex items-center gap-4 text-gray-600">
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

                <p className="text-gray-600">{event.description}</p>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-red-500 text-red-500 hover:bg-red-50"
                    onClick={handleSwipeLeft}
                  >
                    Pass
                  </Button>
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleSwipeRight}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aevents;
