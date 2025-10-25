/**
* Template Name: Arsha
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Updated: Feb 22 2025 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Frequently Asked Questions Toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
    faqItem.addEventListener('click', () => {
      faqItem.parentNode.classList.toggle('faq-active');
    });
  });

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();










/*SRIPT PARA EL TEXTO SOBRE NOSOTROS*/
const btnLeerMas = document.querySelector('.read-more');
const contenido = document.getElementById('contenidoExtendido');
const botonContainer = btnLeerMas.parentElement; 
let contenidoAbierto = false;

function ocultarContenido() {
  if (!contenidoAbierto) return;
  contenido.style.display = 'none';
  btnLeerMas.querySelector('span').textContent = 'Leer Más';
  btnLeerMas.querySelector('i').className = 'bi bi-arrow-down';
  botonContainer.appendChild(btnLeerMas);

  let extraContainer = contenido.querySelector('.text-center-leermas');
  if (extraContainer) extraContainer.remove();

  contenidoAbierto = false;
}

// Toggle al hacer click en "Leer Más"
btnLeerMas.addEventListener('click', function(e) {
  e.preventDefault();

  if (!contenidoAbierto) {
    // Mostrar contenido
    contenido.style.display = 'block';
    btnLeerMas.querySelector('span').textContent = 'Leer Menos';
    btnLeerMas.querySelector('i').className = 'bi bi-arrow-up';

    let nuevoContainer = document.createElement('div');
    nuevoContainer.className = 'col-12 text-center-leermas mt-3';
    nuevoContainer.appendChild(btnLeerMas);
    contenido.appendChild(nuevoContainer);

    setTimeout(() => {
      contenido.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 200);

    contenidoAbierto = true;
  } else {
    ocultarContenido();
  }
});

// Detectar scroll y cerrar contenido cuando la sección desaparezca completamente
window.addEventListener('scroll', function() {
  if (!contenidoAbierto) return;

  const seccion = document.getElementById('sobreNosotros');
  const rect = seccion.getBoundingClientRect();
  const ventanaAltura = window.innerHeight || document.documentElement.clientHeight;

  // Si la sección se pasó completamente hacia arriba o hacia abajo, cerrar contenido
  if (rect.bottom < 0 || rect.top > ventanaAltura) {
    ocultarContenido();
  }
});

// Cerrar contenido si se hace click en un link del navbar que apunta a otra sección
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', function() {
    ocultarContenido();
  });
});


/*SRIPT PARA EL TEXTO SOBRE NOSOTROS*/






/*SRIPT PARA SECCION GALERIA*/
(function(){
  const STEP_MS   = 3000;
  const ANIM_MS   = 700;

  const cards = Array.from(document.querySelectorAll('#galeriaCarrousel .galeria-card'));
  const visor = document.getElementById('visorGaleria');

  let idx = 0;
  let timer = null;

  cards.forEach(c => { const pre = new Image(); pre.src = c.dataset.large || c.querySelector('img')?.src; });

  function setPositions() {
    const n = cards.length;
    const prev = (idx - 1 + n) % n;
    const next = (idx + 1) % n;

    cards.forEach((card, i) => {
      card.classList.remove('pos-center','pos-above','pos-below','pos-hidden');
      if (i === idx)      card.classList.add('pos-center');
      else if (i === prev) card.classList.add('pos-above');
      else if (i === next) card.classList.add('pos-below');
      else                 card.classList.add('pos-hidden');
    });
  }

  function updateViewer(sync = true) {
    const activeCard = cards[idx];
    const large = activeCard.dataset.large || activeCard.querySelector('img').src;

    if (sync) {
      visor.classList.add('fade-out');
      setTimeout(() => {
        visor.src = large;
        visor.alt = activeCard.querySelector('img').alt || 'Imagen';
        visor.classList.remove('fade-out');
        visor.classList.add('fade-in');
        setTimeout(() => visor.classList.remove('fade-in'), 300);
      }, Math.min(ANIM_MS * 0.35, 250));
    } else {
      visor.src = large;
    }
  }

  function next() {
    idx = (idx + 1) % cards.length;
    setPositions();
    updateViewer(true);
  }

  function start() {
    stop();
    timer = setInterval(next, STEP_MS);
  }

  function stop() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      idx = i;
      setPositions();
      updateViewer(true);
      start();
    });
  });

  setPositions();
  updateViewer(false);
  start();

  const carrEl = document.getElementById('galeriaCarrousel');
  carrEl.addEventListener('mouseenter', stop);
  carrEl.addEventListener('mouseleave', start);
})();
/*SRIPT PARA SECCION GALERIA*/