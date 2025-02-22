
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

type Plan = {
  id: number;
  title: string;
  description: string;
  isAdmin?: boolean;
  date?: string;
  location?: string;
  capacity?: string;
  image?: string;
  likes?: number;
};

const mockPlans: Plan[] = [
  {
    id: 1,
    title: "Beers & English Practice",
    description: "Looking for people to practice English while having some beers in the city center. Age range: 20-30, English speakers welcome!",
    isAdmin: false,
    likes: 12
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    description: "Join us for an exciting conference featuring the latest in technology and innovation.",
    isAdmin: true,
    date: "March 15, 2024",
    location: "Convention Center",
    capacity: "250 spots",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: 3,
    title: "Weekend Hiking",
    description: "Planning a hiking trip this weekend. Looking for nature enthusiasts!",
    isAdmin: false,
    likes: 8
  },
  {
    id: 4,
    title: "AI Summit",
    description: "Explore the future of artificial intelligence with leading experts.",
    isAdmin: true,
    date: "April 20, 2024",
    location: "Tech Hub",
    capacity: "300 spots",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

const Plans = () => {
  const [likedPlans, setLikedPlans] = useState<Set<number>>(new Set());

  const handleLike = (planId: number) => {
    setLikedPlans(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(planId)) {
        newLiked.delete(planId);
      } else {
        newLiked.add(planId);
      }
      return newLiked;
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-blue-900">Available Plans</h1>
        <p className="text-blue-600">Find your next adventure!</p>
      </div>

      <div className="space-y-6">
        {mockPlans.map((plan) => (
          <Card 
            key={plan.id}
            className={`overflow-hidden ${
              plan.isAdmin 
                ? "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
                : "bg-white border-blue-100"
            }`}
          >
            {plan.isAdmin && plan.image && (
              <div className="relative aspect-video">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            )}

            <div className="p-6 space-y-4">
              <h2 className="text-xl font-semibold text-blue-900">{plan.title}</h2>
              
              {plan.isAdmin && (
                <div className="flex items-center gap-4 text-blue-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{plan.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{plan.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{plan.capacity}</span>
                  </div>
                </div>
              )}

              <p className="text-blue-700">{plan.description}</p>

              <div className="flex gap-4">
                {!plan.isAdmin && (
                  <Button 
                    variant="ghost" 
                    onClick={() => handleLike(plan.id)}
                    className="flex-1 gap-2"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        likedPlans.has(plan.id) 
                          ? "fill-red-500 text-red-500" 
                          : "text-blue-400"
                      }`} 
                    />
                    <span>{plan.likes} likes</span>
                  </Button>
                )}
                <Button className="flex-1 bg-blue-500 hover:bg-blue-600">
                  {plan.isAdmin ? "Book Now" : "Join Plan"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Plans;
