
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Heart, Filter, Star, Clock, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

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
  featured?: boolean;
  category?: string;
  time?: string;
  tags?: string[];
};

const mockPlans: Plan[] = [
  {
    id: 1,
    title: "Cervezas y práctica de inglés",
    description: "Buscando gente para practicar inglés mientras tomamos unas cervezas en el centro. Rango de edad: 20-30, hablantes de inglés bienvenidos.",
    isAdmin: false,
    likes: 12,
    category: "social",
    time: "18:00",
    date: "Hoy",
    location: "The Irish Pub, Centro",
    tags: ["English", "Social", "Drinks"]
  },
  {
    id: 2,
    title: "Conferencia de Tecnología 2024",
    description: "Únete a nosotros para una emocionante conferencia con lo último en tecnología e innovación.",
    isAdmin: true,
    date: "15 de marzo, 2024",
    location: "Centro de Convenciones",
    capacity: "250 plazas",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
    featured: true,
    category: "tech",
    time: "09:00",
    tags: ["Tech", "Conference", "Networking"]
  },
  {
    id: 3,
    title: "Senderismo de fin de semana",
    description: "Planeando una excursión de senderismo este fin de semana. ¡Buscamos entusiastas de la naturaleza!",
    isAdmin: false,
    likes: 8,
    category: "outdoor",
    date: "Sábado, 18 de marzo",
    location: "Sierra Norte",
    time: "08:00",
    tags: ["Outdoor", "Hiking", "Nature"]
  },
  {
    id: 4,
    title: "Cumbre de IA",
    description: "Explora el futuro de la inteligencia artificial con expertos líderes.",
    isAdmin: true,
    date: "20 de abril, 2024",
    location: "Tech Hub",
    capacity: "300 plazas",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "tech",
    time: "10:00",
    tags: ["AI", "Tech", "Innovation"]
  }
];

const Plans = () => {
  const [likedPlans, setLikedPlans] = useState<Set<number>>(new Set());
  const [activeFilter, setActiveFilter] = useState<string>("all");

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

  const filteredPlans = activeFilter === "all" 
    ? mockPlans 
    : mockPlans.filter(plan => plan.category === activeFilter);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Planes Disponibles</h1>
            <p className="text-primary-600">¡Encuentra tu próxima aventura!</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full border-primary-200 text-primary-600 hover:bg-primary-50">
              <Search className="w-4 h-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-primary-200 text-primary-600 hover:bg-primary-50">
                  <Filter className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-card border-primary-200">
                <DropdownMenuLabel className="text-primary-800">Ordenar por</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-primary-50 text-gray-700 cursor-pointer">Fecha (Más recientes primero)</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary-50 text-gray-700 cursor-pointer">Recientemente publicados</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuLabel className="text-primary-800">Filtros Premium</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem className="hover:bg-primary-50 text-gray-700 cursor-pointer">Rango de edad</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary-50 text-gray-700 cursor-pointer">Nacionalidad</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-primary-50 text-gray-700 cursor-pointer">Género</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="icon" className="rounded-full border-primary-200 text-primary-600 hover:bg-primary-50" asChild>
              <Link to="/map">
                <MapPin className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          <Button 
            variant="ghost" 
            className={`rounded-full text-sm whitespace-nowrap px-4 ${
              activeFilter === 'all' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-600 hover:bg-primary-50'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All Plans
          </Button>
          <Button 
            variant="ghost" 
            className={`rounded-full text-sm whitespace-nowrap px-4 ${
              activeFilter === 'social' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-600 hover:bg-primary-50'
            }`}
            onClick={() => setActiveFilter('social')}
          >
            Social
          </Button>
          <Button 
            variant="ghost" 
            className={`rounded-full text-sm whitespace-nowrap px-4 ${
              activeFilter === 'tech' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-600 hover:bg-primary-50'
            }`}
            onClick={() => setActiveFilter('tech')}
          >
            Tech Events
          </Button>
          <Button 
            variant="ghost" 
            className={`rounded-full text-sm whitespace-nowrap px-4 ${
              activeFilter === 'outdoor' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-600 hover:bg-primary-50'
            }`}
            onClick={() => setActiveFilter('outdoor')}
          >
            Outdoor
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredPlans.map((plan) => (
          <Card 
            key={plan.id}
            className={`overflow-hidden rounded-2xl shadow-md ${
              plan.isAdmin 
                ? "shadow-primary-100/50"
                : "glass-card"
            }`}
          >
            {plan.isAdmin && plan.image && (
              <div className="relative aspect-video">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {plan.featured && (
                  <div className="absolute top-3 left-3 bg-primary-500 text-white text-xs py-1 px-2 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}
              </div>
            )}

            <div className="p-5 space-y-4">
              {plan.tags && (
                <div className="flex flex-wrap gap-1 mb-1">
                  {plan.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <h2 className="text-xl font-semibold text-primary-800">{plan.title}</h2>
              
              <div className="grid grid-cols-2 gap-y-2">
                <div className="flex items-center gap-1.5 text-sm text-primary-600">
                  <Calendar className="w-4 h-4" />
                  <span>{plan.date}</span>
                </div>
                {plan.time && (
                  <div className="flex items-center gap-1.5 text-sm text-primary-600">
                    <Clock className="w-4 h-4" />
                    <span>{plan.time}</span>
                  </div>
                )}
                {plan.location && (
                  <div className="col-span-2 flex items-center gap-1.5 text-sm text-primary-600">
                    <MapPin className="w-4 h-4" />
                    <span>{plan.location}</span>
                  </div>
                )}
                {plan.capacity && (
                  <div className="flex items-center gap-1.5 text-sm text-primary-600">
                    <Users className="w-4 h-4" />
                    <span>{plan.capacity}</span>
                  </div>
                )}
              </div>

              <p className="text-gray-700 text-sm mt-1">{plan.description}</p>

              <div className="flex gap-4 pt-2">
                {!plan.isAdmin && (
                  <Button 
                    variant="outline" 
                    onClick={() => handleLike(plan.id)}
                    className="flex-1 gap-2 border-primary-200 hover:bg-primary-50"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        likedPlans.has(plan.id) 
                          ? "fill-red-500 text-red-500" 
                          : "text-primary-400"
                      }`} 
                    />
                    <span className="text-gray-700">{plan.likes} me gusta</span>
                  </Button>
                )}
                <Button className="flex-1 gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 rounded-xl">
                  {plan.isAdmin ? "Reservar Ahora" : "Unirse al Plan"}
                  <ArrowRight className="w-4 h-4" />
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
