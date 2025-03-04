
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
    // Validate the request has a body
    if (!req.body) {
      throw new Error('La solicitud no contiene datos');
    }

    // Parse the request body
    let messages, userData;
    try {
      const body = await req.json();
      messages = body.messages;
      userData = body.userData;
      
      if (!messages || !Array.isArray(messages)) {
        throw new Error('El formato de mensajes no es válido');
      }
    } catch (parseError) {
      console.error("Error al parsear la solicitud:", parseError);
      throw new Error('Error al parsear la solicitud: ' + parseError.message);
    }

    // Validate API key
    if (!OPENAI_API_KEY) {
      console.error("Error: OPENAI_API_KEY no está configurado en las variables de entorno");
      throw new Error('OPENAI_API_KEY no está configurado en las variables de entorno');
    }

    console.log("Enviando mensajes a OpenAI:", JSON.stringify(messages));
    if (userData) {
      console.log("Datos de usuario recopilados:", JSON.stringify(userData));
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

    // Make the OpenAI API request
    let openAIResponse;
    try {
      openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
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
    } catch (fetchError) {
      console.error("Error al comunicarse con OpenAI:", fetchError);
      throw new Error(`Error al comunicarse con OpenAI: ${fetchError.message}`);
    }

    // Handle OpenAI API error responses
    if (!openAIResponse.ok) {
      const errorBody = await openAIResponse.text();
      console.error("Error de OpenAI (Status:", openAIResponse.status, "):", errorBody);
      throw new Error(`Error de OpenAI (Status: ${openAIResponse.status}): ${errorBody}`);
    }

    // Parse OpenAI API response
    let data;
    try {
      data = await openAIResponse.json();
    } catch (jsonError) {
      console.error("Error al parsear la respuesta de OpenAI:", jsonError);
      throw new Error(`Error al parsear la respuesta de OpenAI: ${jsonError.message}`);
    }

    // Validate OpenAI API response
    if (!data || !data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error("Formato de respuesta de OpenAI inesperado:", data);
      throw new Error('Formato de respuesta de OpenAI inesperado');
    }

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
