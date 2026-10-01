(() => {
  const carousel = document.querySelector('.impact-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.impact-track');
  const highlights = track.querySelector('.impact-strip');
  // Keep each tile's time on screen consistent as highlights are added
  track.style.setProperty('--highlights-duration', `${highlights.children.length * 15}s`);
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let duplicate;

  const updateMotion = () => {
    if (motionPreference.matches) {
      duplicate?.remove();
      duplicate = undefined;
      delete carousel.dataset.animated;
      carousel.removeAttribute('tabindex');
      return;
    }

    if (duplicate) return;
    duplicate = highlights.cloneNode(true);
    duplicate.classList.add('impact-duplicate');
    duplicate.setAttribute('aria-hidden', 'true');
    duplicate.removeAttribute('aria-label');
    track.append(duplicate);
    carousel.dataset.animated = 'true';
    carousel.tabIndex = 0;
  };

  motionPreference.addEventListener('change', updateMotion);
  updateMotion();
})();
