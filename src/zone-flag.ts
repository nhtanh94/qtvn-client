(window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
(window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
(window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
(window as any).__Zone_enable_cross_context_check = true;

if ((window as any).__zone_symbol__requestAnimationFrame) {
  window.requestAnimationFrame = (
    window as any
  ).__zone_symbol__requestAnimationFrame;
  window.cancelAnimationFrame = (
    window as any
  ).__zone_symbol__cancelAnimationFrame;
  (window as any).webkitRequestAnimationFrame = (
    window as any
  ).__zone_symbol__webkitRequestAnimationFrame;
}
