// components/Cards.jsx
// Sección que renderiza múltiples componentes Card.
// Aquí se ve la REUTILIZACIÓN: el mismo componente Card
// se usa 6 veces con diferentes props.

import Card from './Card.jsx'
import './Cards.css'

// Los datos de las tarjetas (array de objetos JavaScript)
const tarjetas = [
  {
    icono: '⚛️',
    titulo: '¿Qué es React?',
    descripcion: 'React es una librería de JavaScript para construir interfaces de usuario con componentes reutilizables.',
  },
  {
    icono: '🧩',
    titulo: '¿Qué es un componente?',
    descripcion: 'Un componente es una función de JavaScript que retorna JSX. Es la unidad básica de React.',
  },
  {
    icono: '🔁',
    titulo: '¿Qué es JSX?',
    descripcion: 'JSX es una extensión de JavaScript que permite escribir HTML dentro del código JS de forma legible.',
  },
  {
    icono: '📦',
    titulo: 'useState',
    descripcion: 'useState es un Hook que permite guardar y modificar datos dentro de un componente. Cada cambio re-renderiza la UI.',
  },
  {
    icono: '🎯',
    titulo: 'Eventos en React',
    descripcion: 'Los eventos como onClick y onChange conectan la interfaz con las funciones JavaScript del componente.',
  },
  {
    icono: '🔄',
    titulo: 'Props',
    descripcion: 'Las props son datos que el componente padre le pasa al hijo. Permiten hacer componentes reutilizables y flexibles.',
  },
]

function Cards() {
  return (
    <section className="cards" id="servicios">
      <div className="cards__encabezado">
        <h2 className="cards__titulo">Conceptos de React</h2>
        <p className="cards__subtitulo">
          Haz clic en cada tarjeta para ver más información
        </p>
      </div>

      {/* 
        Usamos .map() de JavaScript para renderizar una Card
        por cada elemento del array tarjetas.
        Así reutilizamos el componente Card 6 veces.
      */}
      <div className="cards__grid">
        {tarjetas.map((tarjeta, index) => (
          <Card
            key={index}
            icono={tarjeta.icono}
            titulo={tarjeta.titulo}
            descripcion={tarjeta.descripcion}
          />
        ))}
      </div>
    </section>
  )
}

export default Cards
