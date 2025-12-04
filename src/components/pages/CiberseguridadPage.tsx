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

import Sec2_5 from '../../assets/seccion2-5.png';
import Sec2_6 from '../../assets/seccion2-6.png';

// Proyecto 3 (Más Proyectos) -> Usado para "Virtualización y Entornos de Prueba"
import Sec3_1 from '../../assets/seccion3-1.png'; // 1 imagen
// --- ICONOS CORREGIDOS (io5) ---
import {
  IoLogoTux, 
  IoLockClosed, // Reemplazo de IoMdLock
  IoArrowBack,  // Reemplazo de IoMdArrowBack
  IoArrowForward, // Reemplazo de IoMdArrowForward
  IoGlobeOutline, 
  IoTerminal,
} from 'react-icons/io5';

import { SiIsc2, SiVirtualbox } from 'react-icons/si';

// --- MAPEO DE ICONOS ---
const CyberSkillIconMap: { [key: string]: React.ReactElement } = {
  "ISC2 (Conceptos Básicos)": <SiIsc2 />,
  "Introducción a Pentesting": <IoLockClosed />, // Icono actualizado
  "Linux (Kali, Ubuntu, PnetLab)": <IoLogoTux />,
  "Virtualización (VirtualBox, VMWare)": <SiVirtualbox />,
  "Networking y Redes": <IoGlobeOutline />,
};

// --- DATA ---
const ciberseguridadData = {
  title: "Ciberseguridad e Infraestructura",
  subtitle: "En Desarrollo",
  summary: `Actualmente me encuentro cursando activamente mi formación en ciberseguridad. He completado exitosamente el curso básico de conceptos de seguridad de **ISC2**, el cual proporciona una base sólida en principios de confidencialidad, integridad y disponibilidad (CIA). Ahora estoy profundizando en metodologías de Pentesting y Hardening de sistemas Linux.`,
  
  skills: [
    "ISC2 (Conceptos Básicos)",
    "Introducción a Pentesting",
    "Linux (Kali, Ubuntu, PnetLab)",
    "Virtualización (VirtualBox, VMWare)",
    "Networking y Redes",
  ],

  projects: [
    
    {
      title: "Laboratorios Linux & Networking",
      description: "Despliegue de entornos seguros con Kali y Ubuntu. Configuración de redes en PnetLab y scripting básico en Bash/Python para automatización de tareas de seguridad.",
      imageUrl: Sec2_1,
      linkUrl: "#", 
      tags: ["Linux", "Bash", "PnetLab", "Networking"]
    },
    {
      title: "Virtualización y Entornos de Prueba",
      description: "Configuración de entornos anidados (Nested Virtualization) en Windows/Linux usando VirtualBox y VMWare para laboratorios de pruebas de penetración seguros y aislados.",
      imageUrl: Sec3_1,
      linkUrl: "#", 
      tags: ["VirtualBox", "VMWare", "Sandboxing"]
    },
    {
      title: "Ciberseguridad (Básico)",
      description: "Conceptos fundamentales de seguridad (CIA, Ciberdefensa, Gestión de Riesgos) obtenidos del curso ISC2. Análisis de vulnerabilidades y políticas de seguridad.",
      imageUrl: Sec1_1, 
      linkUrl: "https://www.isc2.org/Certifications/CC", 
      tags: ["ISC2", "Risk Management", "Compliance"]
    },
  ]
};

// --- MAPEO DE IMÁGENES ---
const ProjectImageMap: { [key: string]: string[] } = {
    "Ciberseguridad (Básico)": [Sec1_1, Sec1_2, Sec1_3, Sec1_4, Sec1_5, Sec1_6, Sec1_7],
    "Laboratorios Linux & Networking": [Sec2_1, Sec2_2, Sec2_3, Sec2_5, Sec2_6],
    "Virtualización y Entornos de Prueba": [Sec3_1],
};

// --- COMPONENTE CARRUSEL ---
interface ImageCarouselProps {
    projectTitle: string;
    initialImageUrl: string;
}

export function ImageCarousel({ projectTitle, initialImageUrl }: ImageCarouselProps) {
    const imageList = ProjectImageMap[projectTitle] || [initialImageUrl];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Si solo hay 1 imagen
    if (imageList.length <= 1) {
        return (
            <div className={styles.carouselContainer}>
                <img src={initialImageUrl} alt={projectTitle} className={styles.image} />
            </div>
        );
    }

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % imageList.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [imageList]);

    const next = () => setCurrentIndex((p) => (p + 1) % imageList.length);
    const prev = () => setCurrentIndex((p) => (p - 1 + imageList.length) % imageList.length);

    return (
      <div className={styles.carouselContainer}>
        <img src={imageList[currentIndex]} alt="Slide" className={styles.image} />
        
        {/* Controles */}
        <button onClick={prev} className={`${styles.navBtn} ${styles.prev}`}><IoArrowBack /></button>
        <button onClick={next} className={`${styles.navBtn} ${styles.next}`}><IoArrowForward /></button>
        
        {/* Indicadores */}
        <div style={{
            position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', 
            display: 'flex', gap: '5px', zIndex: 10
        }}>
            {imageList.map((_, idx) => (
                <div key={idx} style={{
                    width: '6px', height: '6px', borderRadius: '50%', 
                    backgroundColor: idx === currentIndex ? '#00f3ff' : 'rgba(255,255,255,0.5)',
                    transition: 'background 0.3s'
                }}/>
            ))}
        </div>
      </div>
    );
}

// --- PÁGINA PRINCIPAL ---
export function CiberseguridadPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${styles.portfolioPage} ${!isDarkMode ? styles.lightMode : ''}`}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.navInner}>
          {/* Link de retorno */}
          <Link to="/portfolio" className={styles.logo} style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IoArrowBack /> Volver al <span>PORTAFOLIO</span>
          </Link>
          
          <div className={styles.navRightSide}>
            <h2 style={{ fontSize: '0.9rem', color: 'var(--primary-green)', margin: 0, textTransform: 'uppercase', letterSpacing: '1px', display: 'none', paddingRight: '15px' }} className={styles.hideMobile}>
                Security Ops
            </h2>

            {/* TOGGLE DÍA/NOCHE */}
            <button className={styles.themeToggle} onClick={toggleTheme}>
                {isDarkMode ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                )}
            </button>
          </div>
        </div>
      </header>
      
      <main className={styles.mainContent}>
        
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2 className={styles.greeting} style={{ color: 'var(--primary-green)' }}>
                 INFRAESTRUCTURA & SEGURIDAD
              </h2>
              <h1 className={styles.mainTitle}>{ciberseguridadData.title}</h1>
              <p className={styles.bio}>{ciberseguridadData.summary}</p>
              
              <div className={styles.techStackBadges}>
                 <span style={{ borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}>Blue Team</span>
                 <span style={{ borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}>Ethical Hacking</span>
                 <span style={{ borderColor: 'var(--primary-green)', color: 'var(--primary-green)' }}>Network Sec</span>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <img src={ProfilePic} alt="Profile" className={styles.heroImage} style={{ borderColor: 'var(--primary-green)' }} />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className={styles.skillsSection}>
            {ciberseguridadData.skills.map(skill => (
                <div key={skill} className={styles.skillPill} style={{ borderColor: 'var(--primary-green)' }}>
                    <span className={styles.icon} style={{ color: 'var(--primary-green)' }}>
                        {CyberSkillIconMap[skill] || <IoTerminal/>}
                    </span>
                    {skill}
                </div>
            ))}
        </section>

        {/* --- LISTADO DE PROYECTOS --- */}
        <section className={styles.sectionContainer}>
            <div className={styles.sectionHeader} style={{ borderLeftColor: 'var(--primary-green)' }}>
                <h2>Laboratorios & Prácticas</h2>
            </div>

            <div className={styles.projectsList}>
                {ciberseguridadData.projects.map((project, index) => (
                    <article key={index} className={styles.projectCard}>
                        {/* Izquierda: Carrusel */}
                        <div className={styles.cardMedia}>
                            <ImageCarousel 
                                projectTitle={project.title} 
                                initialImageUrl={project.imageUrl}
                            />
                        </div>
                        {/* Derecha: Info */}
                        <div className={styles.cardContent}>
                            <h3>{project.title}</h3>
                            <div className={styles.tags}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{ color: 'var(--primary-green)', background: 'rgba(16, 185, 129, 0.1)' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p>{project.description}</p>
                            <div className={styles.cardActions}>
                                <Button 
                                    onClick={() => window.open(project.linkUrl)} 
                                    variant="primary"
                                    disabled={project.linkUrl === "#"}
                                    style={{ 
                                        background: 'transparent', 
                                        border: '1px solid var(--primary-green)', 
                                        color: 'var(--primary-green)' 
                                    }}
                                >
                                    Ver Certificación / Detalle
                                </Button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>

      </main>
    </div>
  );
}