
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const Aevents = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Upcoming Events</h1>
        <p className="text-gray-600">Swipe right to book, left to pass</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
            alt="Event"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tech Conference 2024</h2>
          
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">March 15, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">San Francisco</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">250 spots</span>
            </div>
          </div>

          <p className="text-gray-600">
            Join us for an exciting conference featuring the latest in technology
            and innovation. Network with industry leaders and learn about emerging
            trends.
          </p>

          <div className="flex gap-4">
            <Button
              variant="outline"
              className="flex-1 border-red-500 text-red-500 hover:bg-red-50"
            >
              Pass
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              Book Now
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Aevents;
