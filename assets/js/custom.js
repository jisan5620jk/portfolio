(function () {
  ("use strict");

  // Disable right-click
  // document.addEventListener('contextmenu', (event) => {
  //   event.preventDefault();
  // });

  // // Disable common Developer Tools shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
  // document.addEventListener('keydown', (event) => {
  //   const forbiddenKeys = ['F12', 'I', 'i', 'U', 'u'];

  //   // Check for Ctrl+Shift+Key or Ctrl+Key combinations
  //   const isCtrlShiftCombo =
  //     event.ctrlKey && event.shiftKey && forbiddenKeys.includes(event.key);
  //   const isCtrlCombo = event.ctrlKey && forbiddenKeys.includes(event.key);

  //   if (event.key === 'F12' || isCtrlShiftCombo || isCtrlCombo) {
  //     event.preventDefault();
  //     alert(
  //       'Developer tools are disabled. Please respect the website’s security!'
  //     );
  //   }
  // });

  // // Detect if Developer Tools are open
  // const detectDevTools = () => {
  //   const widthThreshold = window.outerWidth - window.innerWidth > 200;
  //   const heightThreshold = window.outerHeight - window.innerHeight > 200;

  //   if (widthThreshold || heightThreshold) {
  //     alert('Developer tools are detected! Taking action now...');
  //     window.location.href = 'about:blank'; // Redirect or close the page
  //   }
  // };

  // Periodically check for Developer Tools every second
  // setInterval(detectDevTools, 1000);

  let device_width = window.innerWidth;

  // 21. gsap register
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // 22. gsap config
  gsap.config({
    nullTargetWarn: false,
    debug: false,
  });

  //Comment me out to see issue
  const smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    normalizeScroll: true,
    ignoreMobileResize: true,
    effects: true,
    preventDefault: true,
  });

  if (device_width > 576) {
    const smoother = ScrollSmoother.create({
      smooth: 2.2,
      effects: device_width < 992 ? false : true,
      smoothTouch: false,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
  }

  let targetElement = document.getElementById("smooth-content");

  if (targetElement) {
    gsap.to(window, { duration: 1, scrollTo: { y: "#" + targetElement.id } });
  } else {
    gsap.to(window, { duration: 1, scrollTo: 0 });
  }

  // Wait for the DOM to fully load
  document.addEventListener("DOMContentLoaded", function () {
    // Add click event to all menu links
    document.querySelectorAll(".portfolio-navbar ul li a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        // Use GSAP to animate the scroll
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: targetSection, autoKill: false },
          ease: "power2.inOut",
        });
      });
    });
  });

  //Testimonial Slider
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
      slidesToShow: 2,
      cssEase: "ease",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  //Pricing Slider
  $(document).ready(function () {
    $(".pricing-box-slider").slick({
      dots: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: true,
      prevArrow:
        '<span class="slick-prev"><i class="bi bi-arrow-right"></i></span>',
      nextArrow:
        '<span class="slick-next"><i class="bi bi-arrow-left"></i></span>',
      speed: 1000,
      fade: false,
      margin: 26,
      slidesToShow: 3,
      cssEase: "ease",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });

  // Odometer CounterUp
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
})(window.jQuery);
