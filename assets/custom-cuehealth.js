/* CueHealth Custom JavaScript */

(function () {
  'use strict';

  /* =========================================
     WHATSAPP FLOATING BUTTON
     ========================================= */
  function initWhatsApp() {
    var btn = document.getElementById('ch-whatsapp-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var msg = encodeURIComponent('Hi! I have a query about CueHealth products.');
      window.open('https://wa.me/917455918832?text=' + msg, '_blank');
    });
  }

  /* =========================================
     STICKY ADD-TO-CART BAR (product pages)
     ========================================= */
  function initStickyATC() {
    var bar = document.getElementById('ch-sticky-atc');
    if (!bar) return;

    var mainForm = document.querySelector('.product-form__submit');
    if (!mainForm) return;

    var productTitle = document.querySelector('.product__title');
    var productPrice = document.querySelector('.price__regular .price-item--regular');
    var productImg   = document.querySelector('.product__media img');

    if (productTitle) {
      var titleEl = bar.querySelector('.ch-sticky-atc__title');
      if (titleEl) titleEl.textContent = productTitle.textContent.trim();
    }
    if (productPrice) {
      var priceEl = bar.querySelector('.ch-sticky-atc__price');
      if (priceEl) priceEl.textContent = productPrice.textContent.trim();
    }
    if (productImg) {
      var imgEl = bar.querySelector('.ch-sticky-atc__img');
      if (imgEl) {
        imgEl.src = productImg.src;
        imgEl.alt = productImg.alt;
      }
    }

    var addBtn = bar.querySelector('.ch-sticky-atc__btn');
    if (addBtn) {
      addBtn.addEventListener('click', function () {
        var mainBtn = document.querySelector('.product-form__submit:not([disabled])');
        if (mainBtn) mainBtn.click();
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          bar.classList.add('visible');
          document.body.classList.add('has-sticky-atc');
        } else {
          bar.classList.remove('visible');
          document.body.classList.remove('has-sticky-atc');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(mainForm);
  }

  /* =========================================
     TESTIMONIALS CAROUSEL
     ========================================= */
  function initTestimonialsCarousel() {
    var carousels = document.querySelectorAll('[data-ch-testimonials]');
    carousels.forEach(function (carousel) {
      var track = carousel.querySelector('.ch-testimonials__track');
      var cards = carousel.querySelectorAll('.ch-testimonials__card');
      var btnPrev = carousel.querySelector('.ch-testimonials__btn--prev');
      var btnNext = carousel.querySelector('.ch-testimonials__btn--next');
      var dotsContainer = carousel.querySelector('.ch-testimonials__dots');

      if (!track || cards.length === 0) return;

      var current = 0;
      var visibleCount = getVisibleCount();
      var maxIndex = Math.max(0, cards.length - visibleCount);
      var autoplayTimer = null;

      function getVisibleCount() {
        var w = window.innerWidth;
        if (w >= 990) return 3;
        if (w >= 750) return 2;
        return 1;
      }

      function buildDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        var numDots = maxIndex + 1;
        for (var i = 0; i <= maxIndex; i++) {
          var dot = document.createElement('button');
          dot.className = 'ch-testimonials__dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
          dot.dataset.index = i;
          dot.addEventListener('click', function () {
            goTo(parseInt(this.dataset.index));
          });
          dotsContainer.appendChild(dot);
        }
      }

      function updateDots() {
        if (!dotsContainer) return;
        dotsContainer.querySelectorAll('.ch-testimonials__dot').forEach(function (dot, i) {
          dot.classList.toggle('active', i === current);
        });
      }

      function goTo(index) {
        current = Math.max(0, Math.min(index, maxIndex));
        var cardWidth = cards[0].offsetWidth + 24;
        track.style.transform = 'translateX(-' + (current * cardWidth) + 'px)';
        updateDots();
      }

      function startAutoplay() {
        autoplayTimer = setInterval(function () {
          var next = current >= maxIndex ? 0 : current + 1;
          goTo(next);
        }, 5000);
      }

      function stopAutoplay() {
        clearInterval(autoplayTimer);
      }

      if (btnPrev) {
        btnPrev.addEventListener('click', function () {
          stopAutoplay();
          goTo(current - 1);
          startAutoplay();
        });
      }
      if (btnNext) {
        btnNext.addEventListener('click', function () {
          stopAutoplay();
          goTo(current + 1);
          startAutoplay();
        });
      }

      window.addEventListener('resize', function () {
        visibleCount = getVisibleCount();
        maxIndex = Math.max(0, cards.length - visibleCount);
        current = Math.min(current, maxIndex);
        buildDots();
        goTo(current);
      });

      buildDots();
      startAutoplay();
    });
  }

  /* =========================================
     PRODUCT ACCORDION TABS
     ========================================= */
  function initProductTabs() {
    var triggers = document.querySelectorAll('.ch-product-tab__trigger');
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var tab = this.closest('.ch-product-tab');
        var isOpen = tab.classList.contains('open');
        document.querySelectorAll('.ch-product-tab').forEach(function (t) {
          t.classList.remove('open');
        });
        if (!isOpen) tab.classList.add('open');
      });
    });

    var firstTab = document.querySelector('.ch-product-tab');
    if (firstTab) firstTab.classList.add('open');
  }

  /* =========================================
     ANNOUNCEMENT BAR AUTO-ROTATE (CSS marquee fallback)
     Already handled by Dawn's slideshow for multi-blocks.
     ========================================= */

  /* =========================================
     DISCOUNT CODE FROM URL PARAM
     ========================================= */
  function applyDiscountFromUrl() {
    var params = new URLSearchParams(window.location.search);
    var code = params.get('discount');
    if (!code) return;
    fetch('/discount/' + encodeURIComponent(code))
      .then(function () {})
      .catch(function () {});
  }

  /* =========================================
     INIT
     ========================================= */
  document.addEventListener('DOMContentLoaded', function () {
    initWhatsApp();
    initStickyATC();
    initTestimonialsCarousel();
    initProductTabs();
    applyDiscountFromUrl();
  });
})();
