/* Lexiconic Interiors - small enhancements (carousels + contact form) */

(function () {
  "use strict";

  /* ---------- Phone menu (hamburger) ---------- */

  var header = document.querySelector(".site-header");
  var toggle = header && header.querySelector(".menu-toggle");
  var menu = document.getElementById("site-menu");

  if (header && toggle && menu) {
    var setOpen = function (open) {
      header.classList.toggle("menu-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    var isOpen = function () {
      return toggle.getAttribute("aria-expanded") === "true";
    };

    toggle.addEventListener("click", function (event) {
      var open = !isOpen();
      setOpen(open);
      // Keyboard users land on the first link; touch users are left alone.
      if (open && event.detail === 0) {
        var first = menu.querySelector("a");
        if (first) first.focus();
      }
    });

    // Close with Esc, by tapping outside, by choosing a link, or when the
    // window grows to desktop width.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isOpen()) {
        setOpen(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (event) {
      if (isOpen() && !header.contains(event.target)) setOpen(false);
    });
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });
    window.matchMedia("(min-width: 761px)").addEventListener("change", function (event) {
      if (event.matches) setOpen(false);
    });
  }

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

  // The form sends its message by email through FormSubmit (formsubmit.co).
  // The address lives in the form's action in contact.html.
  var form = document.getElementById("contact-form");
  if (form) {
    var status = document.getElementById("form-status");
    var button = form.querySelector("button[type=submit]");
    var buttonText = button ? button.textContent : "Submit";
    var FALLBACK_EMAIL = "lexiconicinteriors@gmail.com";

    var show = function (html, isError) {
      status.innerHTML = html;
      status.classList.toggle("is-error", !!isError);
    };

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (button.disabled) return;

      // Spam trap: a real person never fills in the hidden field.
      var trap = form.querySelector("[name=_honey]");
      if (trap && trap.value) return;

      // Send without leaving the page (FormSubmit's "ajax" address).
      var url = form.getAttribute("action");
      if (url.indexOf("/ajax/") === -1) url = url.replace("formsubmit.co/", "formsubmit.co/ajax/");

      button.disabled = true;
      button.textContent = "Sending\u2026";
      show("", false);

      fetch(url, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (response) {
          return response.json().then(
            function (data) { return { ok: response.ok, data: data }; },
            function () { return { ok: response.ok, data: {} }; }
          );
        })
        .then(function (result) {
          var success = result.ok && String(result.data.success) === "true";
          if (!success) throw new Error("not sent");
          form.reset();
          show("Thank you! Your message was sent, and we\u2019ll be in touch soon.", false);
        })
        .catch(function () {
          show(
            "Sorry, your message couldn\u2019t be sent. Please try again, or email us at " +
            '<a href="mailto:' + FALLBACK_EMAIL + '">' + FALLBACK_EMAIL + "</a>.",
            true
          );
        })
        .then(function () {
          button.disabled = false;
          button.textContent = buttonText;
        });
    });
  }
})();
