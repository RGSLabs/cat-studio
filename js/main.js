/* =========================================================
   CAT STUDIO™ — main.js
   Built by RGS Labs™ · RGS Web Architect™ system
   Vanilla JS. No dependencies. No build step.
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     1) i18n dictionary (ES / EN)
  --------------------------------------------------------- */
  const I18N = {
    es: {
      "nav.about": "Nosotros",
      "nav.services": "Servicios",
      "nav.faq": "Preguntas",
      "nav.contact": "Contacto",
      "nav.portfolio": "Proyectos",
      "nav.cta": "🐱 Empecemos",

      "hero.eyebrow": "Estudio independiente de juegos y software",
      "hero.title_prefix": "Bienvenido a",
      "hero.subtitle": "Hacemos tu día un poco mejor a través de videojuegos y software útil.",
      "hero.cta_primary": "🐱 Empecemos tu proyecto",
      "hero.cta_secondary": "Ver servicios",
      "hero.meta1_title": "Juegos",
      "hero.meta1_sub": "Experiencias que enganchan",
      "hero.meta2_title": "Software",
      "hero.meta2_sub": "Herramientas que ayudan",
      "chip.games": "Video Games",
      "chip.tools": "Software Tools",

      "marquee.1": "Videojuegos",
      "marquee.2": "Software Tools",
      "marquee.3": "Apps de Escritorio",
      "marquee.4": "Creatividad",
      "marquee.5": "Utilidad diaria",
      "marquee.6": "Cojutepeque, El Salvador",

      "about.eyebrow": "Quiénes somos",
      "about.title": "Dos mundos, un mismo objetivo: tu día a día",
      "about.p1": "Cat Studio™ crea experiencias de software que combinan creatividad, entretenimiento y productividad para mejorar la vida diaria.",
      "about.p2": "A diferencia de estudios que solo hacen juegos o solo herramientas, Cat Studio™ desarrolla ambos mundos bajo la misma marca, sin dividir su identidad entre dos caminos distintos.",
      "mission.tag": "Misión",
      "mission.text": "Mejorar la vida diaria de las personas a través de software creativo, herramientas digitales útiles y experiencias de videojuegos divertidas.",

      "value.1_title": "Dos mundos, una marca",
      "value.1_desc": "Videojuegos y software útil, desarrollados con el mismo cuidado y bajo el mismo techo.",
      "value.2_title": "Problemas reales, con gusto",
      "value.2_desc": "Resolvemos tareas del día a día sin perder de vista la parte divertida del software.",
      "value.3_title": "Pensado para gente joven",
      "value.3_desc": "Diseñado para gamers, curiosos de la tecnología y usuarios digitales nativos.",
      "value.4_title": "Cada detalle cuenta",
      "value.4_desc": "Interfaces minimalistas, directas y sin ruido visual innecesario.",

      "services.eyebrow": "Lo que hacemos",
      "services.title": "Tres disciplinas, un mismo estándar",
      "services.subtitle": "Cat Studio™ trabaja en tres frentes distintos, todos con el mismo nivel de cuidado.",
      "service.1_title": "Videojuegos",
      "service.1_desc": "Experiencias interactivas pensadas para divertir, sorprender y engancharte desde el primer minuto.",
      "service.1_tag1": "Indie",
      "service.1_tag2": "Casual",
      "service.1_tag3": "Arcade",
      "service.2_title": "Herramientas de Software",
      "service.2_desc": "Aplicaciones prácticas que resuelven problemas cotidianos con una interfaz simple y rápida.",
      "service.2_tag1": "Productividad",
      "service.2_tag2": "Utilidades",
      "service.2_tag3": "Web Apps",
      "service.3_title": "Aplicaciones de Escritorio",
      "service.3_desc": "Software ligero y confiable que corre directamente en tu computadora, sin fricciones.",
      "service.3_tag1": "Windows",
      "service.3_tag2": "macOS",
      "service.3_tag3": "Ligero",
      "service.1_status": "// En desarrollo",
      "service.2_status": "// Próximamente",
      "service.3_status": "// Disponible",

      "portfolio.eyebrow": "Nuestros proyectos",
      "portfolio.title": "Lo que estamos construyendo",
      "portfolio.subtitle": "Un portafolio en crecimiento. Así se ve nuestro camino hasta ahora.",
      "portfolio.1_status": "En desarrollo",
      "portfolio.1_title": "Nuestro primer videojuego",
      "portfolio.1_desc": "Un arcade casual pensado para partidas cortas y muy adictivas.",
      "portfolio.2_status": "Próximamente",
      "portfolio.2_title": "Nuestra primera herramienta",
      "portfolio.2_desc": "Una utilidad pensada para resolver una tarea cotidiana en pocos clics.",
      "portfolio.3_status": "En planeación",
      "portfolio.3_title": "Nuestra primera app de escritorio",
      "portfolio.3_desc": "Software ligero que corre directo en tu computadora, sin fricciones.",
      "portfolio.4_status": "Idea en construcción",
      "portfolio.4_title": "Nuestro segundo videojuego",
      "portfolio.4_desc": "Todavía en papel, pero ya tiene nombre en nuestras cabezas.",
      "portfolio.cta_soon": "Disponible pronto",

      "faq.eyebrow": "Preguntas frecuentes",
      "faq.title": "Todo lo que quieras saber",
      "faq.subtitle": "¿No encuentras tu respuesta? Escríbenos directamente.",
      "faq.q1": "¿Qué hace Cat Studio™?",
      "faq.a1": "Creamos videojuegos y también software útil: herramientas y aplicaciones de escritorio pensadas para hacer más simple el día a día.",
      "faq.q2": "¿Cuánto cuesta un proyecto con ustedes?",
      "faq.a2": "Todavía no tenemos tarifas públicas. Cada proyecto se cotiza según su alcance, así que escríbenos y te respondemos con una propuesta.",
      "faq.q3": "¿Dónde están ubicados?",
      "faq.a3": "Somos un estudio con base en Cojutepeque, El Salvador, y trabajamos con clientes en México y Estados Unidos.",
      "faq.q4": "¿Puedo proponerles una idea de videojuego o herramienta?",
      "faq.a4": "Sí, por favor. Cuéntanos tu idea a través del formulario de contacto y la revisamos con gusto.",
      "faq.q5": "¿El sitio está disponible en otros idiomas?",
      "faq.a5": "Sí. Puedes cambiar entre español e inglés desde el botón en la barra de navegación.",

      "contact.eyebrow": "Contacto",
      "contact.title": "Hablemos de tu próximo proyecto",
      "contact.copy": "¿Tienes una idea para un videojuego, una herramienta o algo completamente nuevo? Cuéntanos, Cat Studio™ está para escucharte.",
      "contact.email_label": "Escríbenos directo:",
      "contact.form_note": "Formulario de contacto gestionado con forms.app.",
      "contact.form_cta": "Abrir formulario",
      "contact.email_cta": "Enviar un correo",

      "footer.tagline": "Videojuegos y software útil, bajo un mismo techo.",
      "footer.rights": "© 2026 Cat Studio™. Todos los derechos reservados.",
      "footer.credit_prefix": "Prototype powered by",

      "egg.label": "¿Qué hará este botón?",
      "egg.aria": "Botón sorpresa, presiona para ver qué pasa"
    },

    en: {
      "nav.about": "About",
      "nav.services": "Services",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.portfolio": "Projects",
      "nav.cta": "🐱 Let's go",

      "hero.eyebrow": "Independent games & software studio",
      "hero.title_prefix": "Welcome to",
      "hero.subtitle": "Making every day a little better through games and useful software.",
      "hero.cta_primary": "🐱 Let's start your project",
      "hero.cta_secondary": "See services",
      "hero.meta1_title": "Games",
      "hero.meta1_sub": "Experiences that hook you",
      "hero.meta2_title": "Software",
      "hero.meta2_sub": "Tools that actually help",
      "chip.games": "Video Games",
      "chip.tools": "Software Tools",

      "marquee.1": "Video Games",
      "marquee.2": "Software Tools",
      "marquee.3": "Desktop Apps",
      "marquee.4": "Creativity",
      "marquee.5": "Everyday Utility",
      "marquee.6": "Cojutepeque, El Salvador",

      "about.eyebrow": "Who we are",
      "about.title": "Two worlds, one goal: your everyday",
      "about.p1": "Cat Studio™ builds software experiences that blend creativity, entertainment and productivity to improve everyday life.",
      "about.p2": "Unlike studios that focus only on games or only on tools, Cat Studio™ develops both worlds under the same brand, without splitting its identity between two different paths.",
      "mission.tag": "Mission",
      "mission.text": "Improve people's daily lives through creative software, useful digital tools and enjoyable video game experiences.",

      "value.1_title": "Two worlds, one brand",
      "value.1_desc": "Games and useful software, built with the same care under the same roof.",
      "value.2_title": "Real problems, real fun",
      "value.2_desc": "We solve everyday tasks without losing sight of software's fun side.",
      "value.3_title": "Made for young minds",
      "value.3_desc": "Designed for gamers, tech enthusiasts and digital-native users.",
      "value.4_title": "Every detail counts",
      "value.4_desc": "Minimalist interfaces, direct and free of unnecessary visual noise.",

      "services.eyebrow": "What we do",
      "services.title": "Three disciplines, one standard",
      "services.subtitle": "Cat Studio™ works across three fronts, all held to the same level of care.",
      "service.1_title": "Video Games",
      "service.1_desc": "Interactive experiences designed to entertain, surprise and hook you from minute one.",
      "service.1_tag1": "Indie",
      "service.1_tag2": "Casual",
      "service.1_tag3": "Arcade",
      "service.2_title": "Software Tools",
      "service.2_desc": "Practical applications that solve everyday problems with a simple, fast interface.",
      "service.2_tag1": "Productivity",
      "service.2_tag2": "Utilities",
      "service.2_tag3": "Web Apps",
      "service.3_title": "Desktop Applications",
      "service.3_desc": "Lightweight, reliable software that runs directly on your computer, with zero friction.",
      "service.3_tag1": "Windows",
      "service.3_tag2": "macOS",
      "service.3_tag3": "Lightweight",
      "service.1_status": "// In development",
      "service.2_status": "// Coming soon",
      "service.3_status": "// Available",

      "portfolio.eyebrow": "Our projects",
      "portfolio.title": "What we're building",
      "portfolio.subtitle": "A growing portfolio. Here's how our journey looks so far.",
      "portfolio.1_status": "In development",
      "portfolio.1_title": "Our first video game",
      "portfolio.1_desc": "A casual arcade game built for short, addictive sessions.",
      "portfolio.2_status": "Coming soon",
      "portfolio.2_title": "Our first tool",
      "portfolio.2_desc": "A utility designed to solve one everyday task in just a few clicks.",
      "portfolio.3_status": "In planning",
      "portfolio.3_title": "Our first desktop app",
      "portfolio.3_desc": "Lightweight software that runs directly on your computer, with zero friction.",
      "portfolio.4_status": "Idea in the works",
      "portfolio.4_title": "Our second video game",
      "portfolio.4_desc": "Still on paper, but it already has a name in our heads.",
      "portfolio.cta_soon": "Coming soon",

      "faq.eyebrow": "FAQ",
      "faq.title": "Everything you'd want to know",
      "faq.subtitle": "Can't find your answer? Write to us directly.",
      "faq.q1": "What does Cat Studio™ do?",
      "faq.a1": "We build video games and useful software: tools and desktop applications designed to make everyday life simpler.",
      "faq.q2": "How much does a project cost?",
      "faq.a2": "We don't have public rates yet. Every project is quoted based on scope, so write to us and we'll get back with a proposal.",
      "faq.q3": "Where are you based?",
      "faq.a3": "We're a studio based in Cojutepeque, El Salvador, working with clients in Mexico and the United States.",
      "faq.q4": "Can I pitch you a game or tool idea?",
      "faq.a4": "Yes, please. Tell us about it through the contact form and we'll gladly take a look.",
      "faq.q5": "Is the site available in other languages?",
      "faq.a5": "Yes. You can switch between Spanish and English from the button in the navigation bar.",

      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about your next project",
      "contact.copy": "Got an idea for a game, a tool, or something completely new? Tell us, Cat Studio™ is here to listen.",
      "contact.email_label": "Write to us directly:",
      "contact.form_note": "Contact form managed with forms.app.",
      "contact.form_cta": "Open form",
      "contact.email_cta": "Send an email",

      "footer.tagline": "Video games and useful software, under one roof.",
      "footer.rights": "© 2026 Cat Studio™. All rights reserved.",
      "footer.credit_prefix": "Prototype powered by",

      "egg.label": "What does this button do?",
      "egg.aria": "Surprise button, press to see what happens"
    }
  };

  const STORAGE_LANG = "catstudio-lang";
  const STORAGE_THEME = "catstudio-theme";

  /* ---------------------------------------------------------
     2) Language
  --------------------------------------------------------- */
  function getPreferredLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    if (saved === "es" || saved === "en") return saved;
    return navigator.language && navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.es;
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });

    localStorage.setItem(STORAGE_LANG, lang);
  }

  function initLang() {
    applyLang(getPreferredLang());
    document.querySelectorAll(".lang-toggle button").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  }

  /* ---------------------------------------------------------
     3) Theme (light / dark)
  --------------------------------------------------------- */
  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem(STORAGE_THEME, theme);
  }

  function initTheme() {
    applyTheme(getPreferredTheme());
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(isDark ? "light" : "dark");
    });
  }

  /* ---------------------------------------------------------
     4) Navbar scroll state + mobile menu
  --------------------------------------------------------- */
  function initNav() {
    const navbar = document.querySelector(".navbar");
    const onScroll = () => {
      if (!navbar) return;
      navbar.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const hamburger = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");
    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        const open = hamburger.classList.toggle("is-open");
        mobileMenu.classList.toggle("is-open", open);
        hamburger.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
      });
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("is-open");
          mobileMenu.classList.remove("is-open");
          hamburger.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }
  }

  /* ---------------------------------------------------------
     5) FAQ accordion
  --------------------------------------------------------- */
  function initFaq() {
    document.querySelectorAll(".faq-item").forEach((item) => {
      const question = item.querySelector(".faq-q");
      const answer = item.querySelector(".faq-a");
      if (!question || !answer) return;

      question.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        document.querySelectorAll(".faq-item.is-open").forEach((openItem) => {
          if (openItem !== item) {
            openItem.classList.remove("is-open");
            openItem.querySelector(".faq-a").style.maxHeight = null;
            openItem.querySelector(".faq-q").setAttribute("aria-expanded", "false");
          }
        });

        item.classList.toggle("is-open", !isOpen);
        question.setAttribute("aria-expanded", String(!isOpen));
        answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : null;
      });
    });
  }

  /* ---------------------------------------------------------
     6) Scroll reveal
  --------------------------------------------------------- */
  function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));

    // Safety net: if something prevents the observer from ever firing
    // (older engines, edge cases), don't leave content permanently hidden.
    window.setTimeout(() => {
      items.forEach((el) => el.classList.add("is-visible"));
    }, 2500);
  }

  /* ---------------------------------------------------------
     7) Easter egg — "¿Qué hará este botón?"
  --------------------------------------------------------- */
  function initEasterEgg() {
    const btn = document.querySelector("[data-egg-btn]");
    const layer = document.querySelector(".egg-layer");
    if (!btn || !layer) return;

    let busy = false;
    btn.addEventListener("click", () => {
      btn.classList.add("is-pressed");
      window.setTimeout(() => btn.classList.remove("is-pressed"), 160);

      if (busy) return;
      busy = true;

      const total = 14;
      for (let i = 0; i < total; i++) {
        const cat = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        cat.setAttribute("viewBox", "0 0 64 64");
        cat.classList.add("egg-cat");
        cat.innerHTML =
          '<circle cx="32" cy="34" r="15" fill="#FFEE8C"/>' +
          '<path d="M20 20 L25 28 L17 27 Z" fill="#FFEE8C"/>' +
          '<path d="M44 20 L39 28 L47 27 Z" fill="#FFEE8C"/>' +
          '<circle cx="26.5" cy="33" r="1.8" fill="#221F14"/>' +
          '<circle cx="37.5" cy="33" r="1.8" fill="#221F14"/>' +
          '<path d="M30 38 Q32 40 34 38" fill="none" stroke="#221F14" stroke-width="1.8" stroke-linecap="round"/>';

        const left = Math.random() * 100;
        const delay = Math.random() * 900;
        const duration = 2.7 + Math.random() * 0.7;
        const spin = (Math.random() > 0.5 ? 1 : -1) * (6 + Math.random() * 10);
        const size = 32 + Math.random() * 28;

        cat.style.left = left + "vw";
        cat.style.width = size + "px";
        cat.style.animationDelay = delay + "ms";
        cat.style.animationDuration = duration + "s";
        cat.style.setProperty("--spin", spin + "deg");

        layer.appendChild(cat);
        const remove = () => cat.remove();
        cat.addEventListener("animationend", remove);
        // Hard safety net: never let a cat linger past ~4s total, even if
        // the animationend event doesn't fire for some reason.
        window.setTimeout(remove, delay + 4000);
      }

      window.setTimeout(() => {
        busy = false;
      }, 1400);
    });
  }

  /* ---------------------------------------------------------
     8) Keep the egg button clear of the footer credit
  --------------------------------------------------------- */
  function initEggFooterGuard() {
    const btn = document.querySelector("[data-egg-btn]");
    const footer = document.querySelector("footer");
    if (!btn || !footer) return;

    const BASE_OFFSET = 22;
    const GAP = 18;

    const update = () => {
      const rect = footer.getBoundingClientRect();
      const overlap = window.innerHeight - rect.top;
      btn.style.bottom = overlap > 0 ? overlap + GAP + "px" : BASE_OFFSET + "px";
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ---------------------------------------------------------
     Init
  --------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLang();
    initTheme();
    initNav();
    initFaq();
    initReveal();
    initEasterEgg();
    initEggFooterGuard();
  });
})();
