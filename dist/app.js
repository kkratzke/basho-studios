(() => {
  const panel = document.querySelector('#games');
  const trigger = document.querySelector('.games');
  if (!panel || !trigger || typeof panel.showModal !== 'function') return;
  const closeButton = panel.querySelector('.close');
  const sync = () => {
    trigger.setAttribute('aria-expanded', String(panel.open));
    if (panel.open) return;
    if (location.hash === '#games') history.replaceState(null, '', location.pathname + location.search);
    trigger.focus({ preventScroll: true });
  };
  const close = () => { if (panel.open) { panel.close(); sync(); } };
  function open() {
    if (!panel.open) panel.showModal();
    trigger.setAttribute('aria-expanded', 'true');
  }
  trigger.addEventListener('click', event => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    open();
  });
  closeButton.addEventListener('click', close);
  panel.addEventListener('click', event => {
    if (event.target !== panel) return;
    const bounds = panel.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
  });
  panel.addEventListener('close', sync);
  panel.addEventListener('cancel', event => { event.preventDefault(); close(); });
  panel.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...panel.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex="0"]')].filter(element => element.getClientRects().length);
    const first = controls[0], last = controls[controls.length - 1];
    if (!first) return;
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  window.addEventListener('hashchange', () => {
    if (location.hash === '#games') open();
  });
  if (location.hash === '#games') open();
})();
