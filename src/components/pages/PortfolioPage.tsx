// src/pages/PortfolioPage.tsx
import { Button } from '../Buttons/Button';
import styles from './Portfolio.module.scss';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ProfilePic from '../../assets/YO2.jpg';
import abby1 from '../../assets/Abby-1.png';
import abby2 from '../../assets/Abby-2.png';
import abby3 from '../../assets/Abby-3.png';
import abby4 from '../../assets/Abby-4.png';
import abby5 from '../../assets/Abby-5.png';
import luis1 from '../../assets/fondoluis.png';
import luis2 from '../../assets/luis1.png';
import luis4 from '../../assets/luis2.png';
import luis3 from '../../assets/luis3.png';
import luis5 from '../../assets/luis4.png';
import luis6 from '../../assets/luis5.png';
import quiosco1 from '../../assets/quiosco-1.png';
import quiosco2 from '../../assets/quiosco-2.png';
import quiosco3 from '../../assets/quiosco-3.png';
import quiosco4 from '../../assets/quiosco-4.png';
import quiosco5 from '../../assets/quiosco-5.png';
import quiosco6 from '../../assets/quiosco-6.png';
import n8n1 from '../../assets/N8n1.png';
import n8n2 from '../../assets/N8n2.png';
import n8n3 from '../../assets/N8n3.png'; 
import n8n4 from '../../assets/N8n4.png'; 

import {
  IoLogoNodejs, IoLogoReact, IoLogoJavascript, IoLogoGithub,
  IoLogoDocker,  IoArrowBack, IoArrowForward, IoCodeSlash, IoGlobeOutline
} from 'react-icons/io5';
import { SiTypescript, SiPrisma, SiPostgresql, SiAmazon, SiAwslambda } from 'react-icons/si';

// --- ICONS MAP ---
const SkillIconMap: { [key: string]: React.ReactElement } = {
  "JavaScript (ES6+)": <IoLogoJavascript />,
  "TypeScript": <SiTypescript />,
  "React": <IoLogoReact />,
  "Node.js": <IoLogoNodejs />,
  "AWS Lambda": <SiAwslambda />,
  "AWS API Gateway": <SiAmazon />,
  "PostgreSQL": <SiPostgresql />,
  "Prisma": <SiPrisma />,
  "Docker": <IoLogoDocker />,
  "Git": <IoLogoGithub />,
};

// --- DATA ---
const portfolioData = {
  name: "Eladio Castañeda",
  fullTitle: "Desarrollador FullStack + AWS",
  email: "eladio.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/eladio-casta%C3%B1eda-silva/",
  bio: `Desarrollador FullStack con más de 2 años de experiencia especializada en arquitecturas Serverless y Microservicios en AWS. Me enfoco en crear soluciones escalables, seguras y de alto rendimiento.`,
  
  skills: [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", 
    "AWS Lambda", "AWS API Gateway", "AWS S3", 
    "PostgreSQL", "Docker", "Git"
  ]
};

// --- LISTA UNIFICADA DE PROYECTOS ---
const allProjects = [
  {
    title: "Infraestructura de Agentes IA (PosUp)", // Título Profesional
    // Descripción enfocada en el rol freelance internacional y la tecnología avanzada
    description: "Orquestación de agentes autónomos y automatización estratégica con n8n. Desarrollo de soluciones escalables para operaciones críticas en EE.UU",
    imageUrl: n8n1, // Portada
    demoUrl: "https://agents-ia.posupapps.com", // Link actualizado
    repoUrl: "https://github.com/Elad10dev/PosupAR", // Link actualizado
    tags: ["n8n", "AI Agents", "React", "Automation"]
  },
  {
    title: "Plataforma AbbyConstruction",
    description: "Optimización de infraestructura cloud y desarrollo de portal corporativo para cliente en EE.UU. Integración de microservicios para gestión de clientes.",
    imageUrl: abby1, 
    demoUrl: "https://abbyconstructioncorp.com/",
    repoUrl: "https://github.com/Elad10dev/AbbyREACT",
    tags: ["AWS S3", "React", "Node.js", "CloudFront"]
  },
  {
    title: "Portafolio Personal (Luis Gutierrez)",
    description: "Diseño y desarrollo de identidad digital profesional. Sitio web responsive de alto impacto visual, optimizado y con despliegue automatizado.",
    imageUrl: luis1, 
    demoUrl: "https://portfolio-luis-deffit.vercel.app/",
    repoUrl: "https://github.com/Elad10dev/Portfolio_LuisDeffit",
    tags: ["React", "Vite", "CSS Modules", "Responsive"]
  },
  {
    title: "Tienda Virtual (Graduación)",
    description: "E-commerce fullstack completo. Incluye panel de administración, gestión de inventario en tiempo real, pasarela de pagos y base de datos relacional robusta.",
    imageUrl: quiosco1, 
    demoUrl: "https://quiosco-next-iota.vercel.app/order/cafe",
    repoUrl: "https://github.com/Elad10dev/quiosco-next/tree/main",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"]
  },
];

// --- MAPEO DE IMÁGENES ---
// NOTA: El nombre de la clave debe ser IDÉNTICO al 'title' de arriba
const ProjectImageMap: { [key: string]: string[] } = {
  // Nuevo proyecto con sus 4 imágenes
  "Infraestructura de Agentes IA (PosUp)": [n8n1, n8n2, n8n3, n8n4], 
  
  "Plataforma AbbyConstruction": [abby1, abby2, abby3, abby4, abby5], 
  
  "Portafolio Personal (Luis Gutierrez)": [luis1, luis2, luis3, luis4, luis5, luis6], 
  
  "Tienda Virtual (Graduación)": [quiosco1, quiosco2, quiosco3, quiosco4, quiosco5, quiosco6], 
};

// --- COMPONENTE CARRUSEL ---
interface ImageCarouselProps {
  projectTitle: string;
  initialImageUrl: string;
}

export function ImageCarousel({ projectTitle, initialImageUrl }: ImageCarouselProps) {
    const imageList = ProjectImageMap[projectTitle];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fallback si no hay lista de imágenes
    if (!imageList || imageList.length === 0) {
        return (
            <div className={styles.carouselContainer}>
                <img src={initialImageUrl} alt={projectTitle} className={styles.image} />
            </div>
        );
    }

    // Auto-play cada 4 segundos
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
        {/* Imagen actual */}
        <img 
            src={imageList[currentIndex]} 
            alt={`${projectTitle} slide ${currentIndex}`} 
            className={styles.image} 
        />
        
        {/* Controles de navegación */}
        <button onClick={prev} className={`${styles.navBtn} ${styles.prev}`}>
            <IoArrowBack />
        </button>
        <button onClick={next} className={`${styles.navBtn} ${styles.next}`}>
            <IoArrowForward />
        </button>

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
export function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`${styles.portfolioPage} ${!isDarkMode ? styles.lightMode : ''}`}>
      
      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.navInner}>
          <Link to="/" className={styles.logo}>
            ELADIO<span>.DEV</span>
          </Link>
          
          <div className={styles.navRightSide}>
            <nav className={styles.navLinks}>
              <a href="#about">Perfil</a>
              <a href="#projects">Proyectos</a>
              <a href="#contact">Contacto</a>
            </nav>

            {/* BOTÓN DÍA/NOCHE */}
            <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Cambiar tema">
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
        <section id="about" className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2 className={styles.greeting}>Hola, soy {portfolioData.name.split(' ')[0]}</h2>
              <h1 className={styles.mainTitle}>{portfolioData.fullTitle}</h1>
              <p className={styles.bio}>{portfolioData.bio}</p>
              
              <div className={styles.techStackBadges}>
                 <span>AWS Certified</span>
                 <span>FullStack Dev</span>
                 <span>Cybersecurity Enthusiast</span>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <img src={ProfilePic} alt="Profile" className={styles.heroImage} />
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className={styles.skillsSection}>
            {portfolioData.skills.map(skill => (
                <div key={skill} className={styles.skillPill}>
                    <span className={styles.icon}>{SkillIconMap[skill] || <IoCodeSlash/>}</span>
                    {skill}
                </div>
            ))}
        </section>

        {/* --- SECCIÓN DE PROYECTOS --- */}
        <section id="projects" className={styles.sectionContainer}>
            <div className={styles.sectionHeader}>
                <h2>Proyectos Destacados</h2>
            </div>

            <div className={styles.projectsList}>
                {allProjects.map((project, index) => (
                    <article key={index} className={styles.projectCard}>
                        {/* Izquierda: Carrusel con las imágenes asignadas */}
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
                                {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                            </div>
                            <p>{project.description}</p>
                            <div className={styles.cardActions}>
                                <Button 
                                    onClick={() => window.open(project.demoUrl)} 
                                    variant="primary"
                                    disabled={project.demoUrl === "#"}
                                >
                                    <span style={{display:'flex', gap:'8px', alignItems:'center'}}>
                                        <IoGlobeOutline /> Demo
                                    </span>
                                </Button>
                                <Button 
                                    onClick={() => window.open(project.repoUrl)} 
                                    variant="secondary"
                                    disabled={project.repoUrl === "#"}
                                >
                                    <span style={{display:'flex', gap:'8px', alignItems:'center'}}>
                                        <IoLogoGithub /> Código
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>

        {/* CONTACTO */}
        <section id="contact" className={styles.contactSection}>
           <h2>¿Listo para contactarme?</h2>
           <p>Actualmente disponible para nuevos desafíos.</p>
           <div className={styles.contactGrid}>
               <Button onClick={() => window.open(`mailto:${portfolioData.email}`)} variant="light">Enviar Email</Button>
               <Button onClick={() => window.open('https://wa.me/5491173571659')} variant="primary">WhatsApp</Button>
               <Button onClick={() => window.open(portfolioData.linkedin)} variant="light">LinkedIn</Button>
           </div>
        </section>

      </main>
    </div>
  );
}