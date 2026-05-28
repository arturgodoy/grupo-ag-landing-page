(() => {
  const translations = {
    "meta-title": {
      pt: "Grupo AG | Infraestrutura Digital",
      en: "Grupo AG | Digital Infrastructure",
    },
    "meta-description": {
      pt: "Grupo AG: infraestrutura digital, sistemas e soluções SaaS para empresas que querem crescer com tecnologia.",
      en: "Grupo AG: digital infrastructure, systems, and SaaS solutions for companies that want to grow with technology.",
    },
    "nav-home": { pt: "Home", en: "Home" },
    "nav-systems": { pt: "Sistemas", en: "Systems" },
    "nav-solutions": { pt: "Soluções", en: "Solutions" },
    "nav-contact": { pt: "Contato", en: "Contact" },
    "cta-start": { pt: "Iniciar projeto", en: "Start a project" },
    "aria-open-menu": { pt: "Abrir menu", en: "Open menu" },
    "aria-switch-lang": {
      pt: "Mudar para Inglês",
      en: "Switch to Portuguese",
    },
    "hero-badge": {
      pt: "Grupo AG | O futuro do desenvolvimento",
      en: "Grupo AG | The future of development",
    },
    "hero-title-1": {
      pt: "Infraestrutura digital",
      en: "Digital infrastructure",
    },
    "hero-title-2": {
      pt: "que transforma sua empresa.",
      en: "that transforms your business.",
    },
    "hero-subtitle": {
      pt: "Sua gestão digital começa com uma base sólida. Construímos os trilhos digitais para o seu crescimento estruturado e escalável!",
      en: "Your digital management starts with a solid foundation. We build the digital rails for structured, scalable growth.",
    },
    "pain-box-title": {
      pt: "O FIM DA DESORGANIZAÇÃO",
      en: "THE END OF DISORGANIZATION",
    },
    "pain-box-text": {
      pt: "Esqueça falhas, lentidão e processos manuais. Construímos a base tecnológica que sustenta a sua operação diária. Servidores otimizados e sistemas que não te deixam na mão.",
      en: "Forget failures, slowness, and manual processes. We build the technology foundation that supports your daily operations. Optimized servers and systems that never let you down.",
    },
    "hero-cta-solutions": { pt: "Ver soluções", en: "View solutions" },
    "hero-tagline": {
      pt: "GRUPO AG - SOLUÇÕES WEB",
      en: "GRUPO AG - WEB SOLUTIONS",
    },
    "portfolio-title": {
      pt: "Transformamos negócios com infraestrutura robusta",
      en: "We transform businesses with robust infrastructure",
    },
    "portfolio-desc": {
      pt: "Somos focados no futuro do desenvolvimento e infraestrutura digital. Entregamos a base tecnológica completa para gestão, otimizando a presença digital da sua empresa.",
      en: "We focus on the future of development and digital infrastructure. We deliver the complete technology foundation for management, optimizing your company's digital presence.",
    },
    "view-system": { pt: "Ver sistema ↗", en: "View system ↗" },
    "services-title": {
      pt: "Tecnologia que impulsiona seu sucesso",
      en: "Technology that drives your success",
    },
    "service-1": { pt: "Infraestrutura Web", en: "Web Infrastructure" },
    "service-2": { pt: "Sistemas de Gestão (SaaS)", en: "Management Systems (SaaS)" },
    "service-3": { pt: "Soluções em Nuvem", en: "Cloud Solutions" },
    "service-4": { pt: "Consultoria Tech", en: "Tech Consulting" },
    "services-desc": {
      pt: "Estruturamos ambientes digitais de alta disponibilidade, com foco em segurança, escalabilidade e governança tecnológica para operações em crescimento.",
      en: "We build highly available digital environments focused on security, scalability, and technology governance for growing operations.",
    },
    "footer-headline": {
      pt: "Transforme suas ideias em resultados impactantes",
      en: "Turn your ideas into impactful results",
    },
    "footer-nav-heading": { pt: "Navegação", en: "Navigation" },
    "footer-contact-heading": { pt: "Contato", en: "Contact" },
    "footer-location": { pt: "Ijuí - RS, Brasil", en: "Ijuí - RS, Brazil" },
    "footer-whatsapp-cta": {
      pt: "Fale com a gente por whatsapp",
      en: "Chat with us on WhatsApp",
    },
    "footer-chat-now": { pt: "Falar agora", en: "Chat now" },
    "img-instagram-alt": {
      pt: "Instagram Grupo AG",
      en: "Instagram Grupo AG",
    },
    "img-whatsapp-alt": {
      pt: "WhatsApp Grupo AG",
      en: "WhatsApp Grupo AG",
    },
    "img-dashboard-alt": {
      pt: "Dashboard AG Barber PRO",
      en: "Dashboard AG Barber PRO",
    },
  };

  let currentLang = "pt";

  function applyLanguage(lang) {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";

    if (translations["meta-title"]) {
      document.title = translations["meta-title"][lang];
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations["meta-description"]) {
      metaDesc.setAttribute("content", translations["meta-description"][lang]);
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && translations[key]?.[lang] !== undefined) {
        el.textContent = translations[key][lang];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && translations[key]?.[lang] !== undefined) {
        el.setAttribute("aria-label", translations[key][lang]);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && translations[key]?.[lang] !== undefined) {
        el.setAttribute("alt", translations[key][lang]);
      }
    });
  }

  function updateLanguageToggleUI() {
    const toggle = document.getElementById("languageToggle");
    const thumb = document.getElementById("languageThumb");
    if (!toggle || !thumb) return;

    if (currentLang === "en") {
      thumb.classList.add("translate-x-7");
      thumb.textContent = "EN";
      toggle.classList.remove("bg-gray-700", "hover:bg-gray-600");
      toggle.classList.add("bg-[#3CA2A2]", "hover:opacity-90");
    } else {
      thumb.classList.remove("translate-x-7");
      thumb.textContent = "PT";
      toggle.classList.remove("bg-[#3CA2A2]", "hover:opacity-90");
      toggle.classList.add("bg-gray-700", "hover:bg-gray-600");
    }

    toggle.setAttribute("aria-label", translations["aria-switch-lang"][currentLang]);
  }

  function toggleLanguage() {
    currentLang = currentLang === "pt" ? "en" : "pt";
    applyLanguage(currentLang);
    updateLanguageToggleUI();
  }

  window.toggleLanguage = toggleLanguage;

  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", (event) => {
      event.preventDefault();
      toggleLanguage();
    });
  }

  applyLanguage(currentLang);
  updateLanguageToggleUI();

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  const marquee = document.getElementById("marquee");
  let marqueeOffset = 0;
  let marqueeWidth = 0;

  function updateMarquee() {
    if (!marquee) return;
    marqueeOffset -= 0.5;
    if (Math.abs(marqueeOffset) >= marqueeWidth / 2) {
      marqueeOffset = 0;
    }
    marquee.style.transform = `translate3d(${marqueeOffset}px, 0, 0)`;
    window.requestAnimationFrame(updateMarquee);
  }

  if (marquee) {
    marqueeWidth = marquee.scrollWidth;
    window.requestAnimationFrame(updateMarquee);
    window.addEventListener("resize", () => {
      marqueeWidth = marquee.scrollWidth;
    });
  }
})();
