// SCROLL ANIMATION
const elements = document.querySelectorAll('.card, .btn, .content-box');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));


// CURSOR
const cursor = document.querySelector('.cursor');
const dot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});