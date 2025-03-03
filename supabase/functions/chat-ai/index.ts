
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
    const { messages } = await req.json();

    if (!OPENAI_API_KEY) {
      console.error("Error: OPENAI_API_KEY no está configurado en las variables de entorno");
      throw new Error('OPENAI_API_KEY no está configurado en las variables de entorno');
    }

    console.log("Enviando mensajes a OpenAI:", messages);

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
            content: 'Eres NicoAI, un asistente amigable que ayuda a los usuarios a crear planes sociales. Responde siempre en español. Sé amable, útil y conversacional. Tu objetivo es ayudar a organizar eventos y actividades sociales.' 
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
