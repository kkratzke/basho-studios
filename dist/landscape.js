/* Raster-only landscape loop. No generator or per-frame JavaScript. */
(() => {
  const scene = document.querySelector('.landscape');
  const main = document.querySelector('main');
  const control = document.querySelector('.motion-toggle');
  const template = document.querySelector('#landscape-loop');
  if (!scene || !main || !control || !template || !Element.prototype.animate) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let track, animation, pending, userPaused = false, visible = true;
  const shouldPause = () => userPaused || preference.matches || document.hidden || !visible || !!document.querySelector('#games[open]');
  function sync() {
    const still = preference.matches;
    scene.classList.toggle('is-still', still);
    control.hidden = still || !animation;
    control.setAttribute('aria-pressed', String(userPaused));
    control.setAttribute('aria-label', userPaused ? 'Resume landscape motion' : 'Pause landscape motion');
    control.querySelector('.motion-label').textContent = userPaused ? 'Resume' : 'Pause';
    if (animation) shouldPause() ? animation.pause() : animation.play();
  }
  function fit() {
    if (!track) return;
    const width = Math.ceil(Math.max(main.clientWidth, main.clientHeight * 4));
    const duration = width / 8 * 1000;
    const progress = animation ? (Number(animation.currentTime) || 0) / animation.effect.getTiming().duration : 0;
    track.style.setProperty('--tile-width', `${width}px`);
    track.style.setProperty('--tile-height', `${width / 4}px`);
    if (!animation) {
      animation = track.animate([{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(-50%,0,0)' }], { duration, iterations: Infinity, easing: 'linear' });
    } else {
      animation.effect.updateTiming({ duration });
      animation.currentTime = progress * duration;
    }
    sync();
  }
  async function prepare() {
    if (track || pending || preference.matches) { sync(); return; }
    pending = true;
    const fragment = template.content.cloneNode(true);
    const candidate = fragment.querySelector('.landscape-track');
    // Let picture sources choose the viewport asset before decoding both copies.
    scene.append(fragment);
    try {
      await Promise.all([...candidate.querySelectorAll('img')].map(image => image.decode()));
      track = candidate;
      fit();
      scene.classList.add('is-ready');
    } catch {
      candidate.remove(); // Keep the existing still image if decoding fails.
    } finally { pending = false; sync(); }
  }
  control.addEventListener('click', () => { userPaused = !userPaused; sync(); });
  preference.addEventListener('change', () => { sync(); prepare(); });
  document.addEventListener('visibilitychange', sync);
  new ResizeObserver(fit).observe(main);
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(main);
  const games = document.querySelector('#games');
  if (games) new MutationObserver(sync).observe(games, { attributes: true, attributeFilter: ['open'] });
  prepare();
})();
