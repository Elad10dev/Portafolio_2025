// src/components/pages/WelcomePage.tsx
import { useState } from 'react'; // Importante para abrir/cerrar
import { useNavigate } from 'react-router-dom';
import { Button } from '../Buttons/Button';
import { ChatWidget } from '../ChatBot/ChatBot'; // Ajusta la ruta si es necesario
import styles from './WelcomePage.module.scss'; 

// Datos de ejemplo
const portfolioData = {
  name: "Eladio Ernesto de Jesus Castañeda Silva",
  title: "Desarrollador Web FullStack con manejo de Microservicios AWS",
  tagline: "El poder no reside en lo que creas, sino en cómo lo construyes. FullStack con AWS Microservicios.",
};

export function WelcomePage() {
  const navigate = useNavigate();
  
  // ESTADO: Controla si la ventana de MSN está visible
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className={styles.welcomePage}>
      {/* Superposición oscura */}
      <div className={styles.overlay} />

      {/* CONTENIDO PRINCIPAL CENTRADO */}
      <div className={styles.content}>
        <h1 className={styles.name}>
          {portfolioData.name}
        </h1>
        <p className={styles.title}>
          {portfolioData.title}
        </p>
        <p className={styles.tagline}>
          "{portfolioData.tagline}"
        </p>

        {/* GRUPO DE BOTONES */}
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => navigate('/portfolio')}
            variant="light"
            className={styles.button}
          >
            Dev Web + AWS
          </Button>
          
          <Button
            onClick={() => navigate('/ciberseguridad')}
            variant="light"
            className={styles.button}
          >
            Ciberseguridad
          </Button>

          {/* === NUEVO BOTÓN ESTILO MSN === */}
          <button 
            onClick={() => setIsChatOpen(true)}
            className={styles.button} // Hereda estilos base si quieres, o usa solo el inline
            style={{ 
              background: 'linear-gradient(to bottom, #b4ddb4 5%, #83c483 100%)', // Verde MSN clásico
              color: '#fff',
              border: '1px solid #3e8e41',
              borderRadius: '25px', // Redondeado igual que tus otros botones
              padding: '10px 25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              fontSize: '1rem',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span>💬</span> Chatear con Eladio IA
          </button>
        </div>
      </div>

      {/* === COMPONENTE DEL CHAT (VENTANA MODAL) === */}
      {/* Solo se renderiza cuando isChatOpen es true */}
      <ChatWidget 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </div>
  );
}