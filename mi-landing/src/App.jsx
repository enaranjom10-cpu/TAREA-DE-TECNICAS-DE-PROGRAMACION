// App.jsx
// Este es el componente RAÍZ. Aquí importamos y ensamblamos
// todos los demás componentes de la página.

import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Cards from './components/Cards.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  // useState para modo oscuro/claro — se pasa como prop a los componentes
  const [modoOscuro, setModoOscuro] = useState(true)

  const toggleModo = () => {
    setModoOscuro(!modoOscuro)
  }

  return (
    // La clase 'oscuro' o 'claro' cambia los colores de toda la app
    <div className={modoOscuro ? 'app oscuro' : 'app claro'}>
      <Navbar modoOscuro={modoOscuro} toggleModo={toggleModo} />
      <Hero />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
