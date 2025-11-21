import { useEffect } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/dist/style.css'; // Estilos base de la librería
import './chatBot.module.scss';        // TUS estilos personalizados (SCSS)

export const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://eladio.app.n8n.cloud/webhook/c13ae646-74f6-4d49-a179-dd2034581e10/chat',
      mode: 'window',
      showWelcomeScreen: true,
      defaultLanguage: 'en', // Truco para forzar la sobreescritura en español abajo
      
      // Configuración de Textos (Internacionalización)
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
      
      // Nota: Ya no necesitamos el bloque 'style' gigante aquí 
      // porque todo está controlado desde ChatWidget.scss
    });
  }, []);

  return null;
};