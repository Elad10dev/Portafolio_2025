import { useEffect, useRef } from 'react';
import { createChat } from '@n8n/chat';
import '@n8n/chat/dist/style.css';
import styles from './ChatBot.module.scss';

interface ChatWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatWidget = ({ isOpen, onClose }: ChatWidgetProps) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // 1. Limpiamos el contenedor por seguridad
      if (chatContainerRef.current) {
        chatContainerRef.current.innerHTML = '';
      }

      // 2. Iniciamos el chat apuntando al ID FIJO
      createChat({
        webhookUrl: 'https://n8n.posuphost.net/webhook/c74a79b5-9d32-4ccb-b8fd-b3a53369f72a/chat',
        target: '#n8n-chat-frame',
        mode: 'fullscreen',
        showWelcomeScreen: true,
        defaultLanguage: 'en',
        initialMessages: [
          '👋 ¡Hola! Soy Eladio IA.',
          '¿Buscas Desarrollo de Software o Automatización?',
          'Tengo un zumbido preparado si no me contestas... 😉'
        ],
        i18n: {
          en: {
            title: 'Conversación con Eladio IA',
            subtitle: 'Estado: Conectado 🟢',
            footer: 'MSN Messenger Edition',
            getStarted: 'Enviar Zumbido',
            inputPlaceholder: 'Escribe un mensaje...',
            closeButtonTooltip: 'Cerrar chat',
          },
        },
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      {/* 🔥 AQUÍ ESTÁ EL TRUCO: 
          Inyectamos CSS crudo para forzar a las imágenes a ser miniaturas (100px).
          Esto sobrescribe cualquier estilo que venga de la IA.
      */}
      <style>{`
        #n8n-chat-frame img {
          width: 100px !important;   /* Ancho fijo igual al avatar */
          height: 100px !important;  /* Alto fijo */
          object-fit: cover !important; /* Recorta la imagen para que sea cuadrada perfecta */
          border-radius: 4px !important;
          border: 1px solid #ccc !important;
          margin: 5px 0 !important;
          display: block !important;
          cursor: zoom-in; /* Cursor de lupa por si quisieras programar un zoom luego */
        }
        
        /* Opcional: Si quieres que al pasar el mouse crezca un poco (Efecto MSN) */
        #n8n-chat-frame img:hover {
            transform: scale(2.5); /* Crece al pasar el mouse */
            z-index: 999;
            position: relative;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transition: all 0.2s ease;
        }
      `}</style>

      <div className={styles.msnWindow}>
        {/* BARRA DE TÍTULO */}
        <div className={styles.titleBar}>
          <div className={styles.titleText}>
            <span className={styles.statusIcon}>🟢</span>
            Eladio IA - Conversación
          </div>
          <div className={styles.windowControls}>
            <button className={styles.minimizeBtn}>_</button>
            <button className={styles.maximizeBtn}>□</button>
            <button className={styles.closeBtn} onClick={onClose}>X</button>
          </div>
        </div>

        <div className={styles.menuBar}>
          <span>Archivo</span>
          <span>Editar</span>
          <span>Ver</span>
          <span>Acciones</span>
          <span>Ayuda</span>
        </div>

        <div className={styles.windowBody}>
          {/* ZONA DEL CHAT */}
          <div 
            id="n8n-chat-frame" 
            ref={chatContainerRef}
            className={styles.chatArea} 
          ></div>
          
          {/* BARRA LATERAL */}
          <div className={styles.sidebar}>
            <div className={styles.avatarFrame}>
                <img src="https://github.com/shadcn.png" alt="Avatar" />
            </div>
            <div className={styles.contactInfo}>
              <p>Eladio IA</p>
              <p className={styles.statusMessage}>&lt;Desarrollando futuro...&gt;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};