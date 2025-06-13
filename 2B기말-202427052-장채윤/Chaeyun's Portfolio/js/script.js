window.addEventListener('scroll', function() {
  const items = document.querySelectorAll('.timeline-item');
  const trigger = window.innerHeight / 2;
  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < trigger && rect.bottom > trigger) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});
