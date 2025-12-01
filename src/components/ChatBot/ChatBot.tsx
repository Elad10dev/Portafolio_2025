import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/dist/style.css'; 
import './chatBot.module.scss'; // Asegúrate de que este nombre coincida con tu archivo

export const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.posuphost.net/webhook/a4d67386-855b-4002-a603-dc1bb7a2d4db/chat',
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