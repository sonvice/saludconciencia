---
trigger: always_on
description: Reglas y estándares del proyecto SaludConCiencia (Astro, Tailwind v4, Heurísticas UX y Tokens)
---

# SaludConCiencia · Estándares de Desarrollo y UX

## 1. Arquitectura y Stack Tecnológico
- **Framework:** Astro v7+ (Static Site Generation con Content Collections y Content Layer).
- **Estilos:** Tailwind CSS v4 con `@tailwindcss/vite` y configuración CSS-first vía `@theme` en `src/styles/global.css`.
- **Storytelling y Animación:** GSAP + ScrollTrigger para transiciones narrativas en la página principal.
- **Gestión de Contenidos:** Sveltia CMS configurado en `public/admin/` (sin exponer enlaces públicos en la interfaz de usuario).

## 2. Paleta Oficial de Tokens de Diseño
- `brand-dark`: `#131313` (Tono primario para textos, contrastes y fondos oscuros).
- `brand-light`: `#FFFFFF` (Fondo de tarjetas y contrastes nítidos).
- `brand-blue`: `#579BFC` (Azul médico, enlaces interactivos y acentos clínicos).
- `brand-blue-soft`: `#EDF4FE` (Fondo suave para selección y feedback activo).
- `brand-lime`: `#D9EE53` (Verde lima de vitalidad, esperanza y botones de acción clave).
- `brand-slate`: `#C8D1E1` y `#E9EDF2` (Superficies secundarias y bordes sutiles).

## 3. Principios de UX/UI y Heurísticas de Nielsen Norman
- **Cero Emojis:** Todo elemento gráfico debe utilizar iconos vectoriales monocromáticos de Lucide (`lucide-astro`).
- **Feedback Visual (Heurística #1):** Menú de navegación con sombreado de estado activo (`bg-brand-blue-soft text-brand-dark font-bold border border-brand-blue/30`).
- **Simplicidad y Minimalismo (Heurística #8):** Menús sin saturación; la historia de vida se vive de forma integrada en el home.
- **Prevención de Errores Médicos (Heurística #5):** Todo formulario o sección clínica debe incluir aviso de responsabilidad ética indicando que no sustituye la consulta médica especializada.
