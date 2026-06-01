// components/Hero.jsx
// Sección principal de la landing page.
// Incluye un CONTADOR y un MENSAJE DINÁMICO para mostrar eventos.

import { useState } from 'react'
import './Hero.css'

function Hero() {
  // useState: estado para el contador
  const [contador, setContador] = useState(0)

  // useState: estado para el mensaje dinámico
  const [mensaje, setMensaje] = useState('')

  // Función que se ejecuta al hacer clic en "Sumar"
  const sumar = () => {
    const nuevoValor = contador + 1
    setContador(nuevoValor)

    // JavaScript decide qué mensaje mostrar según el valor
    if (nuevoValor >= 10) {
      setMensaje('🎉 ¡Llegaste a 10! ¡Entendiste useState!')
    } else if (nuevoValor >= 5) {
      setMensaje('💪 ¡Vas a la mitad!')
    } else {
      setMensaje('👆 Sigue haciendo clic...')
    }
  }

  // Función para restar
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1)
      setMensaje('')
    }
  }

  // Función para reiniciar
  const reiniciar = () => {
    setContador(0)
    setMensaje('')
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero__contenido">
        {/* Texto principal */}
        <p className="hero__etiqueta">Proyecto React — Actividad 1</p>
        <h1 className="hero__titulo">
          Construye con <span className="hero__titulo-acento">React</span>
        </h1>
        <p className="hero__subtitulo">
          Una landing page dividida en componentes reutilizables,
          con eventos JavaScript y estado dinámico.
        </p>

        {/* ===== INTERACCIÓN: CONTADOR CON EVENTOS ===== */}
        <div className="hero__contador">
          <p className="hero__contador-label">Contador interactivo con useState</p>

          <div className="hero__contador-controles">
            {/* onClick llama a la función restar */}
            <button className="hero__btn hero__btn--rojo" onClick={restar}>
              − Restar
            </button>

            {/* Muestra el valor del estado */}
            <div className="hero__contador-numero">{contador}</div>

            {/* onClick llama a la función sumar */}
            <button className="hero__btn hero__btn--verde" onClick={sumar}>
              + Sumar
            </button>
          </div>

          {/* Botón de reinicio */}
          <button className="hero__btn-reiniciar" onClick={reiniciar}>
            Reiniciar
          </button>

          {/* Mensaje dinámico — solo aparece si hay mensaje */}
          {mensaje && (
            <p className="hero__mensaje fade-up">{mensaje}</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero
