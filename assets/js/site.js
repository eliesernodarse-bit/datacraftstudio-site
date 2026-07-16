(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var targets = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) { io.observe(el); });
})();

(function () {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var img = lightbox.querySelector('.lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var lastTrigger = null;

  function open(trigger) {
    var thumb = trigger.querySelector('img');
    lastTrigger = trigger;
    img.src = thumb.src;
    img.alt = thumb.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    lightbox.hidden = true;
    img.src = '';
    document.body.style.overflow = '';
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.gallery-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () { open(btn); });
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) close();
  });
})();
