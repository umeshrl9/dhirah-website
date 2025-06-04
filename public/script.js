//reveal on scroll
document.getElementById('yearFooter').textContent = new Date().getFullYear();

ScrollReveal().reveal('.reveal-on-scroll', {
  distance: '50px',    // How much to move the element (e.g., 50px down)
  origin: 'bottom',    // Where the animation starts from (e.g., bottom)
  duration: 800,       // Animation duration (in ms)
  easing: 'ease-in-out', // Easing function for the animation
  reset: true          // If true, the element will animate again when it comes back into view
});

// Bootstrap form validation
(function () {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()

if (document.querySelector(".mySwiper")) {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    // Remove navigation arrows as requested
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },

    freeMode: false,   // disable free mode to enforce snapping to slides

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    // Enable grabbing cursor for better UX
    grabCursor: true,
  });
}



