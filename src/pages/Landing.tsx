
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, MessageSquare, Star, User, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-foreground">
      {/* Hero Section */}
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
            </div>
            <h2 className="text-3xl font-medium text-gray-700">
              Conecta con personas y planes de tu ciudad
            </h2>
            <p className="text-xl text-gray-600">
              Descubre las mejores experiencias cerca de ti con nuestro algoritmo de recomendación increíblemente preciso.
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="text-lg px-8">
                Descargar App <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/signup">Regístrate</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-1/2 flex justify-center">
          <div className="relative w-80 h-[600px] bg-gradient-to-br from-primary-100 to-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
              alt="Aburrio App" 
              className="w-full h-full object-cover rounded-[32px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-0 w-full p-6">
              <div className="glass-card p-4 mb-4">
                <h3 className="text-primary-700 font-semibold">¡Planes cerca de ti!</h3>
                <p className="text-sm text-gray-700">3 personas quieren ir al Parque María Luisa hoy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Por qué Aburrio?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Creado para transformar cómo descubres y disfrutas de tu ciudad
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Planes Localizados</h3>
              <p className="text-gray-600">Encuentra actividades y eventos cerca de ti, con información detallada sobre ubicación y accesibilidad.</p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <User className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conexiones Reales</h3>
              <p className="text-gray-600">Conecta con personas con intereses similares y crea nuevas amistades en tu ciudad.</p>
            </div>

            <div className="glass-card p-8 flex flex-col items-center text-center transition-all hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Algoritmo Preciso</h3>
              <p className="text-gray-600">Nuestro sistema de recomendación aprende de tus preferencias para ofrecerte planes perfectos para ti.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Es tan sencillo como seguir estos pasos
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  1
                </div>
                <div className="absolute top-10 -right-8 w-16 h-1 bg-primary-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Regístrate</h3>
              <p className="text-gray-600">Crea tu perfil y comparte tus intereses</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  2
                </div>
                <div className="absolute top-10 -right-8 w-16 h-1 bg-primary-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Explora</h3>
              <p className="text-gray-600">Descubre planes y personas en tu ciudad</p>
            </div>

            <div className="text-center">
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  3
                </div>
                <div className="absolute top-10 -right-8 w-16 h-1 bg-primary-200 hidden md:block"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Conecta</h3>
              <p className="text-gray-600">Únete a planes o crea los tuyos propios</p>
            </div>

            <div className="text-center">
              <div className="mb-4">
                <div className="w-20 h-20 rounded-full bg-primary-600 text-white text-2xl font-bold flex items-center justify-center mx-auto">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Disfruta</h3>
              <p className="text-gray-600">Vive nuevas experiencias en tu ciudad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-16 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 opacity-60 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Miles de personas ya están disfrutando de Aburrio
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div className="glass-card p-8">
              <div className="flex gap-2 text-yellow-400 mb-4">
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
              </div>
              <p className="text-gray-700 mb-4">
                "Gracias a Aburrio he conocido gente maravillosa en Sevilla. Los planes que me recomienda son exactamente lo que busco."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Laura G.</h4>
                  <p className="text-sm text-gray-500">Sevilla</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex gap-2 text-yellow-400 mb-4">
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
              </div>
              <p className="text-gray-700 mb-4">
                "Increíble lo fácil que es usar esta app. Cada fin de semana descubro nuevos lugares en Málaga que ni sabía que existían."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Carlos M.</h4>
                  <p className="text-sm text-gray-500">Málaga</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex gap-2 text-yellow-400 mb-4">
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
                <Star className="fill-yellow-400" />
              </div>
              <p className="text-gray-700 mb-4">
                "Desde que uso Aburrio, nunca más he tenido que preocuparme por no tener planes. ¡Siempre hay algo interesante que hacer!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold">Elena R.</h4>
                  <p className="text-sm text-gray-500">Granada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features Section */}
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
                  alt="Aburrio App Features" 
                  className="w-full h-full object-cover rounded-[32px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 w-full p-6">
                  <div className="glass-card p-4 mb-4">
                    <h3 className="text-primary-700 font-semibold">Explora tu entorno</h3>
                    <p className="text-sm text-gray-700">Descubre lugares increíbles cerca de ti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para descubrir tu ciudad?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Únete hoy a miles de personas que están viviendo experiencias increíbles con Aburrio
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-700 hover:bg-gray-100 text-lg px-8">
              Descargar App <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8" asChild>
              <Link to="/signup">Crear cuenta</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <div className="relative andalusian-title-bg inline-block mb-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-800 bg-clip-text text-transparent relative z-10">
                  Aburrio
                </h3>
              </div>
              <p className="text-gray-600">
                La app que te conecta con tu ciudad
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary-600">Centro de ayuda</a></li>
                <li><a href="#" className="hover:text-primary-600">Blog</a></li>
                <li><a href="#" className="hover:text-primary-600">Guías</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary-600">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-primary-600">Trabaja con nosotros</a></li>
                <li><a href="#" className="hover:text-primary-600">Contacto</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-primary-600">Términos de servicio</a></li>
                <li><a href="#" className="hover:text-primary-600">Política de privacidad</a></li>
                <li><a href="#" className="hover:text-primary-600">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex justify-between items-center">
            <p className="text-gray-500">© 2023 Aburrio. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
