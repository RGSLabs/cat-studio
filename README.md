# Cat Studio™ — Sitio Web (Demo)

One-page site construido por **RGS Labs™** bajo el sistema RGS Web Architect™.

HTML + CSS + JavaScript puro. Sin frameworks. Sin build step. Listo para GitHub Pages.

---

## Estructura

```
cat-studio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── img/
│       ├── og-cover.svg     (fuente editable)
│       └── og-cover.png     (usada en meta tags Open Graph)
├── .nojekyll
├── robots.txt
├── sitemap.xml
└── README.md
```

## Features incluidas

- **Bilingüe ES/EN** — toggle en el nav, recuerda la preferencia (localStorage).
- **Modo claro / oscuro** — toggle en el nav, respeta `prefers-color-scheme` si el visitante no ha elegido antes.
- **FAQ en acordeón**, animaciones de scroll, navbar responsive con menú móvil.
- **Easter egg**: el botón "¿Qué hará este botón?" hace aparecer gatitos animados en pantalla.
- **SEO on-page**: title, meta description, Open Graph, Twitter Card, JSON-LD (Organization), sitemap.xml, robots.txt.
- **Accesibilidad**: focus visible, `aria-label`/`aria-expanded` en controles interactivos, `prefers-reduced-motion` respetado.

## Pendiente antes de publicar (para Wiliam)

1. **Formulario de contacto** — en `index.html`, busca el comentario `ATENCIÓN WILIAM` (sección `#contact`) y reemplaza `#FORMS_APP_LINK_AQUI` con el link real de tu formulario en forms.app.
2. **Dominio propio** — mientras no exista, el sitio usa como placeholder `https://rabbitgamesdev.github.io/cat-studio/` en `<link rel="canonical">`, Open Graph, Twitter Card, JSON-LD y `sitemap.xml`. Cuando tengas dominio o URL final de GitHub Pages, actualiza esas 5 referencias.
3. **Logo** — no existía un logo entregado, así que se construyó una mascota/isotipo propio (el gato astronauta) como identidad visual temporal. Si más adelante se define un logo oficial, se reemplaza en el `<svg>` inline del `.logo` (nav y footer) y en `favicon.svg`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (público), por ejemplo `cat-studio`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio (no dentro de una subcarpeta).
3. Ve a **Settings → Pages**.
4. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL tipo `https://usuario.github.io/cat-studio/` en unos minutos.
6. Actualiza las 5 referencias de URL mencionadas en el punto 2 de arriba con esa URL real.

---

*Prototype powered by [RGS Labs™](https://github.com/RabbitGamesDev)*
