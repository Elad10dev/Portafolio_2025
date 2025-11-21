// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from './components/pages/WelcomePage'
import { PortfolioPage } from './components/pages/PortfolioPage'
import { CiberseguridadPage } from './components/pages/CiberseguridadPage'

// 1. IMPORTA TU COMPONENTE DE CHAT
// (Asegúrate de que la ruta coincida con donde creaste el archivo, 
// según tu imagen anterior parece ser esta ruta)
import { ChatWidget } from './components/ChatBot/ChatBot' 

function App() {

  return (
    <>
      {/* El fondo global está en index.css */}

      {/* ZONA DE CONTENIDO CAMBIANTE (Páginas) */}
      <Routes>
        {/* Ruta Principal: / */}
        <Route path="/" element={<WelcomePage />} />
        
        {/* Ruta de Ciberseguridad */}
        <Route path="/ciberseguridad" element={<CiberseguridadPage />} />
                
        {/* Ruta del Portafolio */}
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      {/* 2. ZONA FIJA (Elementos globales) */}
      {/* Al ponerlo aquí, fuera de <Routes>, aparecerá en TODAS las páginas */}
      <ChatWidget />
      
    </>
  )
}

export default App