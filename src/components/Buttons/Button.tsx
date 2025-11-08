// src/components/Button/Button.tsx
// Este es el componente de Botón Reutilizable con SCSS
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss'; // 1. Importa los estilos SCSS

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'danger' | 'secondary' | 'light' | 'aws';
}

export function Button({ children, variant = 'primary', className, ...rest }: ButtonProps) {
  
  // 2. Mapea el 'variant' a un nombre de clase SCSS
  const variantClass = styles[variant] || styles.primary;

  return (
    <button
      // 3. Aplica la clase base y la clase de variante
      className={`${styles.buttonBase} ${variantClass} ${className || ''}`}
      {...rest}
    >
      {children}
    </button>
  );
}