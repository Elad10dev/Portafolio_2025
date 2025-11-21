import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/dist/style.css'; 
import './chatBot.module.scss'; // Asegúrate de que este nombre coincida con tu archivo

export const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://eladio.app.n8n.cloud/webhook/c13ae646-74f6-4d49-a179-dd2034581e10/chat',
      mode: 'window',
      showWelcomeScreen: true,
      defaultLanguage: 'en',
      
      initialMessages: [
        '👋 ¡Hola! Soy Eladio IA.',
        '¿Buscas Desarrollo de Software, Webs o Automatización?',
        'Cuéntame tu proyecto y te ayudo al instante. 🐍'
      ],
      i18n: {
        en: {
          title: 'Eladio IA 🐍',
          subtitle: 'Consultoría & Sistemas',
          footer: 'Potenciado por Eladio Tech',
          getStarted: 'Comenzar Chat',
          inputPlaceholder: 'Escribe tu consulta aquí...',
          closeButtonTooltip: 'Cerrar asistente',
        },
      },
      // Eliminamos el bloque 'style' para corregir el error de TypeScript.
      // El archivo SCSS se encargará de todo el diseño.
    });
  }, []);

  return null;
};