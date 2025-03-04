
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, userData } = await req.json();

    if (!OPENAI_API_KEY) {
      console.error("Error: OPENAI_API_KEY no está configurado en las variables de entorno");
      throw new Error('OPENAI_API_KEY no está configurado en las variables de entorno');
    }

    console.log("Enviando mensajes a OpenAI:", messages);
    if (userData) {
      console.log("Datos de usuario recopilados:", userData);
    }

    const systemPrompt = `Eres NicoAI, un asistente amigable que ayuda a los usuarios a crear planes sociales y conectar con otras personas. Responde siempre en español. Sé amable, útil y conversacional.

Tu objetivo es ayudar al usuario a organizar planes sociales siguiendo estos pasos:

1. PRIMER PASO - Recopilación de información básica:
   Al inicio de la conversación, pregunta de manera natural por los datos básicos del usuario (edad, género, nacionalidad, idiomas, hobbies). Haz esto de forma conversacional, una pregunta a la vez.

2. SEGUNDO PASO - Definición del plan:
   Una vez recopilada la información básica, pregunta "¿Qué plan te apetece hacer hoy?". Cuando el usuario responda, pregunta por los detalles específicos (día, hora, lugar, con qué tipo de persona le gustaría realizarlo, etc.).

3. TERCER PASO - Simulación de coincidencia:
   Una vez recopilados todos los detalles, responde con un mensaje simulando que has encontrado un usuario compatible con las preferencias y el plan propuesto. Incluye algunas coincidencias basadas en los datos recopilados.

Es muy importante que sigas el flujo paso a paso, siendo natural y conversacional en todo momento. Mantén un tono casual y amigable.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { 
            role: 'system', 
            content: systemPrompt
          },
          ...messages
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Error de OpenAI:", error);
      throw new Error(`Error de OpenAI: ${JSON.stringify(error)}`);
    }

    const data = await response.json();
    console.log("Respuesta recibida de OpenAI");

    return new Response(JSON.stringify({ 
      content: data.choices[0].message.content 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error en la función chat-ai:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
