(() => {
  const panel = document.querySelector('#games');
  const link = document.querySelector('.games');
  const heading = document.querySelector('#games-heading');
  function update() {
    const open = location.hash === '#games';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-modal', 'true');
    panel.setAttribute('aria-hidden', String(!open));
    document.querySelector('.identity').inert = open;
    document.querySelector('footer').inert = open;
    if (open) heading.focus({ preventScroll: true });
  }
  function close() {
    history.replaceState(null, '', location.pathname + location.search);
    update();
    link.focus({ preventScroll: true });
  }
  panel.querySelector('.close').addEventListener('click', event => { event.preventDefault(); close(); });
  panel.addEventListener('click', event => { if (event.target === panel) close(); });
  document.addEventListener('keydown', event => {
    if (location.hash !== '#games') return;
    if (event.key === 'Escape') { event.preventDefault(); close(); }
    if (event.key === 'Tab') { event.preventDefault(); panel.querySelector('.close').focus(); }
  });
  window.addEventListener('hashchange', update);
  update();
})();
