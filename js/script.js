const guatemalaLocations = {
    "Alta Verapaz": ["Cobán", "Santa Cruz Verapaz", "San Cristóbal Verapaz", "Tactic", "Tamahú", "Tucurú", "Panzós", "Senahú", "San Pedro Carchá", "San Juan Chamelco", "Lanquín", "Cahabón", "Chahal", "Fray Bartolomé de las Casas", "Santa Catalina La Tinta", "Raxruhá", "La Tinta"],
    "Baja Verapaz": ["Salamá", "San Miguel Chicaj", "Rabinal", "Cubulco", "Granados", "El Chol", "San Jerónimo", "Purulhá"],
    "Chimaltenango": ["Chimaltenango", "San José Poaquil", "San Martín Jilotepeque", "Comalapa", "Santa Apolonia", "Tecpán Guatemala", "Patzún", "Pochuta", "Patzicía", "Santa Cruz Balanyá", "Acatenango", "Yepocapa", "San Andrés Itzapa", "Parramos", "Zaragoza", "El Tejar"],
    "Chiquimula": ["Chiquimula", "San José La Arada", "San Juan Ermita", "Jocotán", "Camotán", "Olopa", "Esquipulas", "Concepción Las Minas", "Quetzaltepeque", "San Jacinto", "Ipala"],
    "El Progreso": ["Guastatoya", "Morazán", "San Agustín Acasaguastlán", "San Cristóbal Acasaguastlán", "El Jícaro", "Sansare", "Sanarate", "San Antonio La Paz"],
    "Escuintla": ["Escuintla", "Santa Lucía Cotzumalguapa", "La Democracia", "Siquinalá", "Masagua", "Tiquisate", "La Gomera", "Guanagazapa", "San José", "Iztapa", "Palín", "San Vicente Pacaya", "Nueva Concepción"],
    "Guatemala": ["Guatemala", "Santa Catarina Pinula", "San José Pinula", "San José del Golfo", "Palencia", "Chinautla", "San Pedro Ayampuc", "Mixco", "San Pedro Sacatepéquez", "San Juan Sacatepéquez", "San Raymundo", "Chuarrancho", "Fraijanes", "Amatitlán", "Villa Nueva", "Villa Canales", "Petapa"],
    "Huehuetenango": ["Huehuetenango", "Chiantla", "Malacatancito", "Cuilco", "Nentón", "San Pedro Necta", "Jacaltenango", "Soloma", "Ixtahuacán", "Santa Bárbara", "La Libertad", "La Democracia", "San Miguel Acatán", "San Rafael La Independencia", "Todos Santos Cuchumatán", "San Juan Atitán", "Santa Eulalia", "San Mateo Ixtatán", "Colotenango", "San Sebastián Huehuetenango", "Tectitán", "Concepción Huista", "San Juan Ixcoy", "San Antonio Huista", "San Sebastián Coatán", "Barillas", "Aguacatán", "San Rafael Petzal", "San Gaspar Ixchil", "Santiago Chimaltenango", "Santa Ana Huista", "Unión Cantinil"],
    "Izabal": ["Puerto Barrios", "Livingston", "El Estor", "Morales", "Los Amates"],
    "Jalapa": ["Jalapa", "San Pedro Pinula", "San Luis Jilotepeque", "San Manuel Chaparrón", "San Carlos Alzatate", "Monjas", "Mataquescuintla"],
    "Jutiapa": ["Jutiapa", "El Progreso", "Santa Catarina Mita", "Agua Blanca", "Asunción Mita", "Yupiltepeque", "Atescatempa", "Jerez", "El Adelanto", "Zapotitlán", "Comapa", "Jalpatagua", "Conguaco", "Moyuta", "Pasaco", "San José Acatempa", "Quesada"],
    "Petén": ["Flores", "San José", "San Benito", "San Andrés", "La Libertad", "San Francisco", "Santa Ana", "Dolores", "San Luis", "Sayaxché", "Melchor de Mencos", "Poptún", "Las Cruces", "El Chal"],
    "Quetzaltenango": ["Quetzaltenango", "Salcajá", "Olintepeque", "San Carlos Sija", "Sibilia", "Cabricán", "Cajolá", "San Miguel Sigüilá", "Ostuncalco", "San Mateo", "Concepción Chiquirichapa", "San Martín Sacatepéquez", "Almolonga", "Cantel", "Huitán", "Zunil", "Colomba", "San Francisco La Unión", "El Palmar", "Coatepeque", "Génova", "Flores Costa Cuca", "La Esperanza", "Palestina de Los Altos"],
    "Quiché": ["Santa Cruz del Quiché", "Chiché", "Chinique", "Zacualpa", "Chajul", "Chichicastenango", "Patzité", "San Antonio Ilotenango", "San Pedro Jocopilas", "Cunén", "San Juan Cotzal", "Joyabaj", "Nebaj", "San Andrés Sajcabajá", "Uspantán", "Sacapulas", "San Bartolomé Jocotenango", "Canillá", "Chicamán", "Ixcán", "Pachalum"],
    "Retalhuleu": ["Retalhuleu", "San Sebastián", "Santa Cruz Muluá", "San Martín Zapotitlán", "San Felipe", "San Andrés Villa Seca", "Champerico", "Nuevo San Carlos", "El Asintal"],
    "Sacatepéquez": ["Antigua Guatemala", "Jocotenango", "Pastores", "Sumpango", "Santo Domingo Xenacoj", "Santiago Sacatepéquez", "San Bartolomé Milpas Altas", "San Lucas Sacatepéquez", "Santa Lucía Milpas Altas", "Magdalena Milpas Altas", "Santa María de Jesús", "Ciudad Vieja", "San Miguel Dueñas", "Alotenango", "San Antonio Aguas Calientes", "Santa Catarina Barahona"],
    "San Marcos": ["San Marcos", "San Pedro Sacatepéquez", "San Antonio Sacatepéquez", "Comitancillo", "San Miguel Ixtahuacán", "Concepción Tutuapa", "Tacaná", "Sibinal", "Tajumulco", "Tejutla", "San Rafael Pie de la Cuesta", "Nuevo Progreso", "El Tumbador", "El Rodeo", "Malacatán", "Catarina", "Ayutla", "Ocós", "San Pablo", "El Quetzal", "La Reforma", "Pajapita", "Ixchiguán", "San José Ojetenam", "San Cristóbal Cucho", "Sipacapa", "Esquipulas Palo Gordo", "Río Blanco", "San Lorenzo", "La Blanca"],
    "Santa Rosa": ["Cuilapa", "Barberena", "Santa Rosa de Lima", "Casillas", "San Rafael Las Flores", "Oratorio", "San Juan Tecuaco", "Chiquimulilla", "Taxisco", "Santa María Ixhuatán", "Guazacapán", "Santa Cruz Naranjo", "Pueblo Nuevo Viñas", "Nueva Santa Rosa"],
    "Sololá": ["Sololá", "San José Chacayá", "Santa María Visitación", "Santa Lucía Utatlán", "Nahualá", "Santa Catarina Ixtahuacán", "Santa Clara La Laguna", "Concepción", "San Andrés Semetabaj", "Panajachel", "Santa Catarina Palopó", "San Antonio Palopó", "San Lucas Tolimán", "Santa Cruz La Laguna", "San Pablo La Laguna", "San Marcos La Laguna", "San Juan La Laguna", "San Pedro La Laguna", "Santiago Atitlán"],
    "Suchitepéquez": ["Mazatenango", "Cuyotenango", "San Francisco Zapotitlán", "San Bernardino", "San José El Idolo", "Santo Domingo Suchitepéquez", "San Lorenzo", "Samayac", "San Pablo Jocopilas", "San Antonio Suchitepéquez", "San Miguel Panán", "San Gabriel", "Chicacao", "Patulul", "Santa Bárbara", "San Juan Bautista", "Santo Tomás La Unión", "Zunilito", "Pueblo Nuevo", "Río Bravo", "San José La Máquina"],
    "Totonicapán": ["Totonicapán", "San Cristóbal Totonicapán", "San Francisco El Alto", "San Andrés Xecul", "Momostenango", "Santa María Chiquimula", "Santa Lucía La Reforma", "San Bartolo"],
    "Zacapa": ["Zacapa", "Estanzuela", "Río Hondo", "Gualán", "Teculután", "Usumatlán", "Cabañas", "San Diego", "La Unión", "Huité", "San Jorge"]
};

const productsDatabase = {
  "airpods-pro-3": {
    name: "AirPods Pro 3",
    price: 599,
    originalPrice: 1319,
    shipping: "Envío GRATIS",
    desc: "La nueva generación del sonido. Diseñados para ofrecer un audio espacial envolvente que te sitúa en el centro de la música, junto a un ajuste anatómico que se siente casi invisible.",
    evolution: "Rediseño acústico para graves más profundos, batería extendida para todo el día y ecualización adaptativa que afina la música a tus oídos en tiempo real.",
    images: ["assets/img/airpods_pro3_clean.png", "assets/img/airpods_pro3_1.webp", "assets/img/airpods_pro3_2.webp", "assets/img/airpods_pro3_3.webp", "assets/img/airpods_pro3_4.webp", "assets/img/airpods_pro3_5.webp"],
    video: "",
    features: [
      "Audio Espacial con seguimiento dinámico",
      "Ecualización Adaptativa instantánea",
      "Sensor de fuerza para control total",
      "Resistencia al sudor y al agua (IPX4)"
    ],
    inTheBox: [
      "AirPods Pro 3",
      "Estuche de carga MagSafe",
      "Almohadillas de silicona (4 tamaños)",
      "Cable de USB-C a Lightning"
    ]
  },
  "airpods-pro-2": {
    name: "AirPods Pro 2",
    price: 399,
    originalPrice: 879,
    shipping: "Envío GRATIS",
    desc: "Un rendimiento de audio asombroso. Con un procesador de siguiente nivel que impulsa una Cancelación Activa de Ruido hasta dos veces más potente, creando un santuario de silencio vayas donde vayas.",
    evolution: "El doble de cancelación de ruido que la generación anterior, Modo Ambiente adaptable y nuevos controles táctiles para ajustar el volumen con solo deslizar el dedo.",
    images: ["assets/img/airpods_pro2.png", "assets/img/pro2.jpeg", "assets/img/pro2_todo.png", "assets/img/estuche_airpods.png"],
    features: [
      "Cancelación Activa de Ruido (2x más potente)",
      "Modo Ambiente Adaptable",
      "Control táctil avanzado (Desliza para volumen)",
      "Hasta 30 horas de autonomía con su estuche"
    ],
    inTheBox: [
      "AirPods Pro 2",
      "Estuche de carga MagSafe",
      "Almohadillas de silicona (XS, S, M, L)",
      "Cable de carga USB-C"
    ]
  },
  "hk10-ultra-3": {
    name: "HK10 Ultra 3",
    price: 499,
    originalPrice: 1099,
    shipping: "Envío GRATIS",
    desc: "Diseñado para superar los límites. El HK10 Ultra 3 combina una caja ultrarresistente de aleación aeroespacial con una pantalla enorme y brillante, listo para acompañarte en tus aventuras más extremas.",
    evolution: "Procesador de doble núcleo ultrarrápido, sensores biométricos de última generación y una interfaz brutalmente fluida con animaciones a 60 cuadros por segundo.",
    images: ["assets/img/hk_10_ultra_3.png", "assets/img/hk10_1.png", "assets/img/hk10_2.png", "assets/img/hk10_3.png", "assets/img/hk10_4.png", "assets/img/hk10_5.png"],
    features: [
      "Pantalla AMOLED Retina superbrillante",
      "Caja de grado aeroespacial ultrarresistente",
      "Seguimiento avanzado de salud y oxígeno",
      "Llamadas Bluetooth de alta nitidez integradas"
    ],
    inTheBox: [
      "Smartwatch HK10 Ultra 3",
      "Correa Ocean de silicona deportiva",
      "Correa Alpine (Regalo exclusivo)",
      "Base de carga magnética rápida",
      "Manual de usuario"
    ]
  }
};

function populateMuniSelect(deptoVal, muniSelectId) {
  const muniSelect = document.getElementById(muniSelectId);
  if (!muniSelect) return;
  muniSelect.innerHTML = '<option value="" disabled selected>Municipio</option>';
  if (guatemalaLocations[deptoVal]) {
    guatemalaLocations[deptoVal].forEach(muni => {
      const option = document.createElement('option');
      option.value = muni;
      option.textContent = muni;
      muniSelect.appendChild(option);
    });
  }
}

document.addEventListener('change', (e) => {
  if (e.target.id === 'order-depto') {
    populateMuniSelect(e.target.value, 'order-muni');
  } else if (e.target.id === 'page-order-depto') {
    populateMuniSelect(e.target.value, 'page-order-muni');
  }
});

document.addEventListener('DOMContentLoaded', () => {

  // Configuración WhatsApp
  const WA_NUMBER = "50254102510"; // TCA4SHOP — +502 54102510
  const waLinks = document.querySelectorAll('.whatsapp-link');
  
  waLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const msg = encodeURIComponent(link.getAttribute('data-msg') || 'Hola!');
      window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank');
    });
  });

  // Intro Loader
  const logo = document.getElementById('intro-logo');
  const tagline = document.getElementById('intro-tagline');
  const loader = document.getElementById('intro-loader');
  
  if (logo && tagline && loader) {
    requestAnimationFrame(() => {
      logo.classList.add('show');
      tagline.classList.add('show');
    });

    setTimeout(() => {
      loader.classList.add('slide-up');
      setTimeout(() => {
        loader.style.display = 'none';
        document.body.style.overflow = 'auto';
      }, 1000);
    }, 2800);
  } else {
    document.body.style.overflow = 'auto';
  }


  // Navbar y Menu
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const bannerEl = document.getElementById('promo-banner');
    const bannerVisible = bannerEl && !bannerEl.classList.contains('hidden');
    if (bannerVisible) {
      navbar.classList.toggle('scrolled', window.scrollY > 1);
    } else {
      navbar.classList.add('scrolled');
    }
  }, { passive: true });


  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : 'auto';
  });

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  });


  // Background particles
  const canvas = document.getElementById('particles-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * -0.8 - 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(82, 183, 136, 0.3)' : 'rgba(212, 175, 55, 0.2)';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const count = window.innerWidth < 768 ? 40 : 100;
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }
    initParticles();

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }


  // Mouse Parallax
  const heroContent = document.getElementById('hero-content');
  if (heroContent) {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
      if (window.innerWidth < 768) return;
      targetX = (window.innerWidth / 2 - e.pageX) / 45; // Increased sensitivity slightly
      targetY = (window.innerHeight / 2 - e.pageY) / 45;
    });

    document.addEventListener('mouseleave', () => {
      targetX = 0;
      targetY = 0;
    });

    function smoothHeroParallax() {
      // Linear Interpolation for buttery smooth movement
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      heroContent.style.transform = `rotateY(${currentX}deg) rotateX(${-currentY}deg) translateZ(20px)`;
      requestAnimationFrame(smoothHeroParallax);
    }
    smoothHeroParallax();
  }


  // ==========================================
  // 5. BARRA DE CONFIANZA INFINITA
  // ==========================================
  const trustTrack = document.getElementById('trust-track');
  if (trustTrack) {
    const trustItems = [
      "Originales garantizados",
      "Envío en Guatemala",
      "Clientes satisfechos",
      "Respuesta inmediata",
      "Calidad Premium"
    ];
    let trustHTML = '';
    for (let i = 0; i < 8; i++) {
      trustItems.forEach(item => {
        trustHTML += `<div class="trust-item"><span>${item}</span></div>`;
      });
    }
    trustTrack.innerHTML = trustHTML;
  }


  // ==========================================
  // 6. SCROLL REVEAL OBSERVER
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  revealElements.forEach(el => revealObserver.observe(el));


  // ==========================================
  // 7. CARRUSEL DE TESTIMONIOS
  // ==========================================
  const track = document.getElementById('carousel-track');
  if (track) {
    const slides = Array.from(track.children);
    const nextBtn = document.getElementById('next-slide');
    const prevBtn = document.getElementById('prev-slide');
    const dotsContainer = document.getElementById('car-dots');
    
    let currentIndex = 0;
    let autoplayTimer;

    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(idx));
      if (dotsContainer) dotsContainer.appendChild(dot);
    });
    const dots = dotsContainer ? Array.from(dotsContainer.children) : [];

    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(d => d.classList.remove('active'));
      if (dots[currentIndex]) dots[currentIndex].classList.add('active');
    }
    function nextSlide() { currentIndex = (currentIndex + 1) % slides.length; updateCarousel(); resetAutoplay(); }
    function prevSlide() { currentIndex = (currentIndex - 1 + slides.length) % slides.length; updateCarousel(); resetAutoplay(); }
    function goToSlide(idx) { currentIndex = idx; updateCarousel(); resetAutoplay(); }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    function startAutoplay() { autoplayTimer = setInterval(nextSlide, 6000); }
    function resetAutoplay() { clearInterval(autoplayTimer); startAutoplay(); }
    startAutoplay();

    let touchStartX = 0, touchEndX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; clearInterval(autoplayTimer); }, { passive: true });
    track.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
      startAutoplay();
    }, { passive: true });
  }


  // ==========================================
  // 8. HOJAS TROPICALES — CAMBIO POR SECCIÓN
  // ==========================================
  // Las hojas son SVGs ilustrados (monstera + palma) posicionados fijos.
  // El color cambia suavemente via clase en body → CSS custom properties.

  const LEAF_CLASSES = ['sec-productos', 'sec-beneficios', 'sec-testimonios', 'sec-cta'];

  function setLeafSection(cls) {
    document.body.classList.remove(...LEAF_CLASSES);
    if (cls) document.body.classList.add(cls);
  }

  const leafSections = [
    { el: document.getElementById('inicio'),      cls: null               },
    { el: document.getElementById('productos'),   cls: 'sec-productos'    },
    { el: document.getElementById('beneficios'),  cls: 'sec-beneficios'   },
    { el: document.getElementById('testimonios'), cls: 'sec-testimonios'  },
  ];

  const existingSections = leafSections.filter(s => s.el !== null);
  if (existingSections.length > 0) {
    const leafIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const found = leafSections.find(s => s.el === entry.target);
          if (found !== undefined) setLeafSection(found.cls);
        }
      });
    }, { threshold: 0.3 });

    existingSections.forEach(({ el }) => { leafIO.observe(el); });

    // CTA: detectar por scroll final
    window.addEventListener('scroll', () => {
      const ratio = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (ratio > 0.88) setLeafSection('sec-cta');
    }, { passive: true });
  }


  // ==========================================
  // 9. CARRITO DE COMPRAS (SHOPIFY STYLE)
  // ==========================================
  
  let cart = JSON.parse(localStorage.getItem('tca_cart')) || [];
  
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalPrice = document.getElementById('cart-total-price');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const cartWhatsappCheckout = document.getElementById('cart-whatsapp-checkout');
  
  // Abrir y Cerrar Carrito
  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
  }
  
  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  
  const emptyShopBtn = document.getElementById('cart-empty-shop-btn');
  if (emptyShopBtn) {
    emptyShopBtn.addEventListener('click', closeCart);
  }

  // Guardar en LocalStorage
  function saveCart() {
    localStorage.setItem('tca_cart', JSON.stringify(cart));
  }
  
  // Renderizar Carrito
  function renderCart() {
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p>Tu carrito está vacío</p>
          <button class="btn btn-primary btn-sm" id="cart-continue-shopping">Explorar productos</button>
        </div>
      `;
      const contBtn = document.getElementById('cart-continue-shopping');
      if (contBtn) contBtn.addEventListener('click', closeCart);
      if (cartTotalPrice) cartTotalPrice.textContent = "Q0.00";
      if (cartBadgeCount) {
        cartBadgeCount.textContent = "0";
        cartBadgeCount.style.display = "none";
      }
      return;
    }
    
    if (cartBadgeCount) cartBadgeCount.style.display = "flex";
    
    let html = '';
    let total = 0;
    let itemCount = 0;
    
    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
      itemCount += item.quantity;
      
      html += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.img}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-price">Q${item.price.toLocaleString()}</div>
            <div class="cart-item-qty-actions">
              <button class="qty-btn dec-qty" data-id="${item.id}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn inc-qty" data-id="${item.id}">+</button>
            </div>
          </div>
          <button class="cart-item-remove remove-item-btn" data-id="${item.id}" aria-label="Eliminar artículo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `;
    });
    
    cartItemsContainer.innerHTML = html;
    if (cartTotalPrice) cartTotalPrice.textContent = `Q${total.toLocaleString()}`;
    if (cartBadgeCount) cartBadgeCount.textContent = itemCount;
    
    // Listeners para botones del carrito
    document.querySelectorAll('.dec-qty').forEach(btn => {
      btn.addEventListener('click', () => changeQuantity(btn.getAttribute('data-id'), -1));
    });
    document.querySelectorAll('.inc-qty').forEach(btn => {
      btn.addEventListener('click', () => changeQuantity(btn.getAttribute('data-id'), 1));
    });
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
      btn.addEventListener('click', () => removeItem(btn.getAttribute('data-id')));
    });
  }
  
  // Agregar al carrito
  function addToCart(id, name, price, img) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, name, price: parseInt(price), img, quantity: 1 });
    }
    saveCart();
    renderCart();
    openCart();
  }
  
  // Cambiar cantidad
  function changeQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
      }
      saveCart();
      renderCart();
    }
  }
  
  // Eliminar item
  function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    saveCart();
    renderCart();
  }
  
  // Checkout por WhatsApp
  if (cartWhatsappCheckout) {
    cartWhatsappCheckout.addEventListener('click', () => {
      if (cart.length === 0) return;
      
      let message = `Hola TCA4SHOP. Quisiera realizar el siguiente pedido por favor:\n\n`;
      let total = 0;
      
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `*${item.name}*\n   Cant: ${item.quantity} x Q${item.price.toLocaleString()} = *Q${itemTotal.toLocaleString()}*\n`;
      });
      
      message += `\n*Total Estimado: Q${total.toLocaleString()}*\n\n¿Me pueden confirmar disponibilidad e indicarme los pasos para el envío en Guatemala? Muchas gracias!`;
      
      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodedMsg}`, '_blank');
    });
  }
  
  // Bind botones "Añadir al carrito" de las tarjetas de producto
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.target.closest('.product-card');
      if (card) {
        const id = card.getAttribute('data-id');
        const name = card.getAttribute('data-name');
        const price = card.getAttribute('data-price');
        const img = card.getAttribute('data-img');
        addToCart(id, name, price, img);
      }
    });
  });
  
  // Renderizar al cargar
  renderCart();


  // ==========================================
  // 10. SISTEMA DE RESEÑAS INTERACTIVAS
  // ==========================================
  
  const defaultReviews = [
    {
      productId: "airpods-pro-3",
      name: "Alejandro M.",
      rating: 5,
      comment: "Llegó perfectamente, muy buena atención. ¡Los AirPods Pro 3 suenan de otro mundo, la cancelación de ruido es una locura!",
      date: "Hace 2 días"
    },
    {
      productId: "airpods-pro-3",
      name: "Carlos R.",
      rating: 5,
      comment: "Excelente calidad de audio espacial y muy cómodos.",
      date: "Hace 1 semana"
    },
    {
      productId: "airpods-pro-3",
      name: "María F.",
      rating: 4,
      comment: "Excelente servicio de asesoramiento por WhatsApp, me ayudaron paso a paso con la configuración. El sonido es espectacular.",
      date: "Hace 2 semanas"
    }
  ];
  
  let reviews = [...defaultReviews];
  
  const reviewsList = document.getElementById('reviews-list');
  const reviewsCountBadge = document.getElementById('reviews-count-badge');
  const averageScoreText = document.getElementById('average-score-text');
  const averageStarsRender = document.getElementById('average-stars-render');
  
  // Renderizar la lista de reseñas
  function renderReviews() {
    if (!reviewsList) return;
    
    let html = '';
    reviews.forEach(review => {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += i <= review.rating ? '★' : '☆';
      }
      
      const initial = review.name.charAt(0).toUpperCase();
      const imageHtml = review.imageUrl ? `<img src="${review.imageUrl}" class="review-img-attachment">` : '';
      
      html += `
        <div class="review-item-card reveal active">
          <div class="review-item-header">
            <div class="review-user-info">
              <div class="review-user-initial">${initial}</div>
              <div>
                <div class="review-author">${review.name}</div>
                <div class="review-stars">${starsHtml}</div>
              </div>
            </div>
            <div class="review-date">${review.date}</div>
          </div>
          <p class="review-text">"${review.comment}"</p>
          ${imageHtml}
        </div>
      `;
    });
    
    reviewsList.innerHTML = html;
  }
  
  // Calcular y actualizar el resumen (promedios y barras)
  function updateReviewsSummary() {
    if (!reviewsCountBadge) return;
    
    const count = reviews.length;
    reviewsCountBadge.textContent = count;
    
    if (count === 0) {
      averageScoreText.textContent = "0.0";
      averageStarsRender.textContent = "☆☆☆☆☆";
      return;
    }
    
    let sum = 0;
    let counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    reviews.forEach(r => {
      sum += r.rating;
      if (counts[r.rating] !== undefined) counts[r.rating]++;
    });
    
    const average = (sum / count).toFixed(1);
    averageScoreText.textContent = average;
    
    // Render de estrellas promedio
    let starsHtml = '';
    const roundedAvg = Math.round(average);
    for (let i = 1; i <= 5; i++) {
      starsHtml += i <= roundedAvg ? '★' : '☆';
    }
    averageStarsRender.textContent = starsHtml;
    
    // Actualizar barras porcentuales (agrupamos 1 y 2 con 3 para simplificar, pero mostramos 5, 4 y 3)
    const pct5 = Math.round((counts[5] / count) * 100);
    const pct4 = Math.round((counts[4] / count) * 100);
    const pct3 = Math.round(((counts[3] + counts[2] + counts[1]) / count) * 100);
    
    const bar5 = document.getElementById('bar-fill-5');
    const pctLabel5 = document.getElementById('bar-pct-5');
    if (bar5 && pctLabel5) { bar5.style.width = `${pct5}%`; pctLabel5.textContent = `${pct5}%`; }
  } // Cierra updateReviewsSummary

  // Llamada inicial para poblar la pàgina de reseñas al cargar
  renderReviews();
  updateReviewsSummary();

  const wModal = document.getElementById('wholesale-modal');
  const wModalOverlay = document.getElementById('wholesale-modal-overlay');
  const wPasswordInput = document.getElementById('wholesale-password');
  const wErrorMsg = document.getElementById('wholesale-error');
  const wLink = document.querySelector('.wholesale-link'); 
  const wFooterLink = document.querySelector('.footer-wholesale-link');
  const wModalCloseBtn = document.getElementById('wholesale-modal-close');
  const wAuthForm = document.getElementById('wholesale-auth-form');
  const wPortalSection = document.getElementById('wholesale-portal-section');
  const wWaOrderBtn = document.getElementById('wholesale-wa-order-btn');
  const WHOLESALE_PASSWORD_B64 = "VEVTVFBBU1M=";

  function openWholesaleModal(e) {
    if(e) e.preventDefault();
    if (wModal) wModal.classList.add('open');
    if (wModalOverlay) wModalOverlay.classList.add('active');
    if (wPasswordInput) wPasswordInput.value = '';
    if (wErrorMsg) wErrorMsg.style.display = 'none';
  }
  function closeWholesaleModal() {
    if (wModal) wModal.classList.remove('open');
    if (wModalOverlay) wModalOverlay.classList.remove('active');
  }
  
  if (wLink && wModal) wLink.addEventListener('click', openWholesaleModal);
  if (wFooterLink && wModal) wFooterLink.addEventListener('click', openWholesaleModal);
  if (wModalCloseBtn) wModalCloseBtn.addEventListener('click', closeWholesaleModal);
  if (wModalOverlay) wModalOverlay.addEventListener('click', closeWholesaleModal);
  
  if (wAuthForm) {
    wAuthForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPass = wPasswordInput.value;
      // Obfuscated check
      if (btoa(enteredPass.toUpperCase()) === WHOLESALE_PASSWORD_B64) {
        closeWholesaleModal();
        if (wPortalSection) {
          wPortalSection.style.display = 'block';
          wPortalSection.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Ocultar contenedor de login si existe (en la página independiente mayoristas.html)
        const loginContainer = document.querySelector('.wholesale-login-container');
        if (loginContainer) {
          loginContainer.style.display = 'none';
        }
        
        // Notificación de éxito elegante
        setTimeout(() => {
          alert('¡Acceso concedido! Catálogo exclusivo de mayoristas desbloqueado.');
        }, 300);
      } else {
        if (wErrorMsg) wErrorMsg.style.display = 'block';
        if (wPasswordInput) wPasswordInput.value = '';
      }
    });
  }
  
  if (wWaOrderBtn) {
    wWaOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = `Hola TCA4SHOP. He accedido al portal de mayoristas y me interesa cotizar un lote de productos al por mayor (mínimo 6 unidades). ¿Me podrían guiar con los precios mayoristas y disponibilidad de envío?`;
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    });
  }

  // ==========================================
  // 12. PRODUCT MODAL & ORDER
  // ==========================================

  const productModal = document.getElementById('product-modal');
  const productModalOverlay = document.getElementById('product-modal-overlay');
  const productModalClose = document.getElementById('product-modal-close');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  const modalMainImg = document.getElementById('modal-main-img');
  const modalBadge = document.getElementById('modal-badge');
  const modalThumbnails = document.getElementById('modal-thumbnails');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalFeatures = document.getElementById('modal-features');
  const modalPrice = document.getElementById('modal-price');
  
  const orderForm = document.getElementById('product-order-form');
  const orderProductId = document.getElementById('order-product-id');
  
  const modalReviewForm = document.getElementById('modal-review-form');
  const modalStarInputs = document.querySelectorAll('#modal-star-rating-selector .star-input');
  const modalSelectedRating = document.getElementById('modal-selected-rating');
  const modalReviewsList = document.getElementById('modal-reviews-list');

  let productModalAutoplayTimer;

  function openProductModal(productId) {
    const product = productsDatabase[productId];
    if (!product) return;
    
    orderProductId.value = productId;
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = `Q${product.price.toLocaleString()}`;
    
    if (product.badge) {
      modalBadge.textContent = product.badge;
      modalBadge.style.display = 'block';
      modalBadge.className = product.badge === 'NUEVO' ? 'product-badge accent' : 'product-badge';
    } else {
      modalBadge.style.display = 'none';
    }
    
    modalMainImg.src = product.images[0];
    
    modalThumbnails.innerHTML = '';
    
    let currentGalleryIndex = 0;
    
    function setModalImage(idx) {
      if (!product.images[idx]) return;
      currentGalleryIndex = idx;
      modalMainImg.src = product.images[idx];
      Array.from(modalThumbnails.children).forEach((c, i) => {
        if (i === idx) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });
    }

    function startModalAutoplay() {
      clearInterval(productModalAutoplayTimer);
      if (product.images.length > 1) {
        productModalAutoplayTimer = setInterval(() => {
          let nextIdx = (currentGalleryIndex + 1) % product.images.length;
          setModalImage(nextIdx);
        }, 4000);
      }
    }

    product.images.forEach((img, idx) => {
      const imgEl = document.createElement('img');
      imgEl.src = img;
      if (idx === 0) imgEl.classList.add('active');
      imgEl.addEventListener('click', () => {
        setModalImage(idx);
        startModalAutoplay(); // Reset timer on manual click
      });
      modalThumbnails.appendChild(imgEl);
    });
    
    startModalAutoplay();
    
    modalFeatures.innerHTML = '';
    product.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeatures.appendChild(li);
    });
    
    renderModalReviews();
    
    // Setup real-time price update
    const qtyInput = document.getElementById('order-qty');
    const orderFormContainer = document.getElementById('product-order-form');
    let orderTotalDisplay = document.getElementById('real-time-total');
    if(!orderTotalDisplay) {
      const displayHtml = `
        <div id="real-time-total" class="order-total-display">
          <span class="total-label">Total estimado:</span>
          <span class="total-value">Q${product.price.toLocaleString()}</span>
        </div>
      `;
      const submitBtn = orderFormContainer.querySelector('button[type="submit"]');
      submitBtn.insertAdjacentHTML('beforebegin', displayHtml);
      orderTotalDisplay = document.getElementById('real-time-total');
    } else {
      orderTotalDisplay.querySelector('.total-value').textContent = `Q${product.price.toLocaleString()}`;
    }
    
    const updateRealTimePrice = () => {
      const qty = parseInt(qtyInput.value) || 1;
      orderTotalDisplay.querySelector('.total-value').textContent = `Q${(product.price * qty).toLocaleString()}`;
    };
    qtyInput.removeEventListener('input', updateRealTimePrice);
    qtyInput.addEventListener('input', updateRealTimePrice);
    
    if (productModal) productModal.classList.add('open');
    if (productModalOverlay) productModalOverlay.classList.add('active');
  }

  function closeProductModal() {
    clearInterval(productModalAutoplayTimer);
    if (productModal) productModal.classList.remove('open');
    if (productModalOverlay) productModalOverlay.classList.remove('active');
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.product-card');
      if (card) {
        const productId = card.getAttribute('data-id');
        openProductModal(productId);
      }
    });
  });

  if (productModalClose) productModalClose.addEventListener('click', closeProductModal);
  if (productModalOverlay) productModalOverlay.addEventListener('click', closeProductModal);

  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation visual feedback
      const requiredInputs = orderForm.querySelectorAll('input[required], select[required]');
      let isValid = true;
      requiredInputs.forEach(input => {
        if(!input.value.trim()) {
          input.classList.add('input-error');
          isValid = false;
          setTimeout(() => input.classList.remove('input-error'), 1000);
        }
      });
      
      if(!isValid) return;

      const productId = orderProductId.value;
      const product = productsDatabase[productId];
      const qty = document.getElementById('order-qty').value;
      
      const fname = document.getElementById('order-fname').value.trim();
      const lname = document.getElementById('order-lname').value.trim();
      const phone = document.getElementById('order-phone').value.trim();
      
      const depto = document.getElementById('order-depto').value;
      const muni = document.getElementById('order-muni').value.trim();
      const address = document.getElementById('order-address').value.trim();
      const zone = document.getElementById('order-zone').value.trim();
      
      const total = product.price * qty;
      
      const message = `Nuevo pedido TCA4SHOP\n\nProducto: ${product.name}\nCantidad: ${qty} unidad(es)\n\nCliente:\n- Nombre: ${fname} ${lname}\n- Teléfono: ${phone}\n\nDirección de entrega:\n- Departamento: ${depto}\n- Municipio: ${muni}\n- Dirección: ${address}\n- Zona: ${zone}\n\nTotal estimado: Q${total.toLocaleString()}`;

      // Visual Confirmation
      const originalFormHtml = orderForm.innerHTML;
      orderForm.innerHTML = `
        <div id="order-confirmation" style="display:flex;">
          <div class="confirm-icon">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3>¡Preparando tu pedido!</h3>
          <p>Te estamos redirigiendo a WhatsApp para confirmar los detalles finales y el envío.</p>
        </div>
      `;
      
      setTimeout(() => {
        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
        setTimeout(() => {
          closeProductModal();
          orderForm.innerHTML = originalFormHtml; // restore for next time
          orderForm.reset();
        }, 500);
      }, 1500);
    });
  }

  modalStarInputs.forEach(star => {
    star.addEventListener('click', () => {
      const rating = parseInt(star.getAttribute('data-rating'));
      modalSelectedRating.value = rating;
      
      modalStarInputs.forEach(s => {
        const sRating = parseInt(s.getAttribute('data-rating'));
        if (sRating <= rating) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });

  if (modalReviewForm) {
    modalReviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rating = parseInt(modalSelectedRating.value);
      const name = document.getElementById('modal-review-name').value.trim();
      const comment = document.getElementById('modal-review-comment').value.trim();
      const fileInput = document.getElementById('modal-review-image');
      
      let imageUrl = null;
      
      function saveModalReview() {
        const newReview = { name, rating, comment, date: "Hoy mismo", imageUrl };
        reviews.unshift(newReview);
        
        modalReviewForm.reset();
        modalStarInputs.forEach(s => s.classList.add('active'));
        modalSelectedRating.value = 5;
        
        renderModalReviews();
        if (typeof renderReviews === 'function') {
          renderReviews();
          updateReviewsSummary();
        }
      }
      
      if (fileInput && fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(evt) { imageUrl = evt.target.result; saveModalReview(); };
        reader.readAsDataURL(fileInput.files[0]);
      } else {
        saveModalReview();
      }
    });
  }
  
  function renderModalReviews() {
    if (!modalReviewsList) return;
    let html = '';
    reviews.slice(0, 3).forEach(review => {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) { starsHtml += i <= review.rating ? '★' : '☆'; }
      const initial = review.name.charAt(0).toUpperCase();
      const imageHtml = review.imageUrl ? `<img src="${review.imageUrl}" class="review-img-attachment">` : '';
      
      html += `
        <div class="review-item-card" style="margin-bottom: 1rem; padding: 1rem; border-radius: 12px; background: #fafafa; border: 1px solid var(--divider-color);">
          <div class="review-item-header" style="margin-bottom: 0.5rem; display: flex; justify-content: space-between;">
            <div class="review-user-info" style="display: flex; gap: 0.5rem; align-items: center;">
              <div class="review-user-initial" style="width: 32px; height: 32px; font-size: 0.9rem;">${initial}</div>
              <div>
                <div class="review-author" style="font-size: 0.9rem;">${review.name}</div>
                <div class="review-stars" style="font-size: 0.8rem; color: var(--accent-gold);">${starsHtml}</div>
              </div>
            </div>
            <div class="review-date" style="font-size: 0.8rem;">${review.date}</div>
          </div>
          <p class="review-text" style="font-size: 0.9rem; margin-bottom: 0;">"${review.comment}"</p>
          ${imageHtml}
        </div>
      `;
    });
    if (reviews.length === 0) { html = '<p style="color: #666; font-size: 0.9rem;">Aún no hay reseñas. ¡Sé el primero!</p>'; }
    modalReviewsList.innerHTML = html;
  }


function initProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  if (!productId) return;
  const product = productsDatabase[productId];
  if (!product) return;

  const container = document.getElementById('single-product-container');
  if (!container) return;

  const featHtml = product.features.map(f => `<li>${f}</li>`).join('');
  const boxHtml = product.inTheBox ? product.inTheBox.map(b => `<li>${b}</li>`).join('') : '';
  const deptoOptions = Object.keys(guatemalaLocations).map(d => `<option value="${d}">${d}</option>`).join('');

  let reviewsHtml = '';
  const prodReviews = reviews.filter(r => r.productId === productId);
  if (prodReviews.length > 0) {
    prodReviews.forEach(review => {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) { starsHtml += i <= review.rating ? '\u2605' : '\u2606'; }
      const initial = review.name.charAt(0).toUpperCase();
      reviewsHtml += `
        <div class="pg-review-card">
          <div class="pg-review-header">
            <div class="pg-review-user">
              <div class="pg-review-avatar">${initial}</div>
              <div>
                <div class="pg-review-name">${review.name}</div>
                <div class="pg-review-stars">${starsHtml}</div>
              </div>
            </div>
            <div class="pg-review-date">${review.date}</div>
          </div>
          <p class="pg-review-text">"${review.comment}"</p>
        </div>
      `;
    });
  } else {
    reviewsHtml = '<p style="color:#888;font-size:0.95rem;">A\u00fan no hay rese\u00f1as para este producto. \u00a1S\u00e9 el primero!</p>';
  }

  container.innerHTML = `
    <div class="pg-breadcrumb">
      <a href="productos.html">\u2190 Todos los productos</a>
    </div>
    <div class="pg-layout">
      <div class="pg-gallery">
        <div class="pg-main-img-wrap" id="main-media-container">
          <img id="main-product-image" src="${product.images[0]}" alt="${product.name}" style="width:100%;height:100%;object-fit:contain;display:block;">
          <video id="main-product-video" src="${product.video || ''}" style="width:100%;height:100%;object-fit:cover;display:none;" controls></video>
        </div>
        <div class="pg-thumbnails">
          ${product.images.map((img, i) => `
            <div class="pg-thumb ${i === 0 ? 'active' : ''}" onclick="changeMainMedia('image','${img}',this)">
              <img src="${img}" alt="Vista ${i + 1}">
            </div>
          `).join('')}
          ${product.video ? `
            <div class="pg-thumb" onclick="changeMainMedia('video','${product.video}',this)" style="background:#111;display:flex;align-items:center;justify-content:center;">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          ` : ''}
        </div>
      </div>
      <div class="pg-info">
        <div class="pg-header">
          <div class="pg-badges-row">
            ${product.originalPrice ? `<span class="pg-discount-badge">🔥 -55% OFERTA</span>` : ''}
            ${product.shipping ? `<span class="pg-shipping-tag">🚚 ${product.shipping}</span>` : ''}
          </div>
          <h1 class="pg-title">${product.name}</h1>
          <div class="pg-price-block">
            ${product.originalPrice ? `<div class="pg-price-original"><del>Q${product.originalPrice.toLocaleString()}</del></div>` : ''}
            <div class="pg-price">Q${product.price.toLocaleString()}</div>
          </div>
          <p class="pg-desc">${product.desc}</p>
        </div>
        <div class="pg-trust">
          <div class="pg-trust-item"><span>\u2705</span><span>100% Original</span></div>
          <div class="pg-trust-item pg-trust-free-ship"><span>🚚</span><span>Envío GRATIS</span></div>
          <div class="pg-trust-item"><span>\ud83d\udcac</span><span>Soporte WhatsApp</span></div>
        </div>
        <div class="pg-features-block">
          <h3>\u2728 Caracter\u00edsticas principales</h3>
          <ul class="pg-features-list">${featHtml}</ul>
        </div>
        <div class="pg-form-card">
          <h3>\ud83d\udce6 Completa tu pedido</h3>
          <form id="page-order-form" class="pg-form">
            <input type="hidden" id="page-order-product-id" value="${productId}">
            <div class="pg-form-row">
              <input type="text" id="page-order-fname" placeholder="Nombre" required class="pg-input">
              <input type="text" id="page-order-lname" placeholder="Apellido" required class="pg-input">
            </div>
            <input type="tel" id="page-order-phone" placeholder="Tel\u00e9fono" required class="pg-input" style="width:100%;">
            <div class="pg-form-row">
              <select id="page-order-depto" required class="pg-input">
                <option value="" disabled selected>Departamento</option>
                ${deptoOptions}
              </select>
              <select id="page-order-muni" required class="pg-input">
                <option value="" disabled selected>Municipio</option>
              </select>
            </div>
            <div class="pg-form-row pg-address-row">
              <input type="text" id="page-order-address" placeholder="Direcci\u00f3n exacta" required class="pg-input">
              <input type="text" id="page-order-zone" placeholder="Zona" required class="pg-input">
            </div>
            <div class="pg-qty-row">
              <span>Cantidad:</span>
              <div class="pg-qty-control">
                <button type="button" class="pg-qty-btn" id="pg-qty-minus">\u2212</button>
                <input type="number" id="page-order-qty" min="1" value="1" class="pg-qty-input" required>
                <button type="button" class="pg-qty-btn" id="pg-qty-plus">+</button>
              </div>
            </div>
            <div class="pg-total">
              <span>Total estimado:</span>
              <span class="pg-total-price" id="pg-total-price">Q${product.price.toLocaleString()}</span>
            </div>
            <button type="submit" class="btn btn-primary pg-submit-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              Confirmar por WhatsApp
            </button>
          </form>
        </div>
        ${product.evolution ? `
        <div class="pg-evolution">
          <h3>\ud83d\udd2c Evoluci\u00f3n del producto</h3>
          <p>${product.evolution}</p>
        </div>` : ''}
        ${product.inTheBox ? `
        <div class="pg-inbox">
          <h3>\ud83d\udce6 \u00bfQu\u00e9 incluye la caja?</h3>
          <ul class="pg-inbox-list">${boxHtml}</ul>
        </div>` : ''}
        <div class="pg-reviews">
          <h3>\u2b50 Rese\u00f1as de clientes</h3>
          <div id="page-reviews-list">${reviewsHtml}</div>
        </div>
      </div>
    </div>
  `;

  // Qty controls + live price update
  const qtyInput = document.getElementById('page-order-qty');
  const totalPriceEl = document.getElementById('pg-total-price');
  const qtyMinus = document.getElementById('pg-qty-minus');
  const qtyPlus = document.getElementById('pg-qty-plus');

  function updateTotal() {
    const qty = Math.max(1, parseInt(qtyInput.value) || 1);
    qtyInput.value = qty;
    if (totalPriceEl) totalPriceEl.textContent = `Q${(product.price * qty).toLocaleString()}`;
  }

  if (qtyMinus) qtyMinus.addEventListener('click', () => { qtyInput.value = Math.max(1, (parseInt(qtyInput.value) || 1) - 1); updateTotal(); });
  if (qtyPlus) qtyPlus.addEventListener('click', () => { qtyInput.value = (parseInt(qtyInput.value) || 1) + 1; updateTotal(); });
  if (qtyInput) qtyInput.addEventListener('input', updateTotal);

  // Form submit
  const form = document.getElementById('page-order-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const qty = document.getElementById('page-order-qty').value;
      const fname = document.getElementById('page-order-fname').value.trim();
      const lname = document.getElementById('page-order-lname').value.trim();
      const phone = document.getElementById('page-order-phone').value.trim();
      const depto = document.getElementById('page-order-depto').value.trim();
      const muni = document.getElementById('page-order-muni').value.trim();
      const address = document.getElementById('page-order-address').value.trim();
      const zone = document.getElementById('page-order-zone').value.trim();
      const total = product.price * qty;
      const message = `Nuevo pedido TCA4SHOP\n\nProducto: ${product.name}\nCantidad: ${qty} unidad(es)\n\nCliente:\n- Nombre: ${fname} ${lname}\n- Tel\u00e9fono: ${phone}\n\nDirecci\u00f3n de entrega:\n- Departamento: ${depto}\n- Municipio: ${muni}\n- Direcci\u00f3n: ${address}\n- Zona: ${zone}\n\nTotal estimado: Q${total.toLocaleString()}`;
      window.open(`https://wa.me/50254102510?text=${encodeURIComponent(message)}`, '_blank');
    });
  }
}
  initProductPage();
});

// Función global para cambiar la media principal de la galería
window.changeMainMedia = function(type, src, element) {
  const mainImage = document.getElementById('main-product-image');
  const mainVideo = document.getElementById('main-product-video');
  const thumbs = document.querySelectorAll('.thumb-wrap');
  
  if (type === 'image') {
    mainVideo.style.display = 'none';
    mainVideo.pause();
    mainImage.style.display = 'block';
    mainImage.src = src;
  } else if (type === 'video') {
    mainImage.style.display = 'none';
    mainVideo.style.display = 'block';
    mainVideo.src = src;
    mainVideo.play();
  }
  
  thumbs.forEach(t => t.style.borderColor = 'transparent');
  if(element) element.style.borderColor = 'var(--green-brand)';
};



// ==========================================
// NEW FEATURES FOR SEO, UX & FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Promo Banner Close ---
  const promoBanner = document.getElementById('promo-banner');
  const promoClose = document.getElementById('promo-banner-close');
  if (promoBanner && promoClose) {
    if (localStorage.getItem('promoBannerClosed') === 'true') {
      promoBanner.classList.add('hidden');
      document.body.classList.add('promo-closed');
    }
    promoClose.addEventListener('click', () => {
      promoBanner.classList.add('hidden');
      document.body.classList.add('promo-closed');
      localStorage.setItem('promoBannerClosed', 'true');
    });
  }

  // --- Dark Mode Toggle ---
  const darkModeBtn = document.getElementById('dark-mode-btn');
  if (darkModeBtn) {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) document.body.classList.add('dark-mode');
    
    darkModeBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
  }

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Animated Counters ---
  const counters = document.querySelectorAll('.counter-number');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const endValue = parseInt(target.getAttribute('data-target'));
          const duration = 2000;
          const increment = endValue / (duration / 16); // 60fps
          let current = 0;
          
          const updateCounter = () => {
            current += increment;
            if (current < endValue) {
              target.innerText = Math.ceil(current) + (target.innerText.includes('%') ? '%' : target.innerText.includes('+') ? '+' : '');
              requestAnimationFrame(updateCounter);
            } else {
              target.innerText = endValue + (endValue === 100 ? '%' : endValue === 200 ? '+' : '');
            }
          };
          updateCounter();
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-question');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const isExpanded = item.getAttribute('aria-expanded') === 'true';
      
      // Close all others
      faqItems.forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        other.nextElementSibling.classList.remove('open');
      });
      
      if (!isExpanded) {
        item.setAttribute('aria-expanded', 'true');
        item.nextElementSibling.classList.add('open');
      }
    });
  });

  // --- Product Filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.catalog-grid > a');
  if (filterBtns.length > 0 && productCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- Privacy Modal ---
  const privacyLink = document.getElementById('privacy-link');
  const privacyOverlay = document.getElementById('privacy-overlay');
  const privacyModal = document.getElementById('privacy-modal');
  const privacyClose = document.getElementById('privacy-modal-close');
  
  if (privacyLink && privacyModal) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      privacyOverlay.classList.add('active');
      privacyModal.classList.add('open');
    });
    const closePrivacy = () => {
      privacyOverlay.classList.remove('active');
      privacyModal.classList.remove('open');
    };
    if(privacyClose) privacyClose.addEventListener('click', closePrivacy);
    if(privacyOverlay) privacyOverlay.addEventListener('click', closePrivacy);
  }

});

document.addEventListener('DOMContentLoaded', () => {
  // --- Qty Selector ---
  const orderForms = document.querySelectorAll('.product-order-form');
  orderForms.forEach(form => {
    const qtyInput = form.querySelector('#order-qty');
    const btnMinus = form.querySelector('.qty-minus');
    const btnPlus = form.querySelector('.qty-plus');
    
    if (qtyInput && btnMinus && btnPlus) {
      btnMinus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) {
          qtyInput.value = val - 1;
          qtyInput.dispatchEvent(new Event('input'));
        }
      });
      btnPlus.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        qtyInput.value = val + 1;
        qtyInput.dispatchEvent(new Event('input'));
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // --- Ocultar WhatsApp flotante cuando la sección CTA es visible ---
  // Evita que el botón WA tape el botón "Comprar ahora"
  const floatingWa = document.querySelector('.floating-wa-container');
  const ctaSection = document.querySelector('.cta-section');

  if (floatingWa && ctaSection && 'IntersectionObserver' in window) {
    const ctaObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          floatingWa.classList.add('hide-cta-zone');
        } else {
          floatingWa.classList.remove('hide-cta-zone');
        }
      });
    }, { threshold: 0.3 });

    ctaObserver.observe(ctaSection);
  }
});
