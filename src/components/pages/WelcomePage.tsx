// src/pages/WelcomePage.tsx
// ¡Esta es tu página de inicio, usando SCSS!
import { Button } from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.scss'; // 1. Importa los estilos SCSS

// Datos de ejemplo
const portfolioData = {
  name: "Eladio Ernesto de Jesus Castañeda Silva",
  title: "Desarrollador Web FullStack con manejo de Microservicios AWS",
  tagline: "El poder no reside en lo que creas, sino en cómo lo construyes. FullStack con AWS Microservicios.",
};

export function WelcomePage() {
  const navigate = useNavigate(); // Hook para cambiar de ruta

  return (
    // 2. Usa las clases SCSS para el layout y centrado
    <div className={styles.welcomePage}>
      {/* Superposición oscura */}
      <div className={styles.overlay} />

      {/* HEADER SUPERIOR DERECHO CON BOTONES CIRCULARES */}
      <header className={styles.header}>
        <button className={styles.iconButton}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        <button className={styles.iconButton}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </button>
      </header>

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

        {/* Botones de acción "Bienvenido" e "Inicio de Sesión" */}
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
        </div>
      </div>
    </div>
  );
}