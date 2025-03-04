
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowRight, Calendar, MapPin, MessageSquare, Star, User, Zap, Target, Compass, Users, Shield, Sparkles, Rocket, Send, ChevronRight, Heart, HeartCrack, UserX, Smartphone, EyeOff, Frown, Smile, Handshake, ArrowLeftRight, Infinity, Coffee, MessageCircle, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Landing = () => {
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", text: "¡Hola! Soy NicoAI 👋 Me encantaría ayudarte a encontrar planes en tu ciudad. ¿Qué te apetece hacer hoy?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [showChat, setShowChat] = useState(false);
  
  const simulateChat = (input: string) => {
    setChatMessages(prev => [...prev, { sender: "user", text: input }]);
    setUserInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      let botResponse = "";
      
      if (currentStage === 0) {
        botResponse = "¡Genial! Para poder recomendarte planes personalizados, me gustaría conocerte un poco mejor. ¿Puedes decirme cuántos años tienes?";
        setCurrentStage(1);
      } else if (currentStage === 1) {
        botResponse = "¡Perfecto! Y dime, ¿qué te gusta hacer en tu tiempo libre? (cine, deporte, música, arte...)";
        setCurrentStage(2);
      } else if (currentStage === 2) {
        botResponse = "¡Excelente! Basado en tus intereses, he encontrado este plan que podría gustarte: \"Encuentro cultural en el Parque María Luisa\" - Hay 5 personas interesadas. ¿Te gustaría unirte?";
        setCurrentStage(3);
      } else {
        botResponse = "¡Fantástico! Acabo de añadirte al plan. Te he enviado los detalles a tu perfil y podrás chatear con los demás participantes. ¡Que te diviertas!";
        setCurrentStage(0);
      }
      
      setChatMessages(prev => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      simulateChat(userInput);
    }
  };

  useEffect(() => {
    const chatContainer = document.getElementById("phone-chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages]);
  
  const [typewriterText, setTypewriterText] = useState("quiero tomarme un café mañana por la tarde con alguien que hable inglés por algún bar del centro de Sevilla para mejorar mi inglés");

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-foreground">
      <section className="relative min-h-screen flex items-center justify-between px-16 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary-100 opacity-60 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary-100 opacity-50 blur-3xl"></div>
        </div>
        
        <div className="w-1/2 relative">
          <div className="max-w-xl space-y-6">
            <div className="relative andalusian-title-bg inline-block mb-4">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-primary-700 to-primary-800 bg-clip-text text-transparent relative z-10">
                Aburrio
              </h1>
              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full absolute -top-2 -right-8 transform rotate-12">
                Producto 100% andaluz
              </span>
            </div>
            <h2 className="text-3xl font-medium text-gray-700">
              Conecta con personas y planes de tu ciudad
            </h2>
            <p className="text-xl text-gray-600">
              Descubre las mejores experiencias en tu ciudad y conoce nuevas personas cerca de ti mediante nuestro algoritmo de recomendación con la precisión de Google, y la cercanía de Nico <span className="inline">:)</span>
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="text-lg px-8">
                Únete a la lista de espera <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 flex justify-center relative">
          <div className="relative w-[300px] h-[600px] bg-gradient-to-br from-primary-100 to-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white">
            <div className="absolute top-0 left-0 right-0 h-6 bg-black rounded-t-[32px] flex justify-center items-center">
              <div className="w-32 h-4 bg-black rounded-b-xl"></div>
            </div>
            
            {!showChat ? (
              <div className="absolute inset-0 pt-6 flex flex-col">
                <div className="bg-primary-600 text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <div className="text-primary-600 font-bold text-lg">A</div>
                      </div>
                      <h3 className="font-semibold">Aburrio</h3>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-b from-primary-50 to-white">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                    alt="Beautiful scenery" 
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-2xl font-bold text-primary-700 mb-2 text-center">
                    ¡Descubre planes cerca de ti!
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    Chatea con NicoAI y encuentra actividades perfectas para ti
                  </p>
                  <Button 
                    onClick={() => setShowChat(true)} 
                    className="w-full py-6 text-lg"
                  >
                    Probar ahora <ChevronRight className="ml-2" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 pt-6 bg-gradient-to-b from-primary-50 to-white">
                <div className="bg-primary-600 text-white p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        <div className="text-primary-600 font-bold text-lg">A</div>
                      </div>
                      <h3 className="font-semibold">Aburrio</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm">En línea</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs opacity-80">NicoAI - Tu asistente personal</div>
                </div>
                
                <div id="phone-chat-container" className="h-[420px] overflow-y-auto p-4 space-y-3">
                  {chatMessages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.sender === "bot" 
                          ? "bg-primary-100 text-gray-800" 
                          : "bg-primary-500 text-white ml-auto"
                      }`}
                    >
                      {msg.text}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="max-w-[80%] p-3 rounded-2xl bg-primary-100 text-gray-800">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  )}
                </div>
                
                <form onSubmit={handleSubmit} className="absolute bottom-0 left-0 right-0 p-3 border-t bg-white flex gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Escribe tu mensaje..."
                    className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button 
                    type="submit" 
                    className="w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                    disabled={isTyping || !userInput.trim()}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black"></div>
              </div>
            )}
          </div>
          
          <div className="absolute top-20 right-0 glass-card p-2 animate-float-slow shadow-xl max-w-[120px]">
            <p className="text-primary-700 font-semibold text-xs">¡5 personas cerca de ti!</p>
            <p className="text-xs text-gray-600">Buscando planes ahora mismo</p>
          </div>
          
          <div className="absolute bottom-20 left-0 glass-card p-2 animate-float-slow-reverse shadow-xl max-w-[120px]">
            <p className="text-primary-700 font-semibold text-xs">¡Nuevo plan!</p>
            <p className="text-xs text-gray-600">Concierto en Plaza España</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué Aburrio?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Porque las opciones actuales para conocer gente nueva y planes en tu ciudad son realmente nefastas
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12 mb-16">
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HeartCrack className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Apps de Citas</h3>
              <p className="text-gray-600">Prometen conexiones pero son un odioso e interminable loop de swipes con criterios superficiales.</p>
              
              <div className="mt-6 w-full h-20 bg-red-50 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="dating-app-swipe w-full h-full">
                    <div className="profile-card profile-card-1" style={{ top: '10px', left: 'calc(50% - 35px)' }}></div>
                    <div className="profile-card profile-card-2" style={{ top: '10px', left: 'calc(50% - 35px)' }}></div>
                    <div className="profile-card profile-card-3" style={{ top: '10px', left: 'calc(50% - 35px)' }}></div>
                    <div className="absolute top-1/2 left-0 w-full flex justify-between px-4 transform -translate-y-1/2 pointer-events-none">
                      <HeartCrack className="w-6 h-6 text-red-400" />
                      <Heart className="w-6 h-6 text-red-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500"></div>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <EyeOff className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Redes Sociales</h3>
              <p className="text-gray-600">Nos enganchan a la pantalla en vez de ayudarnos a conocer gente, haciéndonos sentir solos y miserables.</p>
              
              <div className="mt-6 w-full h-20 bg-purple-50 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-purple-400" />
                  <div className="absolute inset-0 border-2 border-dashed border-purple-200 rounded-lg"></div>
                  <Frown className="w-8 h-8 text-purple-400 absolute top-2 right-4" />
                </div>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aburrio</h3>
              <p className="text-gray-600">Un algoritmo increíble que te sugiere perfiles con los que conectas de verdad. Se acabaron las tardes aburridas.</p>
              
              <div className="mt-6 w-full h-20 bg-primary-50 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-around px-4">
                  <div className="flex flex-col items-center">
                    <Smile className="w-8 h-8 text-primary-400" />
                    <span className="text-xs text-primary-600 mt-1">Tú</span>
                  </div>
                  <Handshake className="w-8 h-8 text-primary-500" />
                  <div className="flex flex-col items-center">
                    <Smile className="w-8 h-8 text-primary-400" />
                    <span className="text-xs text-primary-600 mt-1">Nuevos amigos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 border-l-4 border-primary-500 max-w-4xl mx-auto hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center flex-shrink-0">
                <Users className="w-16 h-16 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-700 mb-4">La diferencia de Aburrio</h3>
                <p className="text-gray-600 mb-4">
                  Detrás de nuestro increíble algoritmo no está ninguna maliciosa compañía BigTech, sino <span className="font-semibold text-primary-600">Nico y Quino</span> (los fundadores de Aburrio) que quieren lo mismo que tú: conocer gente nueva y vivir experiencias geniales en su ciudad.
                </p>
                <div className="flex gap-3 mt-4">
                  <div className="bg-primary-100 px-3 py-1 rounded-full text-primary-700 text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Conexiones reales
                  </div>
                  <div className="bg-primary-100 px-3 py-1 rounded-full text-primary-700 text-sm font-medium flex items-center gap-1">
                    <Heart className="w-4 h-4" /> Sin swipes
                  </div>
                  <div className="bg-primary-100 px-3 py-1 rounded-full text-primary-700 text-sm font-medium flex items-center gap-1">
                    <Target className="w-4 h-4" /> Experiencias locales
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Es tan sencillo como seguir estos pasos
            </p>
          </div>

          <div className="grid grid-cols-3 gap-12">
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Cuéntale a NicoAI</h3>
              <p className="text-gray-600 mb-4">Dile qué planes te gustaría hacer en tu ciudad y con qué tipo de gente. ¡Exprésate con todos los detalles!</p>
              
              <div className="w-full p-3 bg-primary-50 rounded-lg h-24 flex items-center justify-center overflow-hidden">
                <p className="text-sm text-primary-700 typewriter max-w-full">
                  {typewriterText}
                </p>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. NicoAI encuentra</h3>
              <p className="text-gray-600 mb-4">NicoAI busca los planes y personas que coinciden con tus intereses. No más swipes ni scroll infinito.</p>
              
              <div className="w-full p-3 bg-primary-50 rounded-lg h-24 flex items-center justify-center">
                <div className="relative">
                  <Sparkles className="w-12 h-12 text-primary-400 absolute -top-1 -left-2 opacity-70" />
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-primary-200 shadow-md">
                    <User className="w-8 h-8 text-primary-500" />
                  </div>
                  <Sparkles className="w-12 h-12 text-primary-400 absolute -bottom-1 -right-2 opacity-70" />
                </div>
              </div>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500"></div>
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Footprints className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. ¡A la calle!</h3>
              <p className="text-gray-600 mb-4">Queda con la gente nueva y disfruta de experiencias increíbles en tu ciudad. ¡Eso es lo importante!</p>
              
              <div className="w-full p-3 bg-primary-50 rounded-lg h-24 flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="w-6 h-px bg-primary-300"></div>
                  <Coffee className="w-8 h-8 text-primary-500" />
                  <div className="w-6 h-px bg-primary-300"></div>
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-16 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-100 opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="relative andalusian-title-bg inline-block mb-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-800 bg-clip-text text-transparent relative z-10">
                Redefiniendo las conexiones sociales
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creando una forma completamente nueva de descubrir y vivir tu ciudad
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 space-y-8">
              <div className="glass-card p-8 border-l-4 border-l-primary-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-700">Precisión incomparable</h3>
                </div>
                <p className="text-gray-600">
                  Nuestro algoritmo de recomendación es hasta 3 veces más preciso que otras plataformas sociales, ofreciéndote planes que realmente se adaptan a tus intereses y personalidad.
                </p>
              </div>
              
              <div className="glass-card p-8 border-l-4 border-l-primary-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Compass className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-700">Descubrimiento local</h3>
                </div>
                <p className="text-gray-600">
                  El 78% de nuestros usuarios descubren lugares de su propia ciudad que nunca habían visitado, ampliando sus horizontes sin salir de su entorno.
                </p>
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="glass-card h-full p-10 flex flex-col justify-center items-center text-center border-2 border-primary-200 shadow-glow">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-primary-800">El poder de la conexión</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Transformamos la forma en que las personas se conectan con su ciudad y entre sí, creando experiencias únicas que mejoran significativamente la calidad de vida.
                </p>
                <div className="bg-primary-100 px-4 py-2 rounded-full text-primary-700 font-medium">
                  100% basado en intereses reales
                </div>
              </div>
            </div>
            
            <div className="col-span-4 space-y-8">
              <div className="glass-card p-8 border-l-4 border-l-primary-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-700">Comunidades orgánicas</h3>
                </div>
                <p className="text-gray-600">
                  A diferencia de otras apps, Aburrio crea conexiones basadas en intereses genuinos, formando comunidades reales que perduran más allá de la plataforma.
                </p>
              </div>
              
              <div className="glass-card p-8 border-l-4 border-l-primary-500">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-primary-700" />
                  </div>
                  <h3 className="text-2xl font-semibold text-primary-700">Impacto económico</h3>
                </div>
                <p className="text-gray-600">
                  Impulsamos la economía local al conectar a personas con negocios y eventos de su ciudad, generando un ciclo virtuoso de crecimiento comunitario.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link to="/signup">Descubre el potencial</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative andalusian-title-bg inline-block mb-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-primary-800 bg-clip-text text-transparent relative z-10">
                  Funcionalidades
                </h2>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Diseñada para ofrecerte la mejor experiencia
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Calendario inteligente</h3>
                    <p className="text-gray-600">Organiza tus planes y recibe recordatorios de tus próximos eventos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Chat en grupo</h3>
                    <p className="text-gray-600">Comunícate fácilmente con otros participantes del plan.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Mapas detallados</h3>
                    <p className="text-gray-600">Encuentra fácilmente la ubicación exacta de cada plan o evento.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-80 h-[600px] bg-gradient-to-br from-primary-100 to-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
                  alt="Beautiful landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
