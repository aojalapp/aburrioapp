
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Heart } from "lucide-react";

const Pevents = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Proposed Events</h1>
        <p className="text-gray-600">Support events you'd like to see happen</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
            alt="Event"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Community Meetup</h2>
          
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Proposed for April</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Local Park</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span className="text-sm">Min. 50 people</span>
            </div>
          </div>

          <p className="text-gray-600">
            A community gathering to discuss local initiatives and meet your neighbors.
            Help make this event happen by showing your support!
          </p>

          <Button className="w-full gap-2">
            <Heart className="w-4 h-4" />
            Support this event
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Pevents;
