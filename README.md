# Portfolio React — Jose Aparicio
### Migración de Vanilla JS a React · 2026

---

## ¿Por qué migro este portfolio a React?

Este repositorio es la versión React de mi portfolio personal, migrado desde una versión funcional en Vanilla JS.

No lo hago porque el original esté roto — funciona. Lo hago por tres razones concretas:

1. **React es mi stack objetivo.** Estoy en proceso de transición a junior frontend developer. Un portfolio en React demuestra que aplico lo que aprendo, no solo que lo estudio.

2. **Es el proyecto final del Meta Front-End Developer Certificate (Coursera).** Los requisitos del curso coinciden exactamente con las secciones que ya tenía construidas. Tiene sentido unificarlo.

3. **Componentizar este portfolio me obliga a pensar en arquitectura real.** Dividir una página en componentes reutilizables, gestionar estado, manejar efectos — es exactamente el tipo de pensamiento que quiero demostrar.

---

## Stack

- React 18 + Vite
- CSS Modules
- React Router (navegación interna)
- GitHub API (carga de proyectos en tiempo real)

---

## Fases de migración

### ✅ Fase 1 — Setup y estructura base
*Objetivo: tener el proyecto corriendo con la arquitectura de carpetas definida*

- Inicializar proyecto con Vite + React
- Definir estructura de carpetas (`/components`, `/sections`, `/hooks`, `/assets`)
- Configurar React Router para scroll suave entre secciones
- Crear componente `App.jsx` vacío con las secciones como placeholders

**Por qué primero esto:** sin estructura sólida, los componentes se convierten en caos. Es como hacer el mise en place antes de cocinar.

---

### ✅ Fase 2 — Header con comportamiento de scroll
*Objetivo: cumplir el requisito principal del curso y uno de los más visibles*

- Componente `Header.jsx` con links externos (GitHub, LinkedIn)
- Links internos con scroll suave a cada sección
- Hook `useScrollDirection` — oculta el header al bajar, lo muestra al subir
- Animación CSS de transición suave

**Por qué aquí:** el header es lo primero que ve cualquier evaluador o recruiter. Si funciona bien desde el principio, da confianza al resto.

---

### ✅ Fase 3 — Landing section
*Objetivo: presentación personal clara y directa*

- Componente `Landing.jsx`
- Avatar, nombre, título y bio corta
- Links a CV PDF y email directo
- Responsive desde el inicio

**Por qué aquí:** es la sección más simple en React — ideal para practicar props y estructura de componentes antes de aumentar complejidad.

---

### ✅ Fase 4 — Sección de proyectos en grid
*Objetivo: mostrar trabajo real de forma visual*

- Componente `Projects.jsx` con grid 2x2
- Componente reutilizable `ProjectCard.jsx` — recibe props: título, descripción, stack, links
- Datos de proyectos en archivo `projects.js` separado (separación de datos y UI)
- Integración con GitHub API via `useEffect` + `fetch` para cargar repos en tiempo real

**Por qué aquí:** es el núcleo del portfolio. Separar datos de componentes es una decisión de arquitectura real, no solo un ejercicio.

---

### ✅ Fase 5 — Formulario de contacto
*Objetivo: lógica de formulario controlado en React*

- Componente `Contact.jsx`
- Inputs controlados con `useState`
- Validación de campos: nombre, email (regex), mensaje
- Estados visuales: error, éxito, cargando
- Reset del formulario tras envío

**Por qué aquí:** los formularios controlados son uno de los patrones más preguntados en entrevistas junior. Hacerlo bien aquí tiene valor doble.

---

### 🔄 Fase 6 — Contenido avanzado (post-entrega del curso)
*Objetivo: convertir el proyecto del curso en el portfolio definitivo*

- Terminal interactiva migrada a React
- Toggle ES/EN con Context API
- Analytics de clicks con localStorage
- Dev Log 365 embed o widget
- Dark/light mode

**Por qué después:** estas funcionalidades no las pide el curso y añaden complejidad. Primero entregar limpio, luego iterar.

---

### 🔄 Fase 7 — Optimización y despliegue
*Objetivo: portfolio listo para producción*

- Lighthouse audit — performance, accesibilidad, SEO
- Lazy loading de imágenes y componentes
- Deploy en GitHub Pages con `gh-pages`
- README actualizado con capturas y links

---

## Estado actual

| Fase | Estado |
|------|--------|
| Fase 1 — Setup | 🔄 En progreso |
| Fase 2 — Header | ⏳ Pendiente |
| Fase 3 — Landing | ⏳ Pendiente |
| Fase 4 — Proyectos | ⏳ Pendiente |
| Fase 5 — Contacto | ⏳ Pendiente |
| Fase 6 — Avanzado | ⏳ Post-entrega |
| Fase 7 — Deploy | ⏳ Post-entrega |

---

## Contexto

Este portfolio forma parte de mi **Dev Log 365** — un diario público de 365 días documentando mi transición de recepcionista de hotel a desarrollador frontend.

📓 [Ver Dev Log 365](https://anudoranador87.github.io/Mi-Camino-Web-365/)
🐙 [GitHub](https://github.com/anudoranador87)

---

*Día 42 de 365 · Málaga, España · 2026*
