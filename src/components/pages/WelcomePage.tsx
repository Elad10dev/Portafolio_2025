import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.scss';

// Datos de ejemplo
const portfolioData = {
  name: "Eladio Castañeda",
  fullTitle: "Senior FullStack Architect",
  tagline: "El poder no reside en lo que creas, sino en cómo lo proteges.",
};

export function WelcomePage() {
  const navigate = useNavigate();
  
  // Estado para el Modo Oscuro/Claro
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Función para alternar tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // Aplicamos condicionalmente la clase lightMode junto con welcomePage
    <div className={`${styles.welcomePage} ${!isDarkMode ? styles.lightMode : ''}`}>
      
      {/* Botón de Toggle Día/Noche */}
      <button 
        className={styles.themeToggle} 
        onClick={toggleTheme}
        aria-label="Cambiar tema"
      >
        {isDarkMode ? (
          // Icono Sol (para cambiar a claro)
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          // Icono Luna (para cambiar a oscuro)
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </button>

      <div className={styles.scanlineOverlay} />
      
      <main className={styles.contentCard}>
        
        <div className={styles.roleBadge}>
           System Access: Granted
        </div>

        <h1 className={styles.name} data-text={portfolioData.name}>
          {portfolioData.name}
        </h1>

        <div className={styles.tagline}>
          <p>
            Desarrollador Web FullStack con arquitectura en 
            <strong> AWS Microservicios</strong>.
          </p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.9em', opacity: 0.8 }}>
            "{portfolioData.tagline}"
          </p>
        </div>

        <div className={styles.buttonGroup}>
          
          {/* Botón Web */}
          <button
            className={`${styles.futuristicButton} ${styles.btnWeb}`}
            onClick={() => navigate('/portfolio')}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c0-3.037-2.463-5.5-5.5-5.5S6.5 15.963 6.5 19"/><path d="M17.5 19c3.037 0 5.5-2.463 5.5-5.5a5.48 5.48 0 0 0-1.61-3.906A5.5 5.5 0 0 0 16 1.5c-2.476 0-4.576 1.636-5.26 3.935C10.038 5.176 9.277 5 8.5 5 4.916 5 2 7.916 2 11.5c0 3.037 2.463 5.5 5.5 5.5"/></svg>
              Dev Web + AWS
            </span>
          </button>

          {/* Botón Seguridad */}
          <button
            className={`${styles.futuristicButton} ${styles.btnSec}`}
            onClick={() => navigate('/ciberseguridad')}
          >
             <span style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Ciberseguridad
            </span>
          </button>

        </div>
      </main>
    </div>
  );
}