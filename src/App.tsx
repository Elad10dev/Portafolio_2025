// src/App.tsx
// ¡Actualizado para renderizar la página de Portafolio!
import { Routes, Route } from 'react-router-dom'
import { WelcomePage } from './components/pages/WelcomePage'
import { PortfolioPage } from './components/pages/PortfolioPage' // 1. Importa la nueva página

// (El componente LoginForm lo crearemos después)
// import { LoginForm } from './components/LoginForm' 

function App() {

  return (
    <>
      {/* El fondo global está en index.css */}

      <Routes>
        {/* Ruta Principal: / */}
        <Route path="/" element={<WelcomePage />} />
        
        {/* Ruta de Login: /login */}
        <Route path="/ciberseguridad" element={
          <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            <h1 style={{ fontSize: '2rem', color: '#F87171' }}>Ciberseguridad (Pronto)</h1>
          </div>
        } />
        
        {/* 2. ¡Ruta del Portafolio actualizada! 
           Ahora carga tu componente real */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        
      </Routes>
    </>
  )
}

export default App

