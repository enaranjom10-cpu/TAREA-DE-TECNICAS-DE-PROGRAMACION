// components/Card.jsx
// Componente REUTILIZABLE de tarjeta.
// Recibe props: icono, titulo, descripcion
// Tiene estado propio para mostrar/ocultar más info al hacer clic.

import { useState } from 'react'
import './Card.css'

function Card({ icono, titulo, descripcion }) {
  // Estado local: controla si la tarjeta está expandida
  const [expandida, setExpandida] = useState(false)

  return (
    <div
      className={`card ${expandida ? 'card--expandida' : ''}`}
      // EVENTO onClick: cambia el estado expandida
      onClick={() => setExpandida(!expandida)}
    >
      <div className="card__icono">{icono}</div>
      <h3 className="card__titulo">{titulo}</h3>
      <p className="card__descripcion">{descripcion}</p>

      {/* Contenido extra — solo visible cuando expandida === true */}
      {expandida && (
        <div className="card__extra fade-up">
          <p>✅ <strong>Esto es estado local en Card.</strong> Cada tarjeta maneja su propio useState independientemente.</p>
        </div>
      )}

      <span className="card__hint">
        {expandida ? '▲ Clic para cerrar' : '▼ Clic para saber más'}
      </span>
    </div>
  )
}

export default Card
