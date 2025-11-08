// src/pages/PortfolioPage.tsx
import { Header } from '../Header/Header';
import { Button } from '../Buttons/Button';
import styles from './Portfolio.module.scss';

// --- Tus Datos (¡RELLENA LO QUE FALTA AQUÍ!) ---
const portfolioData = {
  name: "Eladio Ernesto de Jesus Castañeda Silva",
  title: "Desarrollador Web FullStack con manejo de Microservicios AWS",
  bio: `Con un año y tres meses de experiencia continua y activa como desarrollador freelance FullStack, me he especializado en la construcción y optimización de arquitecturas de microservicios sobre la plataforma AWS. Mi enfoque se centra en la entrega de soluciones robustas y escalables, optimizadas para rendimiento y resiliencia en entornos de producción.
        Durante este periodo, he colaborado con diversas entidades, incluyendo Abbyconstructioncorp en Texas, EE. UU., donde he aplicado metodologías ágiles para el desarrollo de infraestructuras en la nube que impulsan operaciones críticas. Mi compromiso es traducir requisitos complejos en sistemas eficientes, garantizando la estabilidad y la evolución tecnológica.`,
  
  // --- ¡NECESITO ESTA INFO, ELADIO! ---
  email: "tu.email@ejemplo.com",
  linkedin: "https://www.linkedin.com/in/tu-perfil",
  github: "https://www.github.com/tu-usuario",

  skills: [
    // ¡Rellena con tus habilidades!
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Express",
    "AWS Lambda", "AWS API Gateway", "AWS S3", "AWS DynamoDB", 
    "PostgreSQL", "Prisma", "SCSS", "Git", "Docker (Básico)"
  ],
  
  projects: [
    {
      title: "Tienda Virtual (Proyecto de Graduación)",
      description: "Plataforma de e-commerce completa con React, Node.js, Prisma y PostgreSQL.",
      imageUrl: "https://placehold.co/600x400/0f172a/a7f3d0?text=Tienda+Virtual", // Placeholder
      demoUrl: "#", // ¡NECESITO TU URL DE VERCEL!
      repoUrl: "#"  // ¡NECESITO TU URL DE GITHUB!
    },
    {
      title: "Proyecto Abbyconstructioncorp",
      description: "Optimización de infraestructura en la nube y desarrollo de microservicios.",
      imageUrl: "https://placehold.co/600x400/0f172a/a7f3d0?text=AWS+Project", // Placeholder
      demoUrl: "#", 
      repoUrl: "#"
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


export function PortfolioPage() {
  return (
    <div className={styles.portfolioPage}>
      <Header />
      
      <main className={styles.mainContent}>
        
        {/* --- SECCIÓN SOBRE MÍ --- */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre Mí</h2>
          <div className={styles.aboutContent}>
            <img 
              src="https://placehold.co/400x400/0f172a/a7f3d0?text=Eladio+Silva" 
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

        {/* --- SECCIÓN HABILIDADES --- */}
        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>Arsenal de Habilidades</h2>
          <div className={styles.skillsGrid}>
            {portfolioData.skills.map((skill) => (
              <div key={skill} className={styles.skillCard}>
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
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={styles.projectImage} 
                />
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