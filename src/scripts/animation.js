// Scroll Reveal
window.sr = ScrollReveal();

// Animación a navbar
sr.reveal('.nav', {
  distance: '50px',
  duration: 1000,
  origin: 'top'
});

// Animación al texto central
sr.reveal('.txt', {
  distance: '200px',
  duration: 2000,
  origin: 'top',
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scrolling al navbar
$(window).on('scroll', function() {
  if ($(window).scrollTop()) {
    $('#navbar-scrollspy').addClass('nav_navbar');
  } else {
    $('#navbar-scrollspy').removeClass('nav_navbar');
  }
});
