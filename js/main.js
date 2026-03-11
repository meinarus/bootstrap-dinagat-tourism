const navbar = document.querySelector('.navbar-home');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      if (window.innerWidth > 991.98) {
        setNavbarColors('#fff');
      }
    } else {
      navbar.classList.remove('scrolled');
      if (window.innerWidth > 991.98) {
        setNavbarColors('var(--ink)');
      }
    }
  });

  function setNavbarColors(color) {
    const brand = navbar.querySelector('.navbar-brand');
    const links = navbar.querySelectorAll('.nav-link');
    const toggler = navbar.querySelector('.navbar-toggler');
    
    if (brand) brand.style.color = color;
    links.forEach(link => link.style.color = color);
    
    if (color === '#fff') {
       if (toggler) toggler.style.borderColor = 'rgba(255, 255, 255, 0.35)';
    } else {
       if (toggler) toggler.style.borderColor = 'rgba(35, 49, 59, 0.35)';
    }
  }
}
