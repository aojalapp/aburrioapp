
import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

type Message = {
  id: number;
  sender: "ai" | "user";
  content: string;
};

type UserData = {
  edad?: string;
  genero?: string;
  nacionalidad?: string;
  idiomas?: string[];
  hobbies?: string[];
  trabajo?: string;
  planDetalles?: {
    tipo?: string;
    dia?: string;
    hora?: string;
    lugar?: string;
    preferenciaPersona?: string;
  };
  [key: string]: any;
};

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    content: "¡Hola! Me gustaría conocerte un poco mejor para ayudarte a encontrar planes que se ajusten a tus gustos. Para empezar, ¿me podrías decir cuál es tu edad?",
  },
];

const AIChat = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>({});
  const [conversationState, setConversationState] = useState("recopilandoDatos");
  const bottomRef = useRef<HTMLDivElement>(null);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        sender: "user",
        content: newMessage.trim(),
      } as Message;
      
      setMessages([...messages, userMessage]);
      setNewMessage("");
      setIsLoading(true);
      
      // Extraemos información potencialmente útil del mensaje del usuario
      extractUserData(newMessage);
      
      // Enviamos el mensaje al backend
      fetchAIResponse(userMessage);
    }
  };

  const extractUserData = (message: string) => {
    // Esta función es simplificada y se puede mejorar con análisis más avanzado
    // La idea es capturar alguna información básica del usuario a partir de sus mensajes
    const lowerMessage = message.toLowerCase();
    
    // Extraer edad
    const edadMatch = lowerMessage.match(/tengo (\d+)( años)?/);
    if (edadMatch) {
      setUserData(prev => ({ ...prev, edad: edadMatch[1] }));
    }
    
    // Trabajo
    if (lowerMessage.includes("trabajo como") || lowerMessage.includes("trabajo de")) {
      const trabajoMatch = lowerMessage.match(/trabajo (como|de) ([^,.]+)/);
      if (trabajoMatch) {
        setUserData(prev => ({ ...prev, trabajo: trabajoMatch[2].trim() }));
      }
    }
    
    // Si menciona un plan específico
    if (lowerMessage.includes("café") || lowerMessage.includes("cafe")) {
      setUserData(prev => ({
        ...prev,
        planDetalles: {
          ...prev.planDetalles,
          tipo: "café"
        }
      }));
    }
    
    // Guarda información sobre el día
    const diasSemana = ["lunes", "martes", "miércoles", "miercoles", "jueves", "viernes", "sábado", "sabado", "domingo"];
    for (const dia of diasSemana) {
      if (lowerMessage.includes(dia)) {
        setUserData(prev => ({
          ...prev,
          planDetalles: {
            ...prev.planDetalles,
            dia: dia
          }
        }));
        break;
      }
    }
    
    console.log("Datos actualizados del usuario:", userData);
  };

  const fetchAIResponse = async (userMessage: Message) => {
    try {
      // Formateamos los mensajes para OpenAI
      const formattedMessages = messages.concat(userMessage).map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content
      }));

      console.log("Enviando mensajes a Edge Function:", formattedMessages);
      console.log("Enviando datos de usuario:", userData);

      // Llamamos a nuestra Edge Function
      const { data, error } = await supabase.functions.invoke("chat-ai", {
        body: { 
          messages: formattedMessages,
          userData: userData
        },
      });

      if (error) {
        console.error("Error al invocar Edge Function:", error);
        throw new Error(`Error al invocar Edge Function: ${error.message || 'Error desconocido'}`);
      }

      if (!data || !data.content) {
        console.error("Respuesta inválida de Edge Function:", data);
        throw new Error("La respuesta del servidor no tiene el formato esperado");
      }

      setRetryCount(0); // Reset retry count on success
      
      // Añadimos la respuesta de la IA
      setMessages(prevMessages => [...prevMessages, {
        id: prevMessages.length + 1,
        sender: "ai",
        content: data.content,
      }]);
    } catch (error) {
      console.error("Error al obtener respuesta de IA:", error);
      
      // Implementación de reintento automático
      if (retryCount < maxRetries) {
        const nextRetry = retryCount + 1;
        setRetryCount(nextRetry);
        
        toast({
          title: "Reintentando conexión",
          description: `Intento ${nextRetry} de ${maxRetries}...`,
          variant: "default",
        });
        
        // Esperar un momento antes de reintentar
        setTimeout(() => {
          fetchAIResponse(userMessage);
        }, 2000);
        
        return;
      }
      
      // Si se agotan los reintentos, mostrar mensaje de error
      toast({
        title: "Error",
        description: "No se pudo conectar con el asistente. Por favor, intenta de nuevo más tarde.",
        variant: "destructive",
      });
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "ai",
        content: "Lo siento, ha ocurrido un error al procesar tu mensaje. Por favor, intenta de nuevo más tarde.",
      }]);
    } finally {
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
          <div ref={bottomRef} />
        </div>
      </div>
      
      <div className="fixed bottom-[5rem] left-0 right-0 p-4 border-t bg-white">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Responde a las preguntas del asistente..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
            disabled={isLoading}
          />
          <Button onClick={handleSend} size="icon" disabled={isLoading || !newMessage.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
