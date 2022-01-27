(function ($) {
  /*--
        Commons Variables
    -----------------------------------*/
  const $window = $(window);
  const $body = $('body');

  /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
  $('[data-bg-image]').each(function () {
    const $this = $(this);
    const $image = $this.data('bg-image');
    $this.css('background-image', `url(${$image})`);
  });
  $('[data-bg-color]').each(function () {
    const $this = $(this);
    const $color = $this.data('bg-color');
    $this.css('background-color', $color);
  });

  /* ---------------------------- 
        Sidebar Search Active
    -----------------------------*/
  function sidebarSearch() {
    const searchTrigger = $('.header-search-toggle');
    const endTriggersearch = $('button.search-close');
    const container = $('.main-search-active');

    searchTrigger.on('click', () => {
      container.addClass('inside');
    });

    endTriggersearch.on('click', () => {
      container.removeClass('inside');
    });
  }
  sidebarSearch();

  /*------------------------------
        Parallax Motion Animation 
    -------------------------------*/
  $('.scene').each(function () {
    new Parallax($(this)[0]);
  });

  /*--
        Header Sticky
    -----------------------------------*/
  $window.on('scroll', () => {
    if ($window.scrollTop() > 350) {
      $('.sticky-header').addClass('is-sticky');
    } else {
      $('.sticky-header').removeClass('is-sticky');
    }
  });

  /*--
        Off Canvas Function
    -----------------------------------*/
  $('.header-mobile-menu-toggle, .mobile-menu-close').on(
    'click',
    '.toggle',
    () => {
      $body.toggleClass('mobile-menu-open');
    },
  );
  $('.site-mobile-menu').on('click', '.menu-toggle', function (e) {
    e.preventDefault();
    const $this = $(this);
    if ($this.siblings('.sub-menu:visible, .mega-menu:visible').length) {
      $this
        .siblings('.sub-menu, .mega-menu')
        .slideUp()
        .parent()
        .removeClass('open')
        .find('.sub-menu, .mega-menu')
        .slideUp()
        .parent()
        .removeClass('open');
    } else {
      $this
        .siblings('.sub-menu, .mega-menu')
        .slideDown()
        .parent()
        .addClass('open')
        .siblings()
        .find('.sub-menu, .mega-menu')
        .slideUp()
        .parent()
        .removeClass('open');
    }
  });

  $('.header-search-toggle').on('click', function (e) {
    e.preventDefault();
    $(this)
      .siblings('.header-search-form, .header-search-form-2')
      .slideToggle()
      .parent()
      .toggleClass('open');
  });

  $('.header-fs-search-toggle').on('click', () => {
    $('#fullscreen-search').addClass('open');
  });
  $('.fullscreen-search-close').on('click', '.toggle', () => {
    $('#fullscreen-search').removeClass('open');
  });

  $body.on('click', (e) => {
    if (
      !$(e.target).closest('.header-search').length &&
      $window.width() < 768
    ) {
      $('.header-search-form, .header-search-form-2')
        .slideUp()
        .parent()
        .removeClass('open');
    }
    if (
      !$(e.target).closest('.site-main-mobile-menu-inner').length &&
      !$(e.target).closest('.header-mobile-menu-toggle').length
    ) {
      $body.removeClass('mobile-menu-open');
    }
  });

  /* ----- 
        Animate Headline Active
    --------------------------------*/
  $('.headline-active').animatedHeadline({
    animationType: 'rotate-3',
  });

  /* ----------------------------
        AOS Scroll Animation 
    -------------------------------*/
  AOS.init({
    offset: 80,
    duration: 1000,
    once: true,
    easing: 'ease',
  });

  /* ----------------------------
        Tilt Animation 
    -------------------------------*/
  $('.js-tilt').tilt({
    base: window,
    reset: 1,
    scale: 1.05,
    reverse: 0,
    max: 6666,
    perspective: 6666,
    speed: 3333,
    disableAxis: 'x',
  });

  /* ----------------------------
        Tilt Animation glare
    -------------------------------*/
  $('.js-tilt-glare').tilt({
    base: window,
    reset: 1,
    scale: 1.5,
    reverse: 1,
    max: 500,
    perspective: 5000,
    speed: 5000,
  });

  /* ----------------------------
        Portfolio Masonry Activation
    -------------------------------*/
  $(window).load(() => {
    $('.ag-masonary-wrapper').imagesLoaded(() => {
      // filter items on button click
      $('.messonry-button').on('click', 'button', function () {
        const filterValue = $(this).attr('data-filter');
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        $grid.isotope({
          filter: filterValue,
        });
      });

      // init Isotope
      var $grid = $('.mesonry-list').isotope({
        percentPosition: true,
        transitionDuration: '0.7s',
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.resizer',
        },
      });
    });
  });

  /*----------------------------------------
         SVG Inject With Vivus(After Inject) 
    ------------------------------------------*/
  SVGInject(document.querySelectorAll('img.svgInject'), {
    makeIdsUnique: true,
    afterInject(img, svg) {
      new Vivus(svg, {
        duration: 125,
      });
    },
  });

  /* Vivus On Hover */
  // $('[data-vivus-hover]').hover(function () {
  //     var svg = $(this).find('svg')[0];
  //     new Vivus(svg, {
  //         duration: 0
  //     });
  // })

  /*-----------------------
        CounterUp JS 
    -------------------------*/
  $('.counter').counterUp({
    time: 2000,
  });

  /*--------------------------------
        Swiper Slider Activation JS 
    ----------------------------------*/

  // Home 1 Slider
  const introSlider = new Swiper('.intro-slider', {
    loop: true,
    speed: 750,
    spaceBetween: 30,
    slidesPerView: 2,
    effect: 'fade',
    navigation: {
      nextEl: '.home-slider-next',
      prevEl: '.home-slider-prev',
    },
    // autoplay: {},
  });

  // Testimonial Slider Two
  const testimonialSlider = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      1499: {
        slidesPerView: 5,
      },

      991: {
        slidesPerView: 5,
      },

      767: {
        slidesPerView: 3,
      },

      575: {
        slidesPerView: 2,
      },
    },
  });

  // Brand Carousel Slider
  const brandSlider = new Swiper('.brand-carousel', {
    watchSlidesVisibility: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
      1200: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 2,
      },
    },
  });

  /*--
        Isotpe
    -----------------------------------*/
  const $isotopeGrid = $('.isotope-grid');
  const $isotopeFilter = $('.isotope-filter');
  $isotopeGrid.imagesLoaded(() => {
    $isotopeGrid.isotope({
      itemSelector: '.grid-item',
      masonry: {
        columnWidth: '.grid-sizer',
      },
    });
    AOS.refresh();
  });
  $isotopeFilter.on('click', 'button', function () {
    const $this = $(this);
    const $filterValue = $this.attr('data-filter');
    const $targetIsotop = $this.parent().data('target');
    $this.addClass('active').siblings().removeClass('active');
    $($targetIsotop).isotope({
      filter: $filterValue,
    });
  });

  /*--
        Magnific Popup
    -----------------------------------*/
  $('.video-popup').magnificPopup({
    type: 'iframe',
  });

  // Background Video Active
  const htmlVideo = [
    {
      type: 'video/mp4',
      src: 'assets/media/video/IMG_0974.mp4',
    },
  ];

  //   var poster1 = 'assets/media/video/local-video.jpg';

  const demo1 = new vidim('.bg-video', {
    src: htmlVideo,
    // poster: poster1
  });

  /*--
        Scroll Up
    -----------------------------------*/
  function scrollToTop() {
    const $scrollUp = $('#scroll-top');
    let $lastScrollTop = 0;
    const $window = $(window);

    $window.on('scroll', function () {
      const st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass('show');
      } else if ($window.scrollTop() > 200) {
        $scrollUp.addClass('show');
      } else {
        $scrollUp.removeClass('show');
      }
      $lastScrollTop = st;
    });

    $scrollUp.on('click', (evt) => {
      $('html, body').animate({ scrollTop: 0 }, 600);
      evt.preventDefault();
    });
  }
  scrollToTop();

  /*-------------------------
        Ajax Contact Form 
    ---------------------------*/
  $(() => {
    // Get the form.
    const form = $('#contact-form');

    // Get the messages div.
    const formMessages = $('.form-messege');

    // Set up an event listener for the contact form.
    $(form).submit((e) => {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      const formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData,
      })
        .done((response) => {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error');
          $(formMessages).addClass('success');

          // Set the message text.
          $(formMessages).text(response);

          // Clear the form.
          $('#contact-form input,#contact-form textarea').val('');
        })
        .fail((data) => {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success');
          $(formMessages).addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
            $(formMessages).text(data.responseText);
          } else {
            $(formMessages).text(
              'Oops! An error occured and your message could not be sent.',
            );
          }
        });
    });
  });

  /*--
        On Load Function
    -----------------------------------*/
  $window.on('load', () => {});

  /*--
        Resize Function
    -----------------------------------*/
  $window.resize(() => {});
})(jQuery);
