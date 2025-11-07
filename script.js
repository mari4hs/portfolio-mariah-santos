// ===== CONFIGURAÇÕES E DADOS =====
const CONFIG = {
  interactiveSkills: [
    {
      key: "html",
      name: { pt: "HTML/CSS", en: "HTML/CSS" },
      description: {
        pt: "Estruturação e estilização de páginas web responsivas",
        en: "Structuring and styling responsive web pages"
      },
    },
    {
      key: "js",
      name: { pt: "JavaScript", en: "JavaScript" },
      description: {
        pt: "Programação front-end para interatividade e dinamismo",
        en: "Front-end programming for interactivity and dynamism"
      },
    },
    {
      key: "react",
      name: { pt: "React", en: "React" },
      description: {
        pt: "Desenvolvimento de interfaces componentizadas e reativas",
        en: "Development of componentized and reactive interfaces"
      },
    },
    {
      key: "apis",
      name: { pt: "APIs", en: "APIs" },
      description: {
        pt: "Consumo de APIs RESTful com Fetch API e Axios para dados dinâmicos",
        en: "Consumption of RESTful APIs with Fetch API and Axios for dynamic data"
      },
    },
    {
      key: "uxui",
      name: { pt: "UX/UI Design", en: "UX/UI Design" },
      description: {
        pt: "Criação de interfaces intuitivas e experiências usuário",
        en: "Creating intuitive interfaces and user experiences"
      },
    },
    {
      key: "ts",
      name: { pt: "TypeScript", en: "TypeScript" },
      description: {
        pt: "JavaScript tipado para maior confiabilidade no código",
        en: "Typed JavaScript for greater code reliability"
      },
    },
    {
      key: "git",
      name: { pt: "Git & GitHub", en: "Git & GitHub" },
      description: {
        pt: "Controle de versão e colaboração em projetos",
        en: "Version control and project collaboration"
      },
    },
  ],

  skills: [
    {
      icon: "fas fa-code",
      title: { pt: "Desenvolvimento Front-end", en: "Front-end Development" },
      description: {
        pt: "Desenvolvimento de interfaces modernas e responsivas usando as melhores práticas do mercado.",
        en: "Development of modern and responsive interfaces using industry best practices."
      },
      level: 85,
      color: "#7c3aed",
    },
    {
      icon: "fas fa-gamepad",
      title: { pt: "Desenvolvimento de Jogos", en: "Game Development" },
      description: {
        pt: "Criação de jogos interativos e experiências gamificadas usando tecnologias web.",
        en: "Creation of interactive games and gamified experiences using web technologies."
      },
      level: 70,
      color: "#ec4899",
    },
    {
      icon: "fas fa-palette",
      title: { pt: "UX/UI Design", en: "UX/UI Design" },
      description: {
        pt: "Design de interfaces intuitivas e agradáveis com foco na experiência do usuário.",
        en: "Design of intuitive and pleasant interfaces with focus on user experience."
      },
      level: 75,
      color: "#10b981",
    },
    {
      icon: "fas fa-mobile-alt",
      title: { pt: "Design Responsivo", en: "Responsive Design" },
      description: {
        pt: "Criação de layouts que se adaptam perfeitamente a qualquer dispositivo.",
        en: "Creation of layouts that adapt perfectly to any device."
      },
      level: 90,
      color: "#3b82f6",
    },
  ],

  projects: [
    {
      title: {
        pt: "Palettor - Intelligent Palette Extractor",
        en: "Palettor - Intelligent Palette Extractor"
      },
      description: {
        pt: "Ferramenta intuitiva para geração de paletas e teste de contraste. Ideal para desenvolvedores e designers que buscam harmonia visual e acessibilidade.",
        en: "Intuitive tool for palette generation and contrast testing. Ideal for developers and designers seeking visual harmony and accessibility."
      },
      category: "web",
      tags: {
        pt: ["HTML5", "CSS3", "JavaScript ES6+", "React", "TypeScript", "UX/UI"],
        en: ["HTML5", "CSS3", "JavaScript ES6+", "React", "TypeScript", "UX/UI"]
      },
      image: "img/palettor-preview.png",
      fallbackIcon: "fas fa-palette",
      demoLink: "https://mari4hs.github.io/palettor/",
      codeLink: "https://github.com/mari4hs/palettor",
      inDevelopment: false
    },
    {
      title: {
        pt: "Pink-Byte - Tema para VS Code",
        en: "Pink-Byte - VS Code Theme"
      },
      description: {
        pt: "Tema de cores suaves e delicadas para Visual Studio Code, com inspirações em tons de rosa, lilás e lavanda, feito para proporcionar uma experiência de codificação agradável.",
        en: "Soft and delicate color theme for Visual Studio Code, inspired by shades of pink, lilac and lavender, designed to provide a pleasant coding experience."
      },
      category: "vscode",
      tags: {
        pt: ["JSON Configuration", "VS Code Theme API", "Design & UX", "Token Colorization", "JavaScript & TypeScript"],
        en: ["JSON Configuration", "VS Code Theme API", "Design & UX", "Token Colorization", "JavaScript & TypeScript"]
      },
      image: "img/pinkbyte-preview.png",
      fallbackIcon: "fas fa-code",
      demoLink: "https://marketplace.visualstudio.com/items?itemName=mariahsantos.pink-byte",
      codeLink: "https://github.com/mari4hs/Pink-Byte-Theme-Color-VsCode.",
      inDevelopment: false
    },
    {
      title: {
        pt: "HarmonyStream - Sua Música, Sua Emoção",
        en: "HarmonyStream - Your Music, Your Emotion"
      },
      description: {
        pt: "Landing page moderna de streaming musical com design responsivo e sistema de tradução multilíngue.",
        en: "Modern music streaming landing page with responsive design and multilingual translation system."
      },
      category: "web",
      tags: {
        pt: ["HTML5 & CSS3", "TypeScript", "React", "JavaScript ES6+", "UX/UI", "JSON"],
        en: ["HTML5 & CSS3", "TypeScript", "React", "JavaScript ES6+", "UX/UI", "JSON"]
      },
      image: "img/harmonystream-preview.png",
      fallbackIcon: "fas fa-music",
      demoLink: "https://mari4hs.github.io/harmonystream/",
      codeLink: "https://github.com/mari4hs/harmonystream",
      inDevelopment: false
    },
    {
      title: {
        pt: "Cosmic Cells - Clone Agar.io",
        en: "Cosmic Cells - Agar.io Clone"
      },
      description: {
        pt: "Jogo inspirado em Agar.io com tema espacial e partículas animadas onde as células flutuam no vácuo sideral em busca de energia e domínio.",
        en: "Agar.io inspired game with space theme and animated particles where cells float in the vacuum of space in search of energy and dominance."
      },
      category: "games",
      tags: {
        pt: ["HTML5", "CSS3", "JavaScript ES6+", "Web APIs", "Game Development"],
        en: ["HTML5", "CSS3", "JavaScript ES6+", "Web APIs", "Game Development"]
      },
      image: "img/cosmiccells-preview.png",
      fallbackIcon: "fas fa-gamepad",
      demoLink: "#",
      codeLink: "#",
      inDevelopment: true
    }
  ],

  cvFiles: {
    pt: "curriculo-mariah-santos-pt.pdf",
    en: "curriculo-mariah-santos-en.pdf"
  },

  translations: {
    pt: {
      loadingPortfolio: "Carregando Portfólio...",
      nav: {
        home: "Início",
        about: "Sobre Mim",
        skills: "Habilidades",
        projects: "Projetos",
        contact: "Contato",
      },
      hero: {
        title: "Mariah Santos",
        subtitle: "Desenvolvedora Front-End",
        description: "Transformando criatividade em experiências digitais interativas e memoráveis",
        buttonProjects: "Ver Projetos",
        buttonDownloadCV: "Baixar CV",
        cvModalTitle: "Baixar Currículo",
        cvModalDescription: "Escolha o idioma do currículo:",
        cvOptionPT: "Português (Brasil)",
        cvOptionEN: "Inglês",
        cvDownload: "Baixar",
        cvCancel: "Cancelar"
      },
      about: {
        title: "Sobre Mim",
        story1: "Olá! Me chamo Mariah Santos, atualmente sou estudante de Engenharia de Software pela Universidade Estácio de Sá e encontrei no desenvolvimento front-end a forma perfeita de unir duas paixões: criatividade e tecnologia.",
        story2: "Minha história com esse universo começou de forma natural: Desde muito nova administrei fã-clubes em redes sociais como Instagram, Facebook e YouTube, onde era responsável por criar artes, layouts, curiosidades e até vídeos para artistas que admiro. Essas experiências me despertaram o interesse por interfaces visuais e coincidentemente me levaram ao mundo do desenvolvimento.",
        story3: "Hoje, atuo com HTML5, CSS3, JavaScript(ES6+), React, APIs e UX&UI Design, além de estar evoluindo meus conhecimentos em TypeScript. Meu principal objetivo é desenvolver interfaces que sejam não apenas funcionais, mas também envolventes e impactantes, transformando ideias em experiências digitais que conectam pessoas.",
        skillsTitle: "Minhas Habilidades",
        skillsDescription: "Passe o mouse sobre uma habilidade para ver detalhes",
      },
      skills: {
        title: "Habilidades Técnicas",
      },
      projects: {
        title: "Meus Projetos",
        filterAll: "Todos",
        filterWeb: "Web",
        filterGames: "Jogos",
        filterVscode: "VS Code",
        demo: "Demo",
        code: "Código",
        comingSoon: "Em Breve",
        inDevelopment: "Em Desenvolvimento"
      },
      contact: {
        title: "Entre em Contato",
        whatsapp: "Entrar em contato via WhatsApp",
        formName: "Seu Nome",
        formEmail: "Seu E-mail",
        formMessage: "Sua Mensagem",
        formSubmit: "Enviar Mensagem",
      },
      footer: {
        copyright: "© 2025 Mariah Santos.",
      },
    },
    en: {
      loadingPortfolio: "Loading Portfolio...",
      nav: {
        home: "Home",
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        title: "Mariah Santos",
        subtitle: "Front-End Developer",
        description: "Transforming creativity into interactive and memorable digital experiences",
        buttonProjects: "View Projects",
        buttonDownloadCV: "Download CV",
        cvModalTitle: "Download Resume",
        cvModalDescription: "Choose the resume language:",
        cvOptionPT: "Portuguese (Brazil)",
        cvOptionEN: "English",
        cvDownload: "Download",
        cvCancel: "Cancel"
      },
      about: {
        title: "About Me",
        story1: "Hello! My name is Mariah Santos, I am currently a Software Engineering student at Estácio de Sá University and I found in front-end development the perfect way to combine two passions: creativity and technology.",
        story2: "My story with this universe started naturally: Since I was very young, I managed fan clubs on social media like Instagram, Facebook and YouTube, where I was responsible for creating arts, layouts, curiosities and even videos for artists I admire. These experiences awakened my interest in visual interfaces and coincidentally led me to the world of development.",
        story3: "Today, I work with HTML5, CSS3, JavaScript(ES6+), React, APIs and UX&UI Design, in addition to evolving my knowledge in TypeScript. My main goal is to develop interfaces that are not only functional, but also engaging and impactful, transforming ideas into digital experiences that connect people.",
        skillsTitle: "My Skills",
        skillsDescription: "Hover over a skill to see details",
      },
      skills: {
        title: "Technical Skills",
      },
      projects: {
        title: "My Projects",
        filterAll: "All",
        filterWeb: "Web",
        filterGames: "Games",
        filterVscode: "VS Code",
        demo: "Demo",
        code: "Code",
        comingSoon: "Coming Soon",
        inDevelopment: "In Development"
      },
      contact: {
        title: "Get in Touch",
        whatsapp: "Contact via WhatsApp",
        formName: "Your Name",
        formEmail: "Your Email",
        formMessage: "Your Message",
        formSubmit: "Send Message",
      },
      footer: {
        copyright: "© 2025 Mariah Santos.",
      },
    },
  },
};

// ===== VARIÁVEIS GLOBAIS =====
let currentLanguage = "pt";
let currentSection = "hero";

// ===== INICIALIZAÇÃO DO PORTFÓLIO =====
document.addEventListener("DOMContentLoaded", function () {
  initializePortfolio();
});

function initializePortfolio() {
  simulateLoading();
}

function simulateLoading() {
  const loadingBar = document.querySelector(".loading-bar");
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
          loadingScreen.classList.add("fade-out");
          setTimeout(() => {
            loadingScreen.style.display = "none";

            // Mostrar conteúdo principal
            const header = document.querySelector("header");
            const main = document.querySelector("main");
            const footer = document.querySelector("footer");

            if (header) header.style.display = "block";
            if (main) main.style.display = "block";
            if (footer) footer.style.display = "block";

            // Inicializar componentes após carregamento
            setTimeout(() => {
              initializeComponents();
              initializeEventListeners();
              initializeAnimations();
            }, 100);
          }, 500);
        }
      }, 500);
    } else {
      width += Math.random() * 20;
      if (width > 100) width = 100;
      if (loadingBar) {
        loadingBar.style.width = width + "%";
      }
    }
  }, 200);
}

function initializeComponents() {
  console.log("Inicializando componentes...");
  renderSkills();
  renderProjects();
  setupNavigation();
  setupTheme();
  setupLanguage();
  setupInteractiveSkills();
  setupCVDownload();
}

function initializeEventListeners() {
  // Navegação para projetos
  const verProjetosBtn = document.querySelector('.hero-buttons a[href="#projects"]');
  if (verProjetosBtn) {
    verProjetosBtn.addEventListener("click", function (e) {
      e.preventDefault();
      navigateToSection("projects");
    });
  }

  // Botão voltar ao topo
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      navigateToSection("hero");
    });
  }

  // Links de navegação
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = this.getAttribute("href").substring(1);
      navigateToSection(targetSection);
    });
  });

  // Navegação horizontal
  const prevBtn = document.querySelector(".nav-arrow-horizontal.prev");
  const nextBtn = document.querySelector(".nav-arrow-horizontal.next");

  if (prevBtn) {
    prevBtn.addEventListener("click", navigateToPrevSection);
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", navigateToNextSection);
  }

  // Filtros de projetos
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      filterProjects(filter);

      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Formulário de contato
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      handleContactForm();
    });
  }

  // Tema
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Idioma
  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      switchLanguage(lang);
    });
  });

  // Scroll
  window.addEventListener("scroll", toggleBackToTop);

  // Menu mobile
  const hamburger = document.querySelector(".hamburger");
  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  // Fechar menu mobile ao clicar em links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".skill-card, .project-card, .contact-item").forEach((el) => {
    observer.observe(el);
  });

  animateSkillBars();
}

// ===== SISTEMA DE DOWNLOAD DE CURRÍCULO =====
function setupCVDownload() {
  const downloadBtn = document.getElementById('download-cv-btn');

  if (downloadBtn) {
    downloadBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showCVModal();
    });
  }
}

function showCVModal() {
  // Fechar modal existente se houver
  const existingModal = document.querySelector('.cv-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Criar modal
  const modal = document.createElement('div');
  modal.className = 'cv-modal';
  modal.innerHTML = `
    <div class="cv-modal-content">
      <div class="cv-modal-header">
        <h3 data-translate="hero.cvModalTitle">Baixar Currículo</h3>
        <button class="cv-modal-close">&times;</button>
      </div>
      <div class="cv-modal-body">
        <p data-translate="hero.cvModalDescription">Escolha o idioma do currículo:</p>
        <div class="cv-options">
          <label class="cv-option">
            <input type="radio" name="cvLanguage" value="pt" checked>
            <span data-translate="hero.cvOptionPT">Português (Brasil)</span>
          </label>
          <label class="cv-option">
            <input type="radio" name="cvLanguage" value="en">
            <span data-translate="hero.cvOptionEN">Inglês</span>
          </label>
        </div>
      </div>
      <div class="cv-modal-footer">
        <button class="cv-btn cv-btn-cancel" data-translate="hero.cvCancel">Cancelar</button>
        <button class="cv-btn cv-btn-download" data-translate="hero.cvDownload">Baixar</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Aplicar traduções imediatamente
  applyModalTranslations(currentLanguage);

  // Adicionar eventos
  const closeBtn = modal.querySelector('.cv-modal-close');
  const cancelBtn = modal.querySelector('.cv-btn-cancel');
  const downloadBtn = modal.querySelector('.cv-btn-download');

  const closeModal = () => {
    modal.classList.add('fade-out');
    setTimeout(() => {
      if (modal.parentNode) {
        modal.remove();
      }
    }, 300);
  };

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);

  downloadBtn.addEventListener('click', () => {
    const selectedLang = modal.querySelector('input[name="cvLanguage"]:checked').value;
    downloadCV(selectedLang);
    closeModal();
  });

  // Fechar modal ao clicar fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

function applyModalTranslations(lang) {
  const translations = CONFIG.translations[lang];
  const modal = document.querySelector('.cv-modal');

  if (!modal) return;

  const elements = modal.querySelectorAll('[data-translate]');
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    const value = getNestedValue(translations, key);
    if (value) element.textContent = value;
  });
}

function downloadCV(lang) {
  const cvFile = CONFIG.cvFiles[lang];
  if (!cvFile) {
    console.error('Arquivo CV não encontrado para o idioma:', lang);
    return;
  }

  const link = document.createElement('a');
  link.href = cvFile;
  link.download = cvFile;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// ===== SISTEMA DE HABILIDADES INTERATIVAS =====
function setupInteractiveSkills() {
  const interactiveSkills = document.getElementById("interactive-skills");
  const skillDescription = document.getElementById("skill-description");

  if (!interactiveSkills || !skillDescription) return;

  interactiveSkills.innerHTML = "";

  const defaultText = CONFIG.translations[currentLanguage].about.skillsDescription;

  CONFIG.interactiveSkills.forEach((skill) => {
    const bubble = document.createElement("div");
    bubble.className = "skill-bubble";
    bubble.textContent = skill.name[currentLanguage];
    bubble.setAttribute("data-skill", skill.key);

    bubble.addEventListener("mouseenter", () => {
      skillDescription.innerHTML = `<p>${skill.description[currentLanguage]}</p>`;
    });

    bubble.addEventListener("mouseleave", () => {
      skillDescription.innerHTML = `<p>${defaultText}</p>`;
    });

    bubble.addEventListener("click", (e) => {
      e.stopPropagation();
      const currentSkill = skill.key;

      document.querySelectorAll('.skill-bubble').forEach(b => {
        b.classList.remove('active');
      });

      bubble.classList.add('active');
      skillDescription.innerHTML = `<p>${skill.description[currentLanguage]}</p>`;
    });

    interactiveSkills.appendChild(bubble);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.skill-bubble') && !e.target.closest('.skill-description')) {
      document.querySelectorAll('.skill-bubble').forEach(b => {
        b.classList.remove('active');
      });
      skillDescription.innerHTML = `<p>${defaultText}</p>`;
    }
  });

  skillDescription.innerHTML = `<p>${defaultText}</p>`;
}

// ===== SISTEMA DE NAVEGAÇÃO ENTRE SEÇÕES =====
function setupNavigation() {
  navigateToSection("hero");
}

function navigateToSection(sectionId) {
  // Esconder todas as seções
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.remove("active");
  });

  // Remover active de todos os links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    // Mostrar seção alvo
    targetSection.classList.add("active");

    // Ativar link correspondente
    const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (correspondingLink) {
      correspondingLink.classList.add("active");
    }

    currentSection = sectionId;

    // Scroll suave
    setTimeout(() => {
      const sectionPosition = targetSection.offsetTop - 80;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }, 100);
  }
}

function navigateToNextSection() {
  const sections = ["hero", "about", "skills", "projects", "contact"];
  const currentIndex = sections.indexOf(currentSection);
  const nextIndex = (currentIndex + 1) % sections.length;
  navigateToSection(sections[nextIndex]);
}

function navigateToPrevSection() {
  const sections = ["hero", "about", "skills", "projects", "contact"];
  const currentIndex = sections.indexOf(currentSection);
  const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
  navigateToSection(sections[prevIndex]);
}

// ===== SISTEMA DE TEMA (CLARO/ESCURO) =====
function setupTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.querySelector("#theme-toggle i").className = "fas fa-sun";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  const isDark = document.body.classList.contains("dark-theme");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  const themeIcon = document.querySelector("#theme-toggle i");
  if (themeIcon) {
    themeIcon.className = isDark ? "fas fa-sun" : "fas fa-moon";
  }
}

// ===== SISTEMA DE INTERNACIONALIZAÇÃO =====
function setupLanguage() {
  const savedLang = localStorage.getItem("language") || "pt";
  switchLanguage(savedLang);
}

function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  document.querySelectorAll(".language-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    }
  });

  applyTranslations(lang);
}

function applyTranslations(lang) {
  const translations = CONFIG.translations[lang];

  // Aplicar traduções para elementos com data-translate
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    const value = getNestedValue(translations, key);
    if (value) element.textContent = value;
  });

  // Aplicar traduções para placeholders
  document.querySelectorAll("[data-translate-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder");
    const value = getNestedValue(translations, key);
    if (value) element.placeholder = value;
  });

  // Atualizar componentes dinâmicos
  setupInteractiveSkills();
  renderSkills();
  renderProjects();

  // Atualizar modal se estiver aberto
  applyModalTranslations(lang);
}

function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => current && current[key], obj);
}

// ===== SISTEMA DE HABILIDADES TÉCNICAS =====
function renderSkills() {
  const skillsContainer = document.querySelector(".skills-container");
  if (!skillsContainer) return;

  skillsContainer.innerHTML = "";

  CONFIG.skills.forEach((skill) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card";
    skillCard.innerHTML = `
      <h3><i class="${skill.icon}"></i> ${skill.title[currentLanguage]}</h3>
      <p>${skill.description[currentLanguage]}</p>
      <div class="skill-level">
        <div class="skill-level-bar" style="--target-width: ${skill.level}%"></div>
      </div>
    `;
    skillsContainer.appendChild(skillCard);
  });
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-level-bar");
  skillBars.forEach((bar) => {
    const width = bar.style.getPropertyValue("--target-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 500);
  });
}

// ===== SISTEMA DE PROJETOS COM IMAGENS =====
function renderProjects() {
  const projectsGrid = document.querySelector(".projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  const translations = CONFIG.translations[currentLanguage].projects;

  CONFIG.projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = `project-card ${project.category}`;

    const isInProgress = project.inDevelopment;
    const demoText = isInProgress ? translations.comingSoon : translations.demo;
    const demoIcon = isInProgress ? "fas fa-clock" : "fas fa-external-link-alt";
    const demoClass = isInProgress ? "project-link disabled" : "project-link";

    const codeText = isInProgress ? translations.comingSoon : translations.code;
    const codeIcon = isInProgress ? "fas fa-clock" : "fab fa-github";
    const codeClass = isInProgress ? "project-link disabled" : "project-link";

    // Criar elemento de imagem
    const imageContainer = document.createElement('div');
    imageContainer.className = 'project-image';

    // Verificar se a imagem existe
    const img = new Image();
    img.onload = function () {
      imageContainer.innerHTML = `
        <img src="${project.image}" alt="${project.title[currentLanguage]}" class="project-preview">
      `;
    };
    img.onerror = function () {
      imageContainer.innerHTML = `
        <div class="project-fallback" style="display: flex;">
          <i class="${project.fallbackIcon}"></i>
        </div>
      `;
    };
    img.src = project.image;

    const developmentBadge = project.inDevelopment ?
      `<div class="development-badge">${translations.inDevelopment}</div>` : '';

    projectCard.innerHTML = `
      ${developmentBadge}
      <div class="project-content">
        <h3>${project.title[currentLanguage]}</h3>
        <p>${project.description[currentLanguage]}</p>
        <div class="project-tags">
          ${project.tags[currentLanguage].map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${project.demoLink}" target="_blank" class="${demoClass}">
            <i class="${demoIcon}"></i> ${demoText}
          </a>
          <a href="${project.codeLink}" target="_blank" class="${codeClass}">
            <i class="${codeIcon}"></i> ${codeText}
          </a>
        </div>
      </div>
    `;

    projectCard.insertBefore(imageContainer, projectCard.firstChild);
    projectsGrid.appendChild(projectCard);
  });
}

function filterProjects(category) {
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, 100);
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      setTimeout(() => {
        card.style.display = "none";
      }, 300);
    }
  });
}

// ===== SISTEMA DE FORMULÁRIO DE CONTATO =====
function handleContactForm() {
  const form = document.getElementById("contact-form");
  const button = form.querySelector('button[type="submit"]');
  const originalText = button.textContent;

  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + (currentLanguage === 'pt' ? 'Enviando...' : 'Sending...');
  button.disabled = true;

  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-check"></i> ' + (currentLanguage === 'pt' ? 'Mensagem Enviada!' : 'Message Sent!');
    button.style.background = "#10b981";

    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
      button.style.background = "";
      form.reset();
    }, 2000);
  }, 1500);
}

// ===== FUNÇÕES UTILITÁRIAS =====
function toggleBackToTop() {
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }
}

function toggleMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if (hamburger && navMenu) {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }
}

function closeMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  if (hamburger && navMenu) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
}

// ===== SISTEMA DE PARTÍCULAS DECORATIVAS =====
function createParticles() {
  const particlesContainer = document.createElement("div");
  particlesContainer.className = "particles";
  document.body.appendChild(particlesContainer);

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const size = Math.random() * 20 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;

    particlesContainer.appendChild(particle);
  }
}

window.addEventListener("load", createParticles);