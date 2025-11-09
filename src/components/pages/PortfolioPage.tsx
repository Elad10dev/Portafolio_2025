// src/pages/PortfolioPage.tsx
// ¡VERSIÓN FINAL CON IMAGEN DE PERFIL E ICONOS DE HABILIDADES!

import { Button } from '../Buttons/Button';
import styles from './Portfolio.module.scss';
import { Link } from 'react-router-dom';
// *** IMPORTACIONES DE REACT HOOKS CORREGIDAS ***
import React, { useState, useEffect } from 'react'; 
import ProfilePic from '../../assets/YO2.jpg'; // 1. Importa tu imagen de perfil (Ruta corregida)

// Importaciones de imágenes de proyectos
import Quiosco1 from '../../../src/assets/quiosco-1.png';
import Quiosco2 from '../../../src/assets/quiosco-2.png';
import Quiosco3 from '../../../src/assets/quiosco-3.png';
import Quiosco4 from '../../../src/assets/quiosco-4.png';
import Quiosco5 from '../../../src/assets/quiosco-5.png';

import Abby1 from '../../../src/assets/Abby-1.png';
import Abby2 from '../../../src/assets/Abby-2.png';
import Abby3 from '../../../src/assets/Abby-3.png';
import Abby4 from '../../../src/assets/Abby-4.png';
import Abby5 from '../../../src/assets/Abby-5.png';

// Importamos iconos de React Icons
import {
  IoLogoNodejs, IoLogoReact, IoLogoJavascript, IoLogoCss3, IoLogoGithub,
  IoLogoDocker, IoLogoSass, IoArrowBack, IoArrowForward // <-- Añadimos iconos para carrusel
} from 'react-icons/io5';
import { SiTypescript, SiPrisma, SiPostgresql, SiAmazon, SiAwslambda } from 'react-icons/si';

// --- Mapeo de habilidades a iconos ---
const SkillIconMap: { [key: string]: React.ReactElement } = {
  "JavaScript (ES6+)": <IoLogoJavascript />,
  "TypeScript": <SiTypescript />,
  "React": <IoLogoReact />,
  "Node.js": <IoLogoNodejs />,
  "Express": <IoLogoNodejs />, // Usamos Node.js para Express
  "AWS Lambda": <SiAwslambda />,
  "AWS API Gateway": <SiAmazon />, // Usamos AWS genérico
  "AWS S3": <SiAmazon />, // Usamos AWS genérico
  "AWS DynamoDB": <SiAmazon />, // Usamos AWS genérico
  "PostgreSQL": <SiPostgresql />,
  "Prisma": <SiPrisma />,
  "SCSS": <IoLogoSass />,
  "Git": <IoLogoGithub />,
  "Docker (Básico)": <IoLogoDocker />,
  "CSS3": <IoLogoCss3 />, // Añadido CSS3 si se necesita
};

// --- Tus Datos (RELLENAR ES CLAVE PARA EL LUNES) ---
const portfolioData = {
  name: "Eladio Ernesto de Jesus Castañeda Silva",
  title: "Desarrollador Web FullStack con manejo de Microservicios AWS",
  bio: `Con un año y tres meses de experiencia continua y activa como desarrollador freelance FullStack, me he especializado en la construcción y optimización de arquitecturas de microservicios sobre la plataforma AWS. Mi enfoque se centra en la entrega de soluciones robustas y escalables, optimizadas para rendimiento y resiliencia en entornos de producción.
        Durante este periodo, he colaborado con diversas entidades, incluyendo Abbyconstructioncorp en Texas, EE. UU., donde he aplicado metodologías ágiles para el desarrollo de infraestructuras en la nube que impulsan operaciones críticas. Mi compromiso es traducir requisitos complejos en sistemas eficientes, garantizando la estabilidad y la evolución tecnológica.`,
 
  // --- ¡NECESITO ESTA INFO, ELADIO! ---
  email: "eladiosilva@live.com", // (EDITA ESTO)
  linkedin: "https://www.linkedin.com/in/tu-perfil",
  github: "https://www.github.com/tu-usuario",

  skills: [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express",
    "AWS Lambda", "AWS API Gateway", "AWS S3", "AWS DynamoDB",
    "PostgreSQL", "Prisma", "SCSS", "Git", "Docker (Básico)"
  ],
 
  projects: [
    {
      title: "Tienda Virtual (Proyecto de Graduación)",
      description: "Plataforma de e-commerce completa con React, Node.js, Prisma y PostgreSQL.",
      imageUrl: "https://placehold.co/600x400/0f172a/a7f3d0?text=Tienda+Virtual", // Placeholder
      demoUrl: "https://quiosco-next-iota.vercel.app/order/cafe", // (EDITA ESTO)
      repoUrl: "https://github.com/Elad10dev/quiosco-next/tree/main"  // (EDITA ESTO)
    },
    {
      title: "Proyecto Abbyconstructioncorp",
      description: "Optimización de infraestructura en la nube y desarrollo de microservicios.",
      imageUrl: "https://placehold.co/600x400/0f172a/a7f3d0?text=AWS+Project", // Placeholder
      demoUrl: "https://abbyconstructioncorp.com/",
      repoUrl: "https://github.com/Elad10dev/AbbyREACT"
    },
    {
      title: "Más Proyectos (Pronto)",
      description: "Una colección de mis próximos trabajos y experimentos.",
      imageUrl: "https://placehold.co/600x400/0f172a/a7f3d0?text=Proyectos+(Pronto)", // Placeholder
      demoUrl: "#",
      repoUrl: "#"
    }
  ]
};
// -----------------------------------------


interface ImageCarouselProps {
    projectTitle: string;
    // La imagen inicial se usa si no hay carrusel
    initialImageUrl: string;
}

// Mapea los títulos de proyecto a arrays de imágenes importadas
const ProjectImageMap: { [key: string]: string[] } = {
    "Tienda Virtual (Proyecto de Graduación)": [Quiosco1, Quiosco2, Quiosco3, Quiosco4, Quiosco5],
    "Proyecto Abbyconstructioncorp": [Abby1, Abby2, Abby3, Abby4, Abby5],
    // Más Proyectos (Pronto) usará la imagen inicial simple
};


export function ImageCarousel({ projectTitle, initialImageUrl }: ImageCarouselProps) {
    const imageList = ProjectImageMap[projectTitle];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Si el proyecto no tiene un carrusel definido, usamos la imagen inicial estática
    if (!imageList || imageList.length === 0) {
        return (
            <div className={styles.carouselContainer}>
                <img
                    src={initialImageUrl}
                    alt={`${projectTitle} - Placeholder`}
                    className={styles.image}
                />
            </div>
        );
    }
   
    // Hook para el temporizador de cambio de imagen
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


    // *** CIERRE Y RETURN CORRECTO DEL COMPONENTE ***
    return (
      <div className={styles.carouselContainer}>
        <img
          src={imageList[currentIndex]}
          alt={`${projectTitle} - Imagen ${currentIndex + 1}`}
          className={styles.image}
        />
        {/* Controles de navegación */}
        <button onClick={goToPrev} className={`${styles.carouselButton} ${styles.prev}`}>
          <IoArrowBack size={24} />
        </button>
        <button onClick={goToNext} className={`${styles.carouselButton} ${styles.next}`}>
          <IoArrowForward size={24} />
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

export function PortfolioPage() {
  return (
    <div className={styles.portfolioPage}>
     
      {/* --- NUEVA NAVEGACIÓN CENTRADA --- */}
      <nav className={styles.portfolioNav}>
        <div className={styles.navInner}> {/* Contenedor para centrar */}
          <Link to="/" className={styles.navLogo}>
            {portfolioData.name}
          </Link>
          <div className={styles.navButtons}>
            <a href="#about">
              <Button variant="light" className={styles.navButton}>Sobre Mí</Button>
            </a>
            <a href="#skills">
              <Button variant="light" className={styles.navButton}>Habilidades</Button>
            </a>
            <a href="#projects">
              <Button variant="light" className={styles.navButton}>Proyectos</Button>
            </a>
            <a href="#contact">
              <Button variant="light" className={styles.navButton}>Contacto</Button>
            </a>
          </div>
        </div>
      </nav>
     
      <main className={styles.mainContent}>
       
        {/* --- SECCIÓN SOBRE MÍ --- */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre Mí</h2>
          <div className={styles.aboutContent}>
            {/* 2. IMAGEN DE PERFIL */}
            <img
              src={ProfilePic}
              alt="Eladio Silva"
              className={styles.profilePic}
            />
            <div className={styles.bioContainer}>
              <h3 className={styles.bioTitle}>{portfolioData.name}</h3>
              <p className={styles.bioSubtitle}>{portfolioData.title}</p>
              <p className={styles.bioText}>{portfolioData.bio}</p>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN HABILIDADES (AHORA CON ICONOS) --- */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Arsenal de Habilidades</h2>
          <div className={styles.skillsGrid}>
            {portfolioData.skills.map((skill) => (
              <div key={skill} className={styles.skillCard}>
                {/* Renderizamos el icono si existe en el mapa */}
                <div className={styles.skillIcon}>
                  {SkillIconMap[skill] || <IoLogoNodejs />}
                </div>
                {skill}
              </div>
            ))}
          </div>
        </section>
        {/* --- SECCIÓN PROYECTOS --- */}
        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
          <div className={styles.projectsGrid}>
            {portfolioData.projects.map((project) => (
              <div key={project.title} className={styles.projectCard}>
                {/* *** USAMOS EL CAROUSEL O LA IMAGEN SIMPLE *** */}
                {ProjectImageMap[project.title] && ProjectImageMap[project.title].length > 0 ? (
                  <ImageCarousel
                    projectTitle={project.title}
                    initialImageUrl={project.imageUrl}
                  />
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={styles.projectImage} // Usar la clase de imagen simple
                  />
                )}
                {/* --------------------------------------------- */}
                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.projectLinks}>
                    <Button
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      variant="primary"
                      className={styles.projectButton}
                      disabled={project.demoUrl === "#"}
                    >
                      Ver Demo
                    </Button>
                    <Button
                      onClick={() => window.open(project.repoUrl, '_blank')}
                      variant="secondary"
                      className={styles.projectButton}
                      disabled={project.repoUrl === "#"}
                    >
                      Ver Código
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECCIÓN CONTACTO --- */}
        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <p className={styles.contactSubtitle}>
            ¿Interesado en colaborar? Envíame un mensaje.
          </p>
          <div className={styles.contactLinks}>
            <Button
              onClick={() => window.location.href = `mailto:${portfolioData.email}`}
              variant="light"
              className={styles.contactButton}
            >
              Email
            </Button>
            <Button
              onClick={() => window.open(portfolioData.linkedin, '_blank')}
              variant="light"
              className={styles.contactButton}
            >
              LinkedIn
            </Button>
            <Button
              onClick={() => window.open(portfolioData.github, '_blank')}
              variant="light"
              className={styles.contactButton}
            >
              GitHub
            </Button>
          </div>
        </section>
       
      </main>
    </div>
  );
}