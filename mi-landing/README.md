# ⚛️ Mi Landing Page — Actividad React

Proyecto de landing page construido con **React + Vite** como actividad escolar.

---

## 🗂️ Estructura del proyecto

```
mi-landing/
├── index.html              ← Punto de entrada HTML (tiene el div#root)
├── package.json            ← Dependencias del proyecto
├── vite.config.js          ← Configuración de Vite
└── src/
    ├── main.jsx            ← Monta React en el div#root
    ├── App.jsx             ← Componente raíz — ensambla todo
    ├── App.css             ← Estilos del componente raíz
    ├── index.css           ← Estilos globales
    └── components/
        ├── Navbar.jsx      ← Barra de navegación
        ├── Navbar.css
        ├── Hero.jsx        ← Sección principal con contador
        ├── Hero.css
        ├── Card.jsx        ← Tarjeta reutilizable
        ├── Card.css
        ├── Cards.jsx       ← Sección de tarjetas
        ├── Cards.css
        ├── Footer.jsx      ← Pie de página
        └── Footer.css
```

---

## 🚀 Cómo ejecutar el proyecto

```bash
# 1. Instala las dependencias
npm install

# 2. Ejecuta el servidor de desarrollo
npm run dev

# 3. Abre en el navegador
# http://localhost:5173
```

---

## 🧩 Componentes creados

| Componente | Descripción |
|---|---|
| `Navbar` | Barra fija con links, menú móvil y botón modo oscuro/claro |
| `Hero` | Sección principal con contador interactivo y mensajes dinámicos |
| `Card` | Tarjeta reutilizable que se expande al hacer clic |
| `Cards` | Sección que renderiza 6 tarjetas usando el componente Card |
| `Footer` | Pie de página con año dinámico generado con JavaScript |

---

## ⚡ Eventos implementados

- `onClick` — sumar, restar, reiniciar contador
- `onClick` — cambiar modo oscuro/claro
- `onClick` — abrir/cerrar menú hamburguesa en móvil
- `onClick` — expandir/colapsar tarjetas Card

---

## 💡 Conceptos de React demostrados

- **Componentes funcionales** — todas las partes son funciones
- **Props** — `Card` recibe `icono`, `titulo`, `descripcion`
- **useState** — contador, mensajes, modo oscuro, menú
- **Renderizado condicional** — `{mensaje && <p>...</p>}`
- **Listas con .map()** — Cards renderiza las tarjetas con map
- **JSX** — mezcla de HTML y JavaScript en cada archivo

---

## 📹 Puntos para explicar en el video

1. **¿Qué es React?** → Librería para construir UIs con componentes
2. **¿Qué es JSX?** → Sintaxis que mezcla HTML y JS
3. **¿Qué es un componente?** → Función que retorna JSX
4. **¿Cómo funcionan las props?** → Datos del padre al hijo
5. **¿Cómo funciona useState?** → Guarda datos, al cambiar re-renderiza
6. **¿Cómo funcionan los eventos?** → onClick llama funciones JS
7. **Diferencia con HTML tradicional** → No manipulamos el DOM, React lo hace
