
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

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "ai",
    content: "¡Hola! ¿Qué tipo de plan te gustaría hacer hoy?",
  },
];

const AIChat = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

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
      
      // Enviamos el mensaje al backend
      fetchAIResponse(userMessage);
    }
  };

  const fetchAIResponse = async (userMessage: Message) => {
    try {
      // Formateamos los mensajes para OpenAI
      const formattedMessages = messages.concat(userMessage).map(msg => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.content
      }));

      // Llamamos a nuestra Edge Function
      const { data, error } = await supabase.functions.invoke("chat-ai", {
        body: { messages: formattedMessages },
      });

      if (error) {
        console.error("Error al obtener respuesta:", error);
        toast({
          title: "Error",
          description: "No se pudo obtener una respuesta. Por favor, intenta de nuevo.",
          variant: "destructive",
        });
        
        setMessages(prevMessages => [...prevMessages, {
          id: prevMessages.length + 1,
          sender: "ai",
          content: "Lo siento, ha ocurrido un error al procesar tu mensaje. ¿Podrías intentarlo de nuevo?",
        }]);
      } else {
        // Añadimos la respuesta de la IA
        setMessages(prevMessages => [...prevMessages, {
          id: prevMessages.length + 1,
          sender: "ai",
          content: data.content,
        }]);
      }
    } catch (error) {
      console.error("Error al obtener respuesta de IA:", error);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        sender: "ai",
        content: "Lo siento, ha ocurrido un error al procesar tu mensaje. ¿Podrías intentarlo de nuevo?",
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
