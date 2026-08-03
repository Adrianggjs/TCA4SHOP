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
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

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
    
    const bar4 = document.getElementById('bar-fill-4');
    const pctLabel4 = document.getElementById('bar-pct-4');
    if (bar4 && pctLabel4) { bar4.style.width = `${pct4}%`; pctLabel4.textContent = `${pct4}%`; }
    
    const bar3 = document.getElementById('bar-fill-3');
    const pctLabel3 = document.getElementById('bar-pct-3');
    if (bar3 && pctLabel3) { bar3.style.width = `${pct3}%`; pctLabel3.textContent = `${pct3}%`; }
  }
  
  // Cargar reseñas al inicio
  renderReviews();
  updateReviewsSummary();


  // ==========================================
  // 11. PORTAL DE MAYORISTAS (CONTRASEÑA Y ACCESO)
  // ==========================================
  
  const WHOLESALE_PASSWORD = "TCA4MAYORISTA";
  
  const wLink = document.getElementById('wholesaler-link');
  const wFooterLink = document.getElementById('wholesaler-footer-link');
  const wModalOverlay = document.getElementById('wholesale-modal-overlay');
  const wModal = document.getElementById('wholesale-modal');
  const wModalCloseBtn = document.getElementById('wholesale-modal-close-btn');
  const wAuthForm = document.getElementById('wholesale-auth-form');
  const wPasswordInput = document.getElementById('wholesale-password');
  const wErrorMsg = document.getElementById('wholesale-error-msg');
  const wPortalSection = document.getElementById('wholesale-portal-section');
  const wWaOrderBtn = document.getElementById('wholesale-wa-order');
  
  function openWholesaleModal(e) {
    if (e) e.preventDefault();
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
      if (enteredPass === WHOLESALE_PASSWORD) {
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
  const productsDatabase = {
    "airpods-pro-3": {
      name: "AirPods Pro 3",
      desc: "La evolución del sonido premium. Cancelación de ruido ultra inteligente de última generación, batería optimizada y estuche rediseñado.",
      evolution: "Esta nueva generación incorpora un chip más potente que analiza el entorno 48,000 veces por segundo para bloquear el ruido de forma inteligente, manteniendo una fidelidad acústica superior a cualquier versión anterior.",
      price: 599,
      images: [
        "assets/img/pro3_1.png",
        "assets/img/pro3_2.png",
        "assets/img/pro3_3.png"
      ],
      video: "assets/img/pro3_video.mp4",
      features: [
        "Cancelación activa de ruido mejorada",
        "Modo ambiente adaptativo",
        "Estuche con carga inalámbrica MagSafe",
        "Resistencia al agua y al sudor"
      ],
      inTheBox: [
        "AirPods Pro 3",
        "Estuche de carga MagSafe",
        "Almohadillas de silicona (4 tamaños)",
        "Cable de USB-C a Lightning",
        "Documentación"
      ],
      badge: "NUEVO"
    },
    "airpods-pro-2": {
      name: "AirPods Pro 2",
      desc: "Cancelación activa de ruido pro. Audio adaptativo espacial y resistencia extrema. Sumérgete en el sonido puro.",
      evolution: "El estándar de oro en audio inalámbrico que redefinió la cancelación de ruido. Con su chip H2, ofrece una experiencia inmersiva que se adapta dinámicamente a la forma de tu oído.",
      price: 399,
      images: [
        "assets/img/pro2_1.png",
        "assets/img/pro2_2.png",
        "assets/img/pro2_3.png"
      ],
      video: "assets/img/pro2_video.mp4",
      features: [
        "Cancelación activa de ruido",
        "Audio espacial personalizado",
        "Chip H2 de Apple",
        "Hasta 6 horas de batería"
      ],
      inTheBox: [
        "AirPods Pro 2",
        "Estuche de carga inalámbrica",
        "Almohadillas de silicona (3 tamaños)",
        "Cable Lightning",
        "Manual de usuario"
      ],
      badge: "MÁS VENDIDO"
    },
    "hk10-ultra-3": {
      name: "HK10 Ultra 3",
      desc: "El smartwatch definitivo. Pantalla AMOLED, diseño en titanio y funciones deportivas avanzadas.",
      evolution: "Diseñado para superar los límites. Con una batería que rinde días enteros y sensores biométricos de precisión quirúrgica, es el compañero perfecto para la aventura y la ciudad.",
      price: 499,
      images: [
        "assets/img/hk10_1.png",
        "assets/img/hk10_2.png",
        "assets/img/hk10_3.png"
      ],
      video: "assets/img/hk10_video.mp4",
      features: [
        "Pantalla AMOLED ultra brillante",
        "Diseño resistente de titanio",
        "Monitoreo de salud 24/7",
        "Notificaciones y llamadas Bluetooth"
      ],
      inTheBox: [
        "Smartwatch HK10 Ultra 3",
        "Correa deportiva",
        "Cable de carga magnético",
        "Guía de inicio rápido"
      ],
      badge: "OFERTA"
    }
  };

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
    product.images.forEach((img, idx) => {
      const imgEl = document.createElement('img');
      imgEl.src = img;
      if (idx === 0) imgEl.classList.add('active');
      imgEl.addEventListener('click', () => {
        modalMainImg.src = img;
        Array.from(modalThumbnails.children).forEach(c => c.classList.remove('active'));
        imgEl.classList.add('active');
      });
      modalThumbnails.appendChild(imgEl);
    });
    
    modalFeatures.innerHTML = '';
    product.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      modalFeatures.appendChild(li);
    });
    
    renderModalReviews();
    
    if (productModal) productModal.classList.add('open');
    if (productModalOverlay) productModalOverlay.classList.add('active');
  }

  function closeProductModal() {
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
      const productId = orderProductId.value;
      const product = productsDatabase[productId];
      const qty = document.getElementById('order-qty').value;
      
      const fname = document.getElementById('order-fname').value.trim();
      const lname = document.getElementById('order-lname').value.trim();
      const phone = document.getElementById('order-phone').value.trim();
      const email = document.getElementById('order-email').value.trim();
      
      const depto = document.getElementById('order-depto').value;
      const muni = document.getElementById('order-muni').value.trim();
      const address = document.getElementById('order-address').value.trim();
      const zone = document.getElementById('order-zone').value.trim();
      
      const total = product.price * qty;
      
      const message = `Nuevo pedido TCA4SHOP\n\nProducto: ${product.name}\nCantidad: ${qty} unidad(es)\n\nCliente:\n- Nombre: ${fname} ${lname}\n- Teléfono: ${phone}\n- Correo: ${email}\n\nDirección de entrega:\n- Departamento: ${depto}\n- Municipio: ${muni}\n- Dirección: ${address}\n- Zona: ${zone}\n\nTotal estimado: Q${total.toLocaleString()}`;

      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
      closeProductModal();
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

  const imgHtml = product.images.map((img, i) => `<img src='${img}' style='width:100%; border-radius:12px; margin-bottom:1rem; cursor:pointer; border:1px solid var(--divider-color);'>`).join('');
  const featHtml = product.features.map(f => `<li>${f}</li>`).join('');
  const boxHtml = product.inTheBox ? product.inTheBox.map(b => `<li>${b}</li>`).join('') : '';

  let reviewsHtml = '';
  const prodReviews = reviews.filter(r => r.productId === productId);
  if (prodReviews.length > 0) {
    prodReviews.forEach(review => {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) { starsHtml += i <= review.rating ? '★' : '☆'; }
      const initial = review.name.charAt(0).toUpperCase();
      reviewsHtml += `
        <div style='margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--divider-color);'>
          <div style='display: flex; gap: 1rem; align-items: flex-start; margin-bottom: 0.5rem;'>
            <div style='width: 40px; height: 40px; font-size: 1.1rem; background: var(--green-brand); color: white; display: flex; align-items: center; justify-content: center; border-radius: 50%;'>${initial}</div>
            <div>
              <div style='font-size: 1rem; font-weight: 600;'>${review.name}</div>
              <div style='font-size: 0.9rem; color: var(--accent-gold); margin-top: 0.2rem;'>${starsHtml}</div>
            </div>
            <div style='margin-left: auto; font-size: 0.85rem; color: #888;'>${review.date}</div>
          </div>
          <p style='font-size: 1rem; color: #444; line-height: 1.5; margin-left: 3.5rem;'>"${review.comment}"</p>
        </div>
      `;
    });
  } else {
    reviewsHtml = '<p style="color: #666; font-size: 1rem;">Aún no hay reseñas para este producto.</p>';
  }

  container.innerHTML = `
    <div class='shopify-product-grid'>
      <div>
        <div class='shopify-image-col' style='display: flex; flex-direction: column; gap: 1rem;'>
          <div id="main-media-container" style="position: relative; width: 100%; aspect-ratio: 1/1; background: #f8f8f8; border-radius: 12px; overflow: hidden; display: flex; align-items: center; justify-content: center;">
            <img id="main-product-image" src='${product.images[0]}' style='width: 100%; height: 100%; object-fit: contain; display: block;'>
            <video id="main-product-video" src='${product.video}' style='width: 100%; height: 100%; object-fit: cover; display: none;' controls></video>
          </div>
          <div class="gallery-thumbnails" style="display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;">
            ${product.images.map((img, i) => `
              <div class="thumb-wrap ${i === 0 ? 'active' : ''}" style="width: 80px; height: 80px; flex-shrink: 0; border-radius: 8px; border: 2px solid ${i === 0 ? 'var(--green-brand)' : 'transparent'}; cursor: pointer; overflow: hidden;" onclick="changeMainMedia('image', '${img}', this)">
                <img src='${img}' style='width: 100%; height: 100%; object-fit: cover;'>
              </div>
            `).join('')}
            ${product.video ? `
              <div class="thumb-wrap" style="width: 80px; height: 80px; flex-shrink: 0; border-radius: 8px; border: 2px solid transparent; cursor: pointer; overflow: hidden; position: relative; background: #000;" onclick="changeMainMedia('video', '${product.video}', this)">
                <video src="${product.video}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;"></video>
                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
      <div class='shopify-info-col'>
        <div class='shopify-card' style='padding: 2rem;'>
          <h2 class='shopify-title'>${product.name}</h2>
          <div class='shopify-price'>Q${product.price}</div>
          <p class='shopify-text' style='margin-bottom: 2rem;'>${product.desc}</p>
          <h3 class='shopify-section-title'>Evolución</h3>
          <p class='shopify-text' style='margin-bottom: 2rem;'>${product.evolution || 'Un paso adelante en tecnología.'}</p>
          <h3 class='shopify-section-title'>Características Principales</h3>
          <ul class='shopify-text' style='list-style-type: disc; margin-left: 1.5rem; margin-bottom: 2rem;'>
            ${featHtml}
          </ul>
          <h3 class='shopify-section-title'>¿Qué incluye la caja?</h3>
          <ul class='shopify-text' style='list-style-type: disc; margin-left: 1.5rem; margin-bottom: 1rem;'>
            ${boxHtml}
          </ul>
        </div>
        <div class='shopify-card order-form-container' style='background: var(--bg-crema); border: 2px solid var(--green-brand);'>
          <h3 class='shopify-section-title' style='text-align: center; font-size: 1.5rem; margin-bottom: 1.5rem;'>¡Completa tu pedido ahora!</h3>
          <form id='page-order-form' style='display: flex; flex-direction: column; gap: 1rem;'>
            <input type='hidden' id='page-order-product-id' value='${productId}'>
            <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;'>
              <input type='text' id='page-order-fname' placeholder='Nombre' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
              <input type='text' id='page-order-lname' placeholder='Apellido' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
            </div>
            <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;'>
              <input type='tel' id='page-order-phone' placeholder='Teléfono' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
              <input type='email' id='page-order-email' placeholder='Correo electrónico' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
            </div>
            <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;'>
              <input type='text' id='page-order-depto' placeholder='Departamento' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
              <input type='text' id='page-order-muni' placeholder='Municipio' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
            </div>
            <div style='display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;'>
              <input type='text' id='page-order-address' placeholder='Dirección exacta' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
              <input type='text' id='page-order-zone' placeholder='Zona' style='width: 100%; padding: 1rem; border-radius: 8px; border: 1px solid #ddd; font-family: inherit;' required>
            </div>
            <div style='display: flex; align-items: center; justify-content: space-between; margin-top: 0.5rem; padding: 1rem; background: white; border-radius: 8px;'>
              <label style='font-weight: 600; color: var(--green-dark);'>Cantidad a ordenar:</label>
              <input type='number' id='page-order-qty' min='1' value='1' style='width: 80px; padding: 0.8rem; border-radius: 8px; border: 1px solid #ddd; text-align: center; font-weight: 600; font-family: inherit;' required>
            </div>
            <button type='submit' class='btn btn-primary' style='margin-top: 1.5rem; width: 100%; padding: 1.2rem; font-size: 1.2rem; font-weight: 700; border-radius: 12px; letter-spacing: 1px; display:flex; justify-content:center; gap: 10px; align-items:center;'>
              Confirmar pedido por WhatsApp
            </button>
          </form>
        </div>
        <div class='shopify-card' style='padding: 2rem;'>
          <h3 class='shopify-section-title' style='font-size: 1.8rem; margin-bottom: 2rem;'>Reseñas de Clientes</h3>
          <div id='page-reviews-list'>
            ${reviewsHtml}
          </div>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById('page-order-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const qty = document.getElementById('page-order-qty').value;
      const fname = document.getElementById('page-order-fname').value.trim();
      const lname = document.getElementById('page-order-lname').value.trim();
      const phone = document.getElementById('page-order-phone').value.trim();
      const email = document.getElementById('page-order-email').value.trim();
      const depto = document.getElementById('page-order-depto').value.trim();
      const muni = document.getElementById('page-order-muni').value.trim();
      const address = document.getElementById('page-order-address').value.trim();
      const zone = document.getElementById('page-order-zone').value.trim();
      
      const total = product.price * qty;
      const message = `Nuevo pedido TCA4SHOP\n\nProducto: ${product.name}\nCantidad: ${qty} unidad(es)\n\nCliente:\n- Nombre: ${fname} ${lname}\n- Teléfono: ${phone}\n- Correo: ${email}\n\nDirección de entrega:\n- Departamento: ${depto}\n- Municipio: ${muni}\n- Dirección: ${address}\n- Zona: ${zone}\n\nTotal estimado: Q${total.toLocaleString()}`;
      
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

