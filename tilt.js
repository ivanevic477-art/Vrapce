// 3D efekt: kartice se naginju prema mišu (perspektiva), ne radi na dodir ni uz "reduced motion".
const SEL = ".card,.stat,.match,.player,.split-img,.player-photo,.hero-logo,.sponsors img";
const ok = matchMedia("(hover:hover) and (pointer:fine)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches;
if (ok) {
  let cur = null;
  const reset = el => { if (el) { el.style.transform = ""; el.classList.remove("tilting"); } };
  addEventListener("pointermove", e => {
    const el = e.target.closest && e.target.closest(SEL);
    if (el !== cur) { reset(cur); cur = el; }
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    const max = el.matches(".hero-logo,.player-photo,.split-img") ? 16 : 9;
    el.classList.add("tilting");
    el.style.transform = `perspective(700px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateZ(14px)`;
    el.style.setProperty("--mx", `${(x + .5) * 100}%`);
    el.style.setProperty("--my", `${(y + .5) * 100}%`);
  }, { passive: true });
  document.addEventListener("pointerleave", () => { reset(cur); cur = null; });
}
