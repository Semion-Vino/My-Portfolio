export default function () {
  const defaultProps = {
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    distance: '30px',
    duration: 1000,
    desktop: true,
    mobile: true
  };

  /* Section Title */
  ScrollReveal().reveal('.section-title', {
    ...defaultProps,
    delay: 300,
    distance: '0px',
    origin: 'bottom'
  });

  /* Hero Section */
  ScrollReveal().reveal('.hero-title', {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('.hero-cta', {
    ...defaultProps,
    delay: 1000,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('.jumbotron', {
    ...defaultProps,
    delay: 350,
    origin: window.innerWidth > 768 ? 'right' : 'bottom'
  });
  ScrollReveal().reveal('.arrow', {
    ...defaultProps,
    delay: 700,
    origin: window.innerWidth > 768 ? 'top' : 'bottom'
  });

  /* About Section */
  ScrollReveal().reveal('.about-wrapper__image', {
    ...defaultProps,
    delay: 600,
    origin: 'bottom'
  });
  ScrollReveal().reveal('.about-wrapper__info', {
    ...defaultProps,
    delay: 1000,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('.arrow2', {
    ...defaultProps,
    delay: 600,
    origin: window.innerWidth > 768 ? 'top' : 'bottom'
  });
  /*SKILLS*/
  ScrollReveal().reveal('.section title', {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('#skills .about-wrapper', {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('#skills .skill-row', {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? 'right' : 'bottom'
  });

  /* Projects Section */
  ScrollReveal().reveal('.project-wrapper__text', {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? 'left' : 'bottom'
  });
  ScrollReveal().reveal('.project-wrapper__image', {
    ...defaultProps,
    delay: 500,
    origin: window.innerWidth > 768 ? 'right' : 'bottom'
  });

  /* Contact Section */
  ScrollReveal().reveal('.contact-wrapper', {
    ...defaultProps,
    delay: 500,
    origin: 'bottom'
  });
}