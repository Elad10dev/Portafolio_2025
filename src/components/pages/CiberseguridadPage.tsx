// src/pages/CiberseguridadPage.tsx
// Página de Ciberseguridad con estructura de Portfolio y Carrusel de Imágenes

import { Button } from '../Buttons/Button';
import styles from './Portfolio.module.scss'; 
import { Link } from 'react-router-dom'; 
import React, { useState, useEffect } from 'react'; // Necesario para el carrusel
import ProfilePic from '../../assets/YO2.jpg'; // 1. Importa tu imagen de perfil

// --- IMPORTACIONES DE IMÁGENES DEL PORTAFOLIO PRINCIPAL PARA REUTILIZACIÓN (RUTAS CORREGIDAS) ---

// Proyecto 1 (Tienda Virtual) -> Usado para "Ciberseguridad (Básico)"
import Sec1_1 from '../../assets/seccion1-1.png'; // 7 imágenes
import Sec1_2 from '../../assets/seccion1-2.png';
import Sec1_3 from '../../assets/seccion1-3.png';
import Sec1_4 from '../../assets/seccion1-4.png';
import Sec1_5 from '../../assets/seccion1-5.png';
import Sec1_6 from '../../assets/seccion1-6.png';
import Sec1_7 from '../../assets/seccion1-7.png';

// Proyecto 2 (Abbyconstructioncorp) -> Usado para "Laboratorios Linux & Networking"
import Sec2_1 from '../../assets/seccion2-1.png'; // 6 imágenes
import Sec2_2 from '../../assets/seccion2-2.png';
import Sec2_3 from '../../assets/seccion2-3.png';
import Sec2_4 from '../../assets/seccion2-4.png';
import Sec2_5 from '../../assets/seccion2-5.png';
import Sec2_6 from '../../assets/seccion2-6.png';

// Proyecto 3 (Más Proyectos) -> Usado para "Virtualización y Entornos de Prueba"
import Sec3_1 from '../../assets/seccion3-1.png'; // 1 imagen

// Importamos iconos de React Icons específicos
import {
  IoLogoTux, // Linux
  IoMdLock, // Ciberseguridad Genérico
  IoLogoFoursquare, IoMdArrowBack, IoMdArrowForward // Para redes y carrusel
} from 'react-icons/io';
import { SiIsc2, SiVirtualbox } from 'react-icons/si';

// --- Mapeo de habilidades a iconos para Ciberseguridad ---
const CyberSkillIconMap: { [key: string]: React.ReactElement } = {
  "ISC2 (Conceptos Básicos)": <SiIsc2 />,
  "Introducción a Pentesting": <IoMdLock />,
  "Linux (Kali, Ubuntu, PnetLab)": <IoLogoTux />,
  "Virtualización (VirtualBox, VMWare)": <SiVirtualbox />,
  "Networking y Redes": <IoLogoFoursquare />, // Icono genérico para redes
};

// --- Datos de Ciberseguridad ---
const ciberseguridadData = {
  title: "Ciberseguridad e Infraestructura (En Desarrollo)",
  summary: `Actualmente me encuentro cursando activamente mi formación en ciberseguridad. He completado exitosamente el curso básico de conceptos de seguridad de **ISC2**, el cual proporciona una base sólida en principios de confidencialidad, integridad y disponibilidad (CIA), gestión de riesgos y seguridad operacional.
        Ahora estoy profundizando mis conocimientos con un curso de **Pentesting**, enfocándome en metodologías de prueba de penetración, reconocimiento, escaneo de vulnerabilidades y explotación controlada de sistemas. Mi objetivo es fusionar la seguridad defensiva y ofensiva con mis habilidades de desarrollo FullStack y AWS.`,
 
  contactEmail: "eladiosilva@live.com", // Puedes mantener el mismo email

  // Tecnologías y áreas de enfoque (serán los slots)
  skills: [
    "ISC2 (Conceptos Básicos)",
    "Introducción a Pentesting",
    "Linux (Kali, Ubuntu, PnetLab)",
    "Virtualización (VirtualBox, VMWare)",
    "Networking y Redes",
  ],
 
  projects: [
    {
      title: "Ciberseguridad (Básico)",
      description: "Conceptos fundamentales de seguridad (CIA, Ciberdefensa, Gestión de Riesgos) obtenidos del curso ISC2. Ilustrado con imágenes de la Sección 1.",
      imageUrl: Sec1_1, // <--- CORREGIDO: Usando la primera imagen real de la Sección 1
      linkUrl: "#", 
    },
    {
      title: "Laboratorios Linux & Networking",
      description: "Uso de Kali y Ubuntu en entornos virtuales, configuración de redes con PnetLab, y scripting básico en Bash/Python para seguridad. Ilustrado con imágenes de la Sección 2.",
      imageUrl: Sec2_1, // <--- CORREGIDO: Usando la primera imagen real de la Sección 2
      linkUrl: "#", 
    },
    {
      title: "Virtualización y Entornos de Prueba",
      description: "Configuración de entornos anidados (Nested Virtualization) en Windows/Linux usando VirtualBox y VMWare para laboratorios seguros. Ilustrado con la imagen de la Sección 3.",
      imageUrl: Sec3_1, // <--- CORREGIDO: Usando la imagen real de la Sección 3
      linkUrl: "#", 
    }
  ]
};
// -----------------------------------------

// --- LÓGICA DEL CARRUSEL (REUSADA DE PORTFOLIOPAGE) ---

interface ImageCarouselProps {
    projectTitle: string;
    initialImageUrl: string;
}

// Mapea los títulos de proyecto de Ciberseguridad a los arrays de imágenes del Portafolio
const ProjectImageMap: { [key: string]: string[] } = {
    // Mapeo Ciberseguridad -> Proyectos Web
    "Ciberseguridad (Básico)": [Sec1_1, Sec1_2, Sec1_3, Sec1_4, Sec1_5, Sec1_6, Sec1_7],
    "Laboratorios Linux & Networking": [Sec2_1, Sec2_2, Sec2_3, Sec2_4, Sec2_5, Sec2_6],
    "Virtualización y Entornos de Prueba": [Sec3_1], // Usará el modo estático si imageList.length <= 1
};


export function ImageCarousel({ projectTitle, initialImageUrl }: ImageCarouselProps) {
    // Usamos ProjectImageMap si el título existe, si no, devolvemos un array con solo la imagen inicial.
    const imageList = ProjectImageMap[projectTitle] || [initialImageUrl];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Si solo hay una imagen, mostramos la imagen estática (sin botones ni indicadores).
    if (imageList.length <= 1) {
        return (
            <div className={styles.carouselContainer}>
                <img
                    src={initialImageUrl}
                    alt={`${projectTitle} - Imagen`}
                    className={styles.image}
                />
            </div>
        );
    }
    
    // Hook para el temporizador de cambio de imagen (solo si hay más de 1 imagen)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex =>
                (prevIndex + 1) % imageList.length // Lógica de bucle
            );
        }, 5000); // 5000ms = 5 segundos

        return () => clearInterval(interval); // Limpieza del intervalo
    }, [imageList.length]);

    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    };

    const goToPrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
    };


    // Retorno del carrusel con controles
    return (
      <div className={styles.carouselContainer}>
        <img
          src={imageList[currentIndex]}
          alt={`${projectTitle} - Imagen ${currentIndex + 1}`}
          className={styles.image}
        />
        {/* Controles de navegación */}
        <button onClick={goToPrev} className={`${styles.carouselButton} ${styles.prev}`}>
          <IoMdArrowBack size={24} />
        </button>
        <button onClick={goToNext} className={`${styles.carouselButton} ${styles.next}`}>
          <IoMdArrowForward size={24} />
        </button>
        {/* Indicadores (puntos) */}
        <div className={styles.carouselIndicators}>
          {imageList.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${index === currentIndex ? styles.active : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
}
// -----------------------------------------------------


export function CiberseguridadPage() {
  return (
    <div className={styles.portfolioPage}>
     
      {/* --- NUEVA NAVEGACIÓN CENTRADA (MÁS SIMPLE AQUÍ) --- */}
      <nav className={styles.portfolioNav}>
        <div className={styles.navInner}>
          <Link to="/portfolio" className={styles.navLogo}> {/* Enlace de vuelta al portfolio principal */}
            &lt; Portafolio
          </Link>
          <h1 className={styles.navLogo} style={{ marginLeft: '20px' }}>
            {ciberseguridadData.title}
          </h1>
        </div>
      </nav>
     
      <main className={styles.mainContent}>

        {/* --- SECCIÓN RESUMEN (IMAGEN A LA IZQUIERDA DEL TEXTO) --- */}
        <section id="summary" className={styles.section} style={{ paddingBottom: '2rem' }}>
          <div className={styles.aboutContent}>
            <img
              src={ProfilePic}
              alt="Eladio Silva"
              className={styles.profilePic}
            />
            <div className={styles.bioContainer} style={{ maxWidth: '800px' }}>
              <h2 className={styles.sectionTitle} style={{ marginTop: '0' }}>Mi Trayectoria en Ciberseguridad</h2>
              <p className={styles.bioText}>{ciberseguridadData.summary}</p>
            </div>
          </div>
        </section>
        
        {/* --- BANNER DE ICONOS (Simulación del banner) --- */}
        <section className={styles.section} style={{ padding: '2rem 0' }}>
          {/* Usando los iconos para demostrar las habilidades clave */}
          <div className={styles.skillsGrid} style={{ marginTop: '2rem' }}>
             {/* Simulación del banner de habilidades con iconos más grandes */}
            <div className={styles.skillCard} style={{ fontSize: '3rem', padding: '1rem', background: '#1e293b' }}>
                <IoMdLock color="#34D399" />
            </div>
            <div className={styles.skillCard} style={{ fontSize: '3rem', padding: '1rem', background: '#1e293b' }}>
                <IoLogoTux color="#F87171" />
            </div>
            <div className={styles.skillCard} style={{ fontSize: '3rem', padding: '1rem', background: '#1e293b' }}>
                <SiVirtualbox color="#93C5FD" />
            </div>
            <div className={styles.skillCard} style={{ fontSize: '3rem', padding: '1rem', background: '#1e293b' }}>
                <SiIsc2 color="#FBBF24" />
            </div>
          </div>
        </section>
       
        {/* --- SECCIÓN HABILIDADES ESPECÍFICAS (con iconos) --- */}
        <section id="cyberSkills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Áreas de Enfoque</h2>
          <div className={styles.skillsGrid}>
            {ciberseguridadData.skills.map((skill) => (
              <div key={skill} className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  {CyberSkillIconMap[skill] || <IoMdLock />}
                </div>
                {skill}
              </div>
            ))}
          </div>
        </section>
        
        {/* --- SECCIÓN SLOTS DE PROYECTOS (USANDO CARRUSEL CON IMÁGENES DE DESARROLLO) --- */}
        <section id="cyberProjects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Conocimientos Adquiridos</h2>
          <div className={styles.projectsGrid}>
            {ciberseguridadData.projects.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                
                {/* *** USAMOS EL COMPONENTE ImageCarousel *** */}
                <ImageCarousel
                  projectTitle={project.title}
                  initialImageUrl={project.imageUrl}
                />
                {/* --------------------------------------------- */}
                
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectLinks}>
                    <Button
                      onClick={() => window.open(project.linkUrl, '_blank')}
                      variant="primary"
                      className={styles.projectButton}
                      disabled={project.linkUrl === "#"}
                    >
                      Ver Detalle
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
       
      </main>
       {/* NOTA: Eliminé la función SecurityImageBanner ya que sus iconos están duplicados en la cuadrícula de habilidades. */}
    </div>
  );
}