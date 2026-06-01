// components/Footer.jsx
// Componente de pie de página.
// Simple y sin estado — solo recibe y muestra información.

import './Footer.css'

function Footer() {
  // Obtenemos el año actual con JavaScript puro
  const anio = new Date().getFullYear()

  return (
    <footer className="footer" id="contacto">
      <div className="footer__contenido">
        {/* Logo */}
        <div className="footer__logo">
          <span>⚛️</span>
          <span>MiApp</span>
        </div>

        {/* Links */}
        <div className="footer__links">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>

        {/* Créditos */}
        <p className="footer__creditos">
          © {anio} · Hecho con React y JavaScript · Actividad escolar
        </p>

        {/* Tecnologías */}
        <div className="footer__tags">
          <span className="footer__tag">React</span>
          <span className="footer__tag">JSX</span>
          <span className="footer__tag">useState</span>
          <span className="footer__tag">Componentes</span>
          <span className="footer__tag">Eventos</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
