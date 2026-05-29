// Scroll-triggered section reveals
const sections = document.querySelectorAll('section');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
sections.forEach(s => io.observe(s));

// Stagger exp-content reveals inside sections
document.querySelectorAll('.exp-content, .edu-content').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.07}s`;
});
