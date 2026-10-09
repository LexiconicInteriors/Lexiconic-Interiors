/* Lexiconic Interiors - small enhancements (carousels + contact form) */

(function () {
  "use strict";

  /* ---------- Photo carousels (Featured Projects) ---------- */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector(".carousel-track");
    var prev = root.querySelector(".carousel-btn.prev");
    var next = root.querySelector(".carousel-btn.next");
    if (!track || !prev || !next) return;

    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var hasOverflow = max > 2;
      prev.classList.toggle("is-visible", hasOverflow && track.scrollLeft > 2);
      next.classList.toggle("is-visible", hasOverflow && track.scrollLeft < max - 2);
    }

    function step(direction) {
      track.scrollBy({
        left: direction * track.clientWidth * 0.9,
        behavior: reduceMotion ? "auto" : "smooth"
      });
    }

    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    update();
  });

  /* ---------- Photo popup (Featured Projects) ---------- */

  var box = document.getElementById("lightbox");

  if (box && typeof box.showModal === "function") {
    var boxImg = document.createElement("img");
    boxImg.alt = "";
    box.appendChild(boxImg);

    var opener = null;
    var fallbackSrc = "";

    // If the full-size file is missing, show the tile photo instead.
    boxImg.addEventListener("error", function () {
      if (fallbackSrc && boxImg.getAttribute("src") !== fallbackSrc) {
        boxImg.src = fallbackSrc;
      } else {
        boxImg.classList.remove("is-loading");
      }
    });

    boxImg.addEventListener("load", function () {
      boxImg.classList.remove("is-loading");
    });

    document.querySelectorAll("[data-lightbox]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        var thumb = link.querySelector("img");
        opener = link;
        fallbackSrc = thumb ? (thumb.currentSrc || thumb.src) : "";
        boxImg.alt = thumb ? thumb.alt : "";
        boxImg.classList.add("is-loading");
        boxImg.src = link.href;
        box.showModal();
        document.documentElement.classList.add("lightbox-open");
      });
    });

    // Click anywhere except the photo itself (including the X) to close.
    // The Esc key also closes it.
    box.addEventListener("click", function (event) {
      if (event.target !== boxImg) box.close();
    });

    box.addEventListener("close", function () {
      document.documentElement.classList.remove("lightbox-open");
      boxImg.removeAttribute("src");
      if (opener) opener.focus();
    });
  }

  /* ---------- Contact form ---------- */

  var form = document.getElementById("contact-form");
  if (form) {
    var TO = "info@lexiconicinteriors.com";
    var status = document.getElementById("form-status");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();

      var subject = "Website inquiry from " + name;
      var body = message + "\n\n" + name + "\n" + email;

      window.location.href =
        "mailto:" + TO +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (status) {
        status.textContent =
          "Your email app should open with your message ready to send. " +
          "If it doesn\u2019t, you can email us at " + TO + ".";
      }
    });
  }
})();
