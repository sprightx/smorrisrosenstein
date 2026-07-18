document.addEventListener('DOMContentLoaded', function () {

  // ---- Email dialog ----
  var emailTrigger = document.getElementById('email-trigger');
  var emailDialog  = document.getElementById('email-dialog');
  if (emailTrigger && emailDialog) {
    var emailClose = emailDialog.querySelector('.email-dialog__close');
    emailTrigger.addEventListener('click', function () { emailDialog.showModal(); });
    emailClose.addEventListener('click',   function () { emailDialog.close(); });
    emailDialog.addEventListener('click',  function (e) { if (e.target === emailDialog) emailDialog.close(); });
  }

  // ---- Context Pipeline Diagram ----
  var canvas  = document.getElementById('ctx-canvas');
  var scaler  = document.getElementById('ctx-pipeline-scaler');
  if (!canvas || !scaler) return;

  // Render Lucide icons from data-i attributes
  document.querySelectorAll('[data-i]').forEach(function (el) {
    var i = document.createElement('i');
    i.setAttribute('data-lucide', el.getAttribute('data-i'));
    el.appendChild(i);
  });
  if (window.lucide) lucide.createIcons();

  // Build SVG connector wires
  var SVGNS     = 'http://www.w3.org/2000/svg';
  var fan       = document.getElementById('ctx-fan');
  var mainwires = document.getElementById('ctx-mainwires');
  var SRC_RIGHT_X = 368;          // 72 + 296
  var MCP_LEFT    = { x: 624, y: 568 }; // MCP node left-center

  function makePath(d, opts) {
    opts = opts || {};
    var p = document.createElementNS(SVGNS, 'path');
    p.setAttribute('d', d);
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', opts.stroke || '#E4F222');
    p.setAttribute('stroke-width', opts.w || 1.5);
    p.setAttribute('stroke-opacity', opts.o != null ? opts.o : 1);
    if (opts.dash)   p.setAttribute('stroke-dasharray', opts.dash);
    if (opts.marker) p.setAttribute('marker-end', 'url(#ctx-arrow)');
    if (opts.cap)    p.setAttribute('stroke-linecap', 'round');
    return p;
  }

  // Fan-in curves: each source card → MCP left-center
  document.querySelectorAll('.ctx-src').forEach(function (card) {
    var cy = parseFloat(card.dataset.cy);
    var mx = (SRC_RIGHT_X + MCP_LEFT.x) / 2;
    var d  = 'M ' + SRC_RIGHT_X + ' ' + cy +
             ' C ' + mx + ' ' + cy + ', ' + mx + ' ' + MCP_LEFT.y + ', ' + MCP_LEFT.x + ' ' + MCP_LEFT.y;
    // Static faint base
    fan.appendChild(makePath(d, { stroke: '#E4F222', w: 1.5, o: 0.22, cap: true }));
    // Animated flow dash
    var flow = makePath(d, { stroke: '#E4F222', w: 2, o: 0.85, dash: '2 12', cap: true });
    flow.style.animation = 'ctx-dashmove 1.6s linear infinite';
    fan.appendChild(flow);
  });

  // Straight arrows: MCP → Claude → Memory
  function straight(x1, x2, y) {
    mainwires.appendChild(makePath(
      'M ' + x1 + ' ' + y + ' L ' + (x2 - 2) + ' ' + y,
      { stroke: '#E4F222', w: 2.5, o: 0.85, marker: true, cap: true }
    ));
    var flow = makePath(
      'M ' + x1 + ' ' + y + ' L ' + (x2 - 10) + ' ' + y,
      { stroke: '#A8E6CF', w: 2.5, o: 0.9, dash: '3 14', cap: true }
    );
    flow.style.animation = 'ctx-dashmove 1.3s linear infinite';
    mainwires.appendChild(flow);
  }
  straight(774,  894,  568); // MCP right → Claude left
  straight(1134, 1264, 568); // Claude right → Memory left

  // Inject dash-offset animation keyframe
  var kf = document.createElement('style');
  kf.textContent = '@keyframes ctx-dashmove { to { stroke-dashoffset: -28; } }';
  document.head.appendChild(kf);

  // Scale canvas to fit its container
  function fitDiagram() {
    var s = scaler.offsetWidth / 1680;
    canvas.style.transform = 'scale(' + s + ')';
    scaler.style.height = (1000 * s) + 'px';
  }

  fitDiagram();
  window.addEventListener('resize', fitDiagram);
});
