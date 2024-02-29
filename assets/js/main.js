/***************************************************
==================== JS INDEX ======================
****************************************************
PreLoader Js
Mobile Menu Js
Menu last class
Mouse Custom Cursor Js
Sidebar Toggle
Body overlay Js
Data Background Js
Nice Select Js
Data-mask
Video-popup Active Js
Image-popup Active Js 
Masonry Active Js 
Odometer Active Js 
Slider activation Js
Slider-4-activation Js 
Project activation Js 
features activation Js 
process activation Js
team activation Js 
team activation Js 2
team activation Js 3 
service activation Js
service activation Js 2
Research activation Js 
Testimonial activation Js 
Blog activation Js
Brand activation Js
Search js activation

****************************************************/

(function ($) {
  ("use strict");
  var windowOn = $(window);
  /*----------------------------------------
    PreLoader Js
  -----------------------------------------*/
  var windowOn = $(window);
  $(window).on("load", function (event) {
    $("#preloader").delay(500).fadeOut(500);
  });

  ////////////////////////////////////////////////////
  // Menu Show Hide Js
  var lastScrollTop = 500;
  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();
    if (scroll > lastScrollTop) {
      $('#header-sticky').removeClass('header-sticky');
    } else {
      $('#header-sticky').addClass('header-sticky');
    }

    if (scroll < 500) {
      $("#header-sticky").removeClass("header-sticky");
    }
    lastScrollTop = scroll;
  });


  /*----------------------------------------
    Mobile Menu Js
  -----------------------------------------*/
  $('#mobile-menu').meanmenu({
    meanMenuContainer: '.mobile-menu',
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });
  $('#mobile-menu4').meanmenu({
    meanMenuContainer: '.mobile-menu4',
    meanScreenWidth: "1200",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  // Menu last class
  $('.main-menu nav > ul > li').slice(-3).addClass('menu-last');

  /*----------------------------------------
    Mouse Custom Cursor Js
  -----------------------------------------*/
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  $(".cursor_none").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-none");
  });
  $(".cursor_none").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-none");
  });

  /*----------------------------------------
    Sidebar Toggle
  -----------------------------------------*/
  $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
    $(".offcanvas__info").removeClass("info-open");
    $(".offcanvas__overlay").removeClass("overlay-open");
  });
  $(".offcanvas-toggle").on("click", function () {
    $(".offcanvas__info").addClass("info-open");
    $(".offcanvas__overlay").addClass("overlay-open");
  });

  /*----------------------------------------
    Body overlay Js
  -----------------------------------------*/
  $(".body-overlay").on("click", function () {
    $(".offcanvas__area").removeClass("offcanvas-opened");
    $(".cartmini__area").removeClass("cartmini-opened");
    $(".body-overlay").removeClass("opened");
  });

  $(".cartmini-open-btn").on("click", function () {
    $(".cartmini__area").addClass("cartmini-opened");
    $(".body-overlay").addClass("opened");
  });

  $(".cartmini-close-btn").on("click", function () {
    $(".cartmini__area").removeClass("cartmini-opened");
    $(".body-overlay").removeClass("opened");
  });

  /*----------------------------------------
    Data Background Js
  -----------------------------------------*/
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  /*----------------------------------------
    Nice Select Js
  -----------------------------------------*/
  $("select").niceSelect();


  /*----------------------------------------
    Data-mask
  -----------------------------------------*/
  $("[data-mask").each(function () {
    $(this).css(
      "-webkit-mask-image",
      "url( " + $(this).attr("data-mask") + "  )"
    );
    $(this).css("mask-image", "url( " + $(this).attr("data-mask") + "  )");
  });

  /*----------------------------------------
   Video-popup Active Js 
  -----------------------------------------*/
  $(".video-popup").magnificPopup({
    type: "iframe",
    // other options
  });


  /*----------------------------------------
   Image-popup Active Js 
  -----------------------------------------*/
  $('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    }
  });

  /*----------------------------------------
   Masonry Active Js 
  -----------------------------------------*/
  if (jQuery(".gallery-active").length > 0) {
    $('.gallery-active').imagesLoaded(function () {
      // init Isotope
      var $grid = $('.gallery-active').isotope({
        itemSelector: '.gallery-item-active',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.gallery-item-active',
        }
      });
      // filter items on button click
      $('.masonary-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      //for menu active class
      $('.masonary-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
      });

    });
  }


  /*----------------------------------------
   Odometer Active Js 
  -----------------------------------------*/
  $(".odometer").appear(function (e) {
    var odo = $(".odometer");
    odo.each(function () {
      var countNumber = $(this).attr("data-count");
      $(this).html(countNumber);
    });
  });

  /*----------------------------------------
   Slider activation Js 
  -----------------------------------------*/
  if (jQuery(".slider-active").length > 0) {
    let slider = new Swiper(".slider-active", {
      slidesPerView: 1,
      loop: false,
      autoplay: {
        delay: 9000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".slider-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev",
      },
      rtl: rtl_setting,

    });
  }

  /*----------------------------------------
   Slider-4-activation Js 
  -----------------------------------------*/
  if (jQuery(".slider-active-4").length > 0) {
    let slider = new Swiper(".slider-active-4", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".slider-pagination-4",
        clickable: true,
      },
      navigation: {
        nextEl: ".slider-button-4-next",
        prevEl: ".slider-button-4-prev",
      },
      rtl: rtl_setting,
    });
  }
  /*----------------------------------------
    Project activation Js 
  -----------------------------------------*/
  if (jQuery(".project-active").length > 0) {
    let project = new Swiper(".project-active", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      observer: true,
      rtl: rtl_setting,
      navigation: {
        nextEl: ".project-button-next",
        prevEl: ".project-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  }

  /*----------------------------------------
     carousel 03 item activation Js 
  -----------------------------------------*/
  if (jQuery(".carousel_03_item_active").length > 0) {
    let project = new Swiper(".carousel_03_item_active", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      observer: true,
      rtl: rtl_setting,
      autoplay: true,
      navigation: {
        nextEl: ".carousel_03_item_next",
        prevEl: ".carousel_03_item_prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
      },
    });
  }

  /*----------------------------------------
     carousel 04 item activation Js 
  -----------------------------------------*/
  if (jQuery(".carousel_04_item_active").length > 0) {
    let project = new Swiper(".carousel_04_item_active", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      observer: true,
      rtl: rtl_setting,
      autoplay: true,
      navigation: {
        nextEl: ".carousel_04_item_next",
        prevEl: ".carousel_04_item_prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });
  }


  /*----------------------------------------
    features activation Js 
  -----------------------------------------*/
  if (jQuery(".features-active").length > 0) {
    let slider = new Swiper(".features-active", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: ".cp-feature-pagination",
        clickable: true,
        el: ".features-count-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            totalClass +
            '"></span>' +
            ' <span class="bd-swiper-fraction-divide">/</span> ' +
            '<span class="' +
            currentClass +
            '"></span>'
          );
        },
      },
      rtl: rtl_setting,
      breakpoints: {
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
        1400: {
          slidesPerView: 1,
        },
        1600: {
          slidesPerView: 1,
        },
      },
    });
  }
  /*----------------------------------------
    process activation Js 
  -----------------------------------------*/
  $(document).on('mouseover', '.process-item', function () {
    $(this).addClass('active');
    $('.process-item').removeClass('active');
    $(this).addClass('active');
  });


  /*----------------------------------------
    team activation Js 
  -----------------------------------------*/
  if (jQuery(".team-active").length > 0) {
    let team = new Swiper(".team-active", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      allowTouchMove: true,
      observer: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".team-pagination",
        clickable: true,
      },
      rtl: rtl_setting,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        1400: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
  }

  /*----------------------------------------
    team activation Js 2
  -----------------------------------------*/
  if (jQuery(".team-active-2").length > 0) {
    let team = new Swiper(".team-active-2", {
      slidesPerView: 6,
      spaceBetween: 30,
      loop: false,
      allowTouchMove: true,
      observer: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".team-button-next",
        prevEl: ".team-button-prev",
      },
      rtl: rtl_setting,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        575: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    });
  }

  /*----------------------------------------
    team activation Js 3
  -----------------------------------------*/
  if (jQuery(".team-active-3").length > 0) {
    let team = new Swiper(".team-active-3", {
      slidesPerView: 6,
      spaceBetween: 30,
      loop: false,
      allowTouchMove: true,
      observer: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".cp-team3-pagination",
        clickable: true,
      },
      rtl: rtl_setting,
      breakpoints: {
        '1600': {
          slidesPerView: 4,
        },
        '1400': {
          slidesPerView: 3,
        },
        '1200': {
          slidesPerView: 3,
        },
        '992': {
          slidesPerView: 3,
        },
        '768': {
          slidesPerView: 2,
        },
        '576': {
          slidesPerView: 2,
        },
        '0': {
          slidesPerView: 1,
        },
      },
    });
  }

  /*----------------------------------------
  service activation Js 
  -----------------------------------------*/
  $(document).on('mouseover', '.cp-service4-item', function () {
    $('.cp-service4-item.active').removeClass('active');
    $(this).addClass('active');
  });

  /*----------------------------------------
    service activation Js
  -----------------------------------------*/
  if (jQuery(".service-active").length > 0) {
    let service = new Swiper(".service-active", {
      slidesPerView: 6,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      observer: true,
      rtl: rtl_setting,
      pagination: {
        el: ".service-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".service-button-next",
        prevEl: ".service-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 5,
        },
      },
    });
  }

  // cp services activation 2 
  if (jQuery(".cp-service-active").length > 0) {
    let service = new Swiper(".cp-service-active", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: false,
      allowTouchMove: true,
      observer: true,
      rtl: rtl_setting,
      pagination: {
        el: ".service-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".cp-service-button-next",
        prevEl: ".cp-service-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    });
  }


  /*----------------------------------------
    service activation Js 2
  -----------------------------------------*/
  if (jQuery(".service-active-2").length > 0) {
    let service = new Swiper(".service-active-2", {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        el: ".service-count-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            totalClass +
            '"></span>' +
            ' <span class="bd-swiper-fraction-divide">/</span> ' +
            '<span class="' +
            currentClass +
            '"></span>'
          );
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      allowTouchMove: true,
      observer: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      rtl: rtl_setting,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 1,
        },
      },
    });
  }
  /*----------------------------------------
    Research activation Js 
  -----------------------------------------*/
  if (jQuery(".research-animation").length > 0) {
    let research = new Swiper(".research-animation", {
      spaceBetween: 0,
      centeredSlides: true,
      speed: 7000,
      autoplay: {
        delay: 0,
        reverseDirection: true,
      },
      loop: true,
      slidesPerView: "auto",
      allowTouchMove: false,
      disableOnInteraction: false,
      rtl: rtl_setting,
    });
  }
  /*----------------------------------------
    Testimonial activation Js 
  -----------------------------------------*/
  if (jQuery(".testimonial-active").length > 0) {
    let slider = new Swiper(".testimonial-active", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".testimonial-pagination",
        clickable: true,
      },
      rtl: rtl_setting,
    });
  }
  /*----------------------------------------
    Blog activation Js 
  -----------------------------------------*/
  if (jQuery(".blog-active").length > 0) {
    let project = new Swiper(".blog-active", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      allowTouchMove: true,
      observer: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".post-button-next",
        prevEl: ".post-button-prev",
      },
      rtl: rtl_setting,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 3,
        },
      },
    });
  }
  /*----------------------------------------
    Brand activation Js 
  -----------------------------------------*/
  if (jQuery(".brand-active").length > 0) {
    let project = new Swiper(".brand-active", {
      slidesPerView: 6,
      loop: true,
      allowTouchMove: true,
      observer: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      rtl: rtl_setting,
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    });
  }

  /*----------------------------------------
    Search js activation
  -----------------------------------------*/
  $(".bd-search-open-btn").on("click", function () {
    $(".bd-search-popup-area").addClass("bd-search-opened");
    $(".bd-search-overlay").addClass("bd-search-opened");
  });
  $(".bd-search-close-btn").on("click", function () {
    $(".bd-search-popup-area").removeClass("bd-search-opened");
    $(".bd-search-overlay").removeClass("bd-search-opened");
  });
  $(".bd-search-overlay").on("click", function () {
    $(".bd-search-popup-area").removeClass("bd-search-opened");
    $(".bd-search-overlay").removeClass("bd-search-opened");
  });


  // wow activation 
  new WOW().init();


})(jQuery);
