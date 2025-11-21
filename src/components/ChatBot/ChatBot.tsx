import { useEffect } from 'react';
import { createChat } from '@n8n/chat'; // Importación limpia
import '@n8n/chat/dist/style.css'; // Importamos los estilos directamente

export const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://eladio.app.n8n.cloud/webhook/c13ae646-74f6-4d49-a179-dd2034581e10/chat',
      mode: 'window', // O 'fullscreen'
      showWelcomeScreen: true,
    });
  }, []);

  return null;
};