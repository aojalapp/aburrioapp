
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Heart, Option } from "lucide-react";
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
};

const mockPlans: Plan[] = [
  {
    id: 1,
    title: "Cervezas y práctica de inglés",
    description: "Buscando gente para practicar inglés mientras tomamos unas cervezas en el centro. Rango de edad: 20-30, hablantes de inglés bienvenidos.",
    isAdmin: false,
    likes: 12
  },
  {
    id: 2,
    title: "Conferencia de Tecnología 2024",
    description: "Únete a nosotros para una emocionante conferencia con lo último en tecnología e innovación.",
    isAdmin: true,
    date: "15 de marzo, 2024",
    location: "Centro de Convenciones",
    capacity: "250 plazas",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
  },
  {
    id: 3,
    title: "Senderismo de fin de semana",
    description: "Planeando una excursión de senderismo este fin de semana. ¡Buscamos entusiastas de la naturaleza!",
    isAdmin: false,
    likes: 8
  },
  {
    id: 4,
    title: "Cumbre de IA",
    description: "Explora el futuro de la inteligencia artificial con expertos líderes.",
    isAdmin: true,
    date: "20 de abril, 2024",
    location: "Tech Hub",
    capacity: "300 plazas",
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
      <div className="flex items-center justify-between px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-900">Planes Disponibles</h1>
          <p className="text-green-600">¡Encuentra tu próxima aventura!</p>
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Option className="w-5 h-5 text-green-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border border-gray-200">
              <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem className="hover:bg-green-50">Fecha (Más recientes primero)</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-green-50">Recientemente publicados</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuLabel>Filtros Premium</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem className="hover:bg-green-50">Rango de edad</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-green-50">Nacionalidad</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-green-50">Género</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link to="/map">
              <MapPin className="w-5 h-5 text-green-500" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {mockPlans.map((plan) => (
          <Card 
            key={plan.id}
            className={`overflow-hidden ${
              plan.isAdmin 
                ? "bg-gradient-to-br from-green-50 to-green-100 border-green-200"
                : "bg-white border-green-100"
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
              <h2 className="text-xl font-semibold text-green-900">{plan.title}</h2>
              
              {plan.isAdmin && (
                <div className="flex items-center gap-4 text-green-600">
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

              <p className="text-green-700">{plan.description}</p>

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
                          : "text-green-400"
                      }`} 
                    />
                    <span>{plan.likes} me gusta</span>
                  </Button>
                )}
                <Button className="flex-1 bg-green-500 hover:bg-green-600">
                  {plan.isAdmin ? "Reservar Ahora" : "Unirse al Plan"}
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
