(function ($) {
  "use strict";

  /* Sticky header & tombol scroll to top */
  var lastScrollTop = "";
  var scrollToTopBtn = ".scrollToTop";

  function stickyMenu($targetMenu, $toggleClass) {
    var st = $(window).scrollTop();
    if (st > 600) {
      if (st > lastScrollTop) {
        $targetMenu.removeClass($toggleClass);
      } else {
        $targetMenu.addClass($toggleClass);
      }
    } else {
      $targetMenu.removeClass($toggleClass);
    }
    lastScrollTop = st;
  }

  $(window).on("scroll", function () {
    stickyMenu($(".sticky-header"), "active");
    if ($(this).scrollTop() > 400) {
      $(scrollToTopBtn).addClass("show");
    } else {
      $(scrollToTopBtn).removeClass("show");
    }
  });

  /* Background dari atribut data-vs-img */
  $(".background-image").each(function () {
    $(this).css("background-image", "url(" + $(this).attr("data-vs-img") + ")");
  });

  /* Counter (hanya di halaman yang memuat counterup + waypoints) */
  if ($.fn.counterUp && $(".counter").length) {
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  }

  /* Hero slider (LayerSlider, hanya di index) */
  $(".vs-hero-carousel").each(function () {
    var vsHslide = $(this);

    // Gaya skin "v6" sudah ada di layerslider.min.css, jadi file skin tidak perlu dimuat
    vsHslide.addClass("ls-v6");

    vsHslide.layerSlider({
      maxRatio: 1,
      type: "responsive",
      pauseOnHover: false,
      navPrevNext: vsHslide.data("navprevnext") ? true : false,
      hoverPrevNext: false,
      hoverBottomNav: false,
      navStartStop: false,
      navButtons: false,
      loop: true,
      autostart: false,
      height: vsHslide.data("height") || 1080,
      responsiveUnder: 1220,
      layersContainer: 1220,
      showCircleTimer: false,
      skinsPath: "",
      thumbnailNavigation: true,
    });
  });

  /* Popup gambar (Magnific Popup) */
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* Tombol sosial media di kartu tim (about) */
  document.querySelectorAll(".vs-toggler").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var menu = this.parentElement.querySelector(".toggle-menu");
      if (menu.classList.contains("show")) {
        btn.classList.remove("active");
        menu.classList.remove("show");
      } else {
        document.querySelectorAll(".toggle-menu.show").forEach(function (item) {
          item.classList.remove("show");
        });
        document.querySelectorAll(".vs-toggler.active").forEach(function (item) {
          item.classList.remove("active");
        });
        btn.classList.add("active");
        menu.classList.add("show");
      }
    });
  });
})(jQuery);

/* Menu mobile */
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");
  const mobileMenuClose = document.getElementById("mobileMenuClose");

  function closeMenu() {
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Tombol menu di header & sticky header
  document.querySelectorAll(".vs-menu-toggle").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      mobileMenuOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  mobileMenuClose.addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

  mobileMenuOverlay.addEventListener("click", function (e) {
    if (e.target === mobileMenuOverlay) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenuOverlay.classList.contains("active")) {
      closeMenu();
    }
  });
});

/* Nonaktifkan klik kanan & shortcut developer tools */
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("keydown", function (e) {
  const key = e.key.toLowerCase();
  if (
    (e.ctrlKey && key === "u") ||
    (e.ctrlKey && e.shiftKey && (key === "i" || key === "c")) ||
    e.key === "F12"
  ) {
    e.preventDefault();
  }
});
