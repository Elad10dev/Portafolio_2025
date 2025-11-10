// src/App.tsx
// ¡Actualizado para renderizar la página de Portafolio!
import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from './components/pages/WelcomePage'
import { PortfolioPage } from './components/pages/PortfolioPage' // 1. Importa la nueva página
import { CiberseguridadPage } from './components/pages/CiberseguridadPage'

// (El componente LoginForm lo crearemos después)
// import { LoginForm } from './components/LoginForm' 

function App() {

  return (
    <>
      {/* El fondo global está en index.css */}

      <Routes>
        {/* Ruta Principal: / */}
        <Route path="/" element={<WelcomePage />} />
        
        
        {/* Ruta de Ciberseguridad */}
        <Route path="/ciberseguridad" element={<CiberseguridadPage />} />
                
        {/* 2. ¡Ruta del Portafolio actualizada! 
           Ahora carga tu componente real */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        
      </Routes>
    </>
  )
}

export default App

