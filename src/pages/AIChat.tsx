
import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

type Message = {
  id: number;
  sender: "ai" | "user";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    content: "¡Hola! ¿Qué tipo de plan te gustaría hacer hoy?",
  },
  {
    id: 2,
    sender: "user",
    content: "Me gustaría organizar un intercambio de idiomas en un café del centro de la ciudad",
  },
  {
    id: 3,
    sender: "ai",
    content: "¡Es una gran idea! ¿A qué hora te gustaría programar el intercambio de idiomas?",
  },
  {
    id: 4,
    sender: "user",
    content: "Hoy por la tarde sería perfecto",
  },
  {
    id: 5,
    sender: "ai",
    content: "¡Genial! Puedo ayudarte a organizar un intercambio de idiomas. ¿Te gustaría que busque personas interesadas en idiomas específicos o con objetivos particulares de aprendizaje?",
  },
  {
    id: 6,
    sender: "user",
    content: "¡Sí! Me gustaría practicar inglés y puedo ayudar a otros con español. ¿Podríamos encontrar personas interesadas en este intercambio de idiomas?",
  },
  {
    id: 7,
    sender: "ai",
    content: "¡Perfecto! Estoy creando tu plan ahora... ¡Listo! Lo he configurado con: Ubicación: café del centro, Idiomas: intercambio inglés/español, Hora: Hoy por la tarde. Puedes encontrarlo en 'Mis Planes'. ¡Te notificaré cuando otros entusiastas de los idiomas se unan!",
  },
];

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "user",
        content: newMessage.trim(),
      }]);
      setNewMessage("");
      setIsLoading(true);
      
      // Simulate AI thinking and response time
      setTimeout(() => {
        fetchAIResponse(newMessage.trim());
      }, 1000);
    }
  };

  const fetchAIResponse = async (userMessage: string) => {
    try {
      // In a real implementation, this would call an API for AI responses
      // Here we're simulating a more dynamic AI response

      let aiResponse = "Te ayudaré a crear un plan según lo que me has pedido. ¿Qué otros detalles te gustaría añadir?";
      
      if (userMessage.toLowerCase().includes("hola") || userMessage.toLowerCase().includes("hey")) {
        aiResponse = "¡Hola! ¿En qué puedo ayudarte hoy?";
      } else if (userMessage.toLowerCase().includes("tiempo") || userMessage.toLowerCase().includes("clima")) {
        aiResponse = "Lo siento, no puedo acceder a información del clima en tiempo real. ¿Te gustaría crear un plan que tenga en cuenta el clima?";
      } else if (userMessage.toLowerCase().includes("cine") || userMessage.toLowerCase().includes("película")) {
        aiResponse = "¡Un plan de cine suena genial! ¿Te gustaría que sea hoy o prefieres otro día? Puedo ayudarte a encontrar personas interesadas.";
      } else if (userMessage.toLowerCase().includes("restaurante") || userMessage.toLowerCase().includes("comer")) {
        aiResponse = "¡Perfecto! Podría ayudarte a organizar una salida a un restaurante. ¿Tienes alguna preferencia de cocina o ubicación?";
      }
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "ai",
        content: aiResponse,
      }]);
      
      setIsLoading(false);
    } catch (error) {
      console.error("Error al obtener respuesta de IA:", error);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "ai",
        content: "Lo siento, ha ocurrido un error al procesar tu mensaje. ¿Podrías intentarlo de nuevo?",
      }]);
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 pt-[4rem] pb-[5rem]">
      <div className="absolute top-[4rem] bottom-[4rem] left-0 right-0 overflow-y-auto px-4">
        <div className="space-y-4 py-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`p-4 ${
                message.sender === "user"
                  ? "ml-auto bg-green-500 text-white max-w-[85%]"
                  : "mr-auto bg-white max-w-[85%]"
              }`}
            >
              <div className="break-words">{message.content}</div>
            </Card>
          ))}
          {isLoading && (
            <Card className="p-4 mr-auto bg-white max-w-[85%]">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </Card>
          )}
        </div>
      </div>
      
      <div className="fixed bottom-[5rem] left-0 right-0 p-4 border-t bg-white">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Dime qué plan quieres hacer..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
