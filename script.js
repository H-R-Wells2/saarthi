const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.35,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetId = entry.target.id;
        const correspondingLink = document.querySelector(`.right a[href="#${targetId}"]`);
        if (correspondingLink) {
          correspondingLink.style.color = '#ff6600';
        }
      } else {
        const targetId = entry.target.id;
        const correspondingLink = document.querySelector(`.right a[href="#${targetId}"]`);
        if (correspondingLink) {
          correspondingLink.style.color = 'white';
        }
      }
    });
  }, options);

  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });