# AGENTS.md · SaludConCiencia

Guía de arquitectura, convenciones y contexto para agentes de IA y desarrolladores que trabajen en este repositorio.

---

## 1. Visión y Propósito del Proyecto

**SaludConCiencia** es una plataforma interactiva de divulgación científica y acompañamiento humano para pacientes con **Leucemia Mieloide Crónica (LMC)** y sus familias, creada por **Shirley Gaviria** (Bacterióloga, Especialista en Gerencia de Servicios de Salud y paciente de LMC desde hace más de 22 años).

- **Repositorio oficial:** `https://github.com/sonvice/saludconciencia.git` (rama `main`).
- **Despliegue:** Netlify (Continuous Deployment conectado a GitHub).

---

## 2. Stack Tecnológico

| Herramienta | Versión / Tipo | Función |
| :--- | :--- | :--- |
| **Astro** | v7+ (Static Site Generation) | Framework principal y Content Layer (`src/content.config.ts`) |
| **Tailwind CSS** | v4 (`@tailwindcss/vite`) | Sistema de estilos CSS-first mediante `@theme` en `src/styles/global.css` |
| **GSAP + ScrollTrigger** | v3.12+ | Animaciones narrativas y línea de tiempo del storytelling en la página principal |
| **Sveltia CMS** | Lightweight Git-backed CMS | Gestión de contenido de artículos del blog y ajustes en `/admin/` |
| **Lucide Icons** | `lucide-astro` | Iconografía vectorial monocromática y minimalista |

---

## 3. Comandos de Configuración y Desarrollo

- **Instalar dependencias:** `npm install`
- **Iniciar servidor de desarrollo:** `npm run dev` (disponible en `http://localhost:4321`)
- **Compilar para producción:** `npm run build` (genera salida estática en `dist/`)
- **Vista previa de producción:** `npm run preview`

---

## 4. Tokens Oficiales de Diseño (`src/styles/global.css`)

Paleta estricta basada en los tokens del proyecto:
- `--color-brand-dark`: `#131313` (Fondo oscuro, tipografía principal y botones de contraste).
- `--color-brand-light`: `#FFFFFF` (Superficies de tarjetas y fondos limpios).
- `--color-brand-blue`: `#579BFC` (Azul biotecnológico, acentos clínicos e interacciones).
- `--color-brand-blue-soft`: `#EDF4FE` (Sombreado suave para estado activo en menú y badges).
- `--color-brand-lime`: `#D9EE53` (Verde lima de vitalidad, esperanza y botones de acción clave).
- `--color-brand-slate`: `#C8D1E1` y `#E9EDF2` (Bordes sutiles y superficies neutras).

---

## 5. Principios de UX/UI y Heurísticas de Usabilidad (Nielsen Norman & Krug)

1. **Cero Emojis:** Todos los elementos gráficos deben utilizar iconos vectoriales monocromáticos de Lucide (`lucide-astro`) o SVG con estilo minimalista.
2. **Feedback Visual de Estado Activo (Heurística #1):** El menú de navegación resalta la página actual con sombreado de token suave (`bg-brand-blue-soft text-brand-dark font-bold border border-brand-blue/30`).
3. **Comunicación 100% Centrada en WhatsApp (+34 613491695):** 
   - Se eliminaron los formularios pesados de correo electrónico.
   - En `/contacto`, opera un **Enrutador Inteligente** que prepara y abre directamente el mensaje en WhatsApp según la opción elegida (*Sesión 1 a 1*, *Lista del Libro*, *Consulta General*, *Apoyo Solidario*).
   - Botón flotante permanente de WhatsApp con `z-index: 99999`.
4. **Prevención de Errores Médicos (Heurística #5):** Todo módulo clínico o pie de página incluye el aviso ético indicando que la plataforma es divulgación científica y no sustituye al hematólogo tratante.

---

## 6. Gestión de Contenidos con Sveltia CMS (`/admin/`)

- **Acceso:** `https://tudominio.com/admin/` (ruta generada por `src/pages/admin/index.astro`).
- **Configuración:** `public/admin/config.yml` configurado con `repo: sonvice/saludconciencia` y `branch: main`.
- **Colección de Blog:** Artículos en Markdown en `src/content/blog/` con soporte de categorías, fecha, portada, etiquetas y lectura estimada.
- **Ajustes de Redes Sociales:** `src/data/social.json` editable desde `/admin/` para YouTube, TikTok, Instagram y Facebook.
  - *Regla:* Los iconos en el footer y bio solo se renderizan si el enlace contiene datos (`hasYouTube`, `hasTikTok`, etc.).

---

## 7. Estructura de Directorios Clave

```
saludconciencia/
├── public/
│   ├── admin/
│   │   └── config.yml           # Configuración de Sveltia CMS
│   ├── images/                  # Imágenes subidas desde el CMS
│   └── favicon.svg
├── src/
│   ├── components/              # Componentes UI (Header, Footer, Storytelling, WhatsApp, etc.)
│   ├── content/
│   │   └── blog/                # Artículos en Markdown
│   ├── data/
│   │   └── social.json          # Datos de redes sociales editables
│   ├── layouts/
│   │   └── Layout.astro         # Layout base con fuentes, meta tags y WhatsApp flotante
│   ├── pages/
│   │   ├── admin/index.astro    # SPA de Sveltia CMS
│   │   ├── blog/                # Catálogo y template de artículos
│   │   ├── contacto.astro       # Enrutador inteligente de WhatsApp
│   │   └── index.astro          # Landing principal con Storytelling GSAP
│   ├── styles/
│   │   └── global.css           # Tailwind CSS v4 (@theme tokens y estilos globales)
│   └── content.config.ts        # Content Layer Schema de Astro v7
├── AGENTS.md                    # Este archivo de guía para agentes y desarrolladores
└── GEMINI.md                    # Contexto del espacio de trabajo
```
