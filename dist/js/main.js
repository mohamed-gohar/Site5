$(function () {
  $(".header").css("paddingTop", $(".nav").innerHeight());

  //menu display on phones
  $(".nav-icon").click(function () {
    $(".full-nav").addClass("open");
    $("body").css({ overflow: "hidden", "padding-right": "12px" });
  });
  $(".nav-close").click(function () {
    $(".full-nav").removeClass("open");
    setTimeout(() => {
      $("body").css({ overflow: "auto", "padding-right": "0" });
    }, 350);
  });

  //animate navbar
  $(window).scroll(function () {
    let st = $(window).scrollTop();
    if (st >= $(".nav").innerHeight()) {
      $(".nav").addClass("sticky");
    } else {
      $(".nav").removeClass("sticky");
    }
  });

  // active class
  $("nav li a").click(function (e) {
    e.preventDefault();
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
    $("body, html").animate(
      {
        scrollTop:
          $("#" + $(this).data("sec")).offset().top -
          $(".nav").innerHeight() +
          2 +
          "px",
      },
      1000
    );
  });

  $(window).scroll(function () {
    $(".block").each(function () {
      if (
        $(window).scrollTop() >=
        $(this).offset().top - $(".nav").innerHeight()
      ) {
        let blockID = $(this).attr("id");
        $("nav li a").removeClass("active");
        $(`nav li a[data-sec='${blockID}']`).addClass("active");
      }
    });
  });

  //plugins======
  //slider
  $(".bxslider").bxSlider({
    mode: "horizontal",
    moveSlides: 1,
    slideMargin: 5,
    infiniteLoop: true,
    minSlides: 1,
    maxSlides: 1,
    speed: 1300,
    responsive: true,
    auto: true,
    pause: 5000,
    autoHover: true,
    touchEnabled: false,
  });

  //popup
  // $(".work").magnificPopup({
  //   delegate: "a",
  //   type: "image",
  //   gallery: {
  //     enabled: true,
  //   },
  // });
  $(".work").magnificPopup({
    delegate: "a",
    type: "image",
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: "mfp-with-zoom mfp-img-mobile",
    image: {
      verticalFit: true,
    },
    gallery: {
      enabled: true,
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find("img");
      },
    },
  });

  //swiper slide
  if ($(".swiper-container").hasClass("team-member-slider")) {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      allowTouchMove: true,
      loop: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      effect: "coverflow",
      grabCursor: true,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          centeredSlides: false,
          effect: "slide",
        },
      },
    });
  }

  //carousel
  $(".news-slider").owlCarousel({
    items: 3,
    autoplay: true,
    dots: false,
    nav: false,
    loop: true,
    smartSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
    },
  });

  //count up
  $(".counter").counterUp({
    delay: 5,
    time: 1500,
  });

  //clients
  $("#clients-list").owlCarousel({
    items: 5,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoPlayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
        autoplay: true,
      },
      576: {
        items: 3,
        autoplay: true,
      },
      768: {
        items: 5,
        autoplay: false,
      },
    },
  });
});
