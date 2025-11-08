// src/components/Header/Header.tsx
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          Eladio Silva
        </Link>
        <ul className={styles.navList}>
          <li>
            <a href="#about" className={styles.navLink}>Sobre Mí</a>
          </li>
          <li>
            <a href="#skills" className={styles.navLink}>Habilidades</a>
          </li>
          <li>
            <a href="#projects" className={styles.navLink}>Proyectos</a>
          </li>
          <li>
            <a href="#contact" className={styles.navLink}>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}