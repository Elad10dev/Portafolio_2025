import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/dist/style.css'; 
import './chatBot.module.scss'; 

export const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://n8n.posuphost.net/webhook/5a035f91-409f-4c13-baa0-25e4eaabbb4f/chat',
      mode: 'window',
      showWelcomeScreen: true,
      defaultLanguage: 'en',
      
      // --- IDENTIDAD NEXUS ---
      initialMessages: [
        '🟢 System Online. Soy Nexus.',
        'Asistente virtual de Eladio. ¿Eres Recruiter, Cliente o Colega?',
        'Dime qué necesitas y conectaré los puntos. 🚀'
      ],
      i18n: {
        en: {
          title: 'Nexus AI ⚡',
          subtitle: 'Enlace Técnico & Consultas',
          footer: 'Secure Connection • Eladio.Dev',
          getStarted: 'Iniciar Sesión',
          inputPlaceholder: 'Escribe tu comando o consulta...',
          closeButtonTooltip: 'Minimizar Terminal',
        },
      },
    });
  }, []);

  return null;
};