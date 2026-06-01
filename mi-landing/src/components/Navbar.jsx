// components/Navbar.jsx
// Componente de navegación.
// Recibe dos props: modoOscuro (boolean) y toggleModo (función)

import { useState } from 'react'
import './Navbar.css'

function Navbar({ modoOscuro, toggleModo }) {
  // Estado local: controla si el menú móvil está abierto
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <nav className={`navbar ${modoOscuro ? 'navbar--oscuro' : 'navbar--claro'}`}>
      {/* LOGO */}
      <div className="navbar__logo">
        <span className="navbar__logo-icono">⚛️</span>
        <span className="navbar__logo-texto">MiApp</span>
      </div>

      {/* LINKS de navegación */}
      <ul className={`navbar__links ${menuAbierto ? 'navbar__links--abierto' : ''}`}>
        <li><a href="#inicio" onClick={() => setMenuAbierto(false)}>Inicio</a></li>
        <li><a href="#servicios" onClick={() => setMenuAbierto(false)}>Servicios</a></li>
        <li><a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a></li>
      </ul>

      <div className="navbar__acciones">
        {/* EVENTO onClick: cambia entre modo oscuro y claro */}
        <button className="navbar__btn-modo" onClick={toggleModo}>
          {modoOscuro ? '☀️ Claro' : '🌙 Oscuro'}
        </button>

        {/* EVENTO onClick: abre/cierra el menú en móvil */}
        <button
          className="navbar__hamburguesa"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
