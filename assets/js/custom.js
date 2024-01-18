(function () {
  ("use strict");

  //Optimization Slider
  $(document).ready(function () {
    $(".testimonial-slider").slick({
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      animation: true,
      arrows: true,
      prevArrow:
        '<span class="slick-prev"><i class="bi bi-arrow-right"></i></span>',
      nextArrow:
        '<span class="slick-next"><i class="bi bi-arrow-left"></i></span>',
      speed: 1000,
      fade: false,
      cssEase: "ease",
    });
  });

  // counterUp
  $(document).ready(function () {
    $(".odometer-wrapper").appear(function () {
      let count = $(this).attr("data-count");
      let odometer = $(this).closest(".odometer-wrapper").find(".odometer");

      setTimeout(function () {
        odometer.html(count);
      }, 500);
    });
  });

  /*------------- preloader js --------------*/
  let percentage = 0;
  let LoadingCounter = setInterval(function () {
    if (percentage <= 100) {
      $("#loading-screen ").css("opacity", 100 - percentage);
      $("#loading-screen .loading-counter").text(percentage + "%");
      $("#loading-screen .bar").css("width", (100 - percentage) / 2 + "%");
      $("#loading-screen .progress-line").css(
        "transform",
        "scale(" + percentage / 100 + ")"
      );
      percentage++;
    } else {
      $("#loading-screen").fadeOut(300);
      setTimeout(() => {
        $("#loading-screen").remove();
      }, 300);
      clearInterval(LoadingCounter);
    }
  }, 10);

  // Venubox

  $(".venobox").venobox({
    numeratio: true,

    infinigall: true,
  });

  //AOS Anomation
  AOS.init();

  //Scroll To Active Navbar

  const options = {
    rootMargin: "-50px 0px -50px 0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`.portfolio-navbar a[href="#${id}"]`);

      if (link !== null) {
        if (entry.isIntersecting) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }, options);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    observer.observe(section);
  });

  //Go TO Top

  $(document).ready(function () {
    $(".scroll-top-inner").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 500);
      return false;
    });

    function handleScrollbar() {
      const bHeight = $("body").height();
      const scrolled = $(window).innerHeight() + $(window).scrollTop();

      let percentage = (scrolled / bHeight) * 100;

      if (percentage > 100) percentage = 100;

      $(".scroll-top-inner .bar-inner").css("width", percentage + "%");
    }

    $(window).on("scroll", function () {
      handleScrollbar();
    });
  });
})(window.jQuery);
