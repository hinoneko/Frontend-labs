(() => {
  const slide = document.getElementById("bannerBaseSlide");
  if (!slide) return;

  const left = document.querySelector(".banner-base__arrow--left");
  const right = document.querySelector(".banner-base__arrow--right");
  const dotsWrap = document.querySelector(".banner-base__dots");

  const images = [
    "./img/banner-base/banner-base1.png",
    "./img/banner-base/banner-base2.png",
  ];

  let idx = Number(slide.dataset.slide || 0);
  idx = Number.isFinite(idx) ? idx : 0;
  idx = Math.max(0, Math.min(idx, images.length - 1));

  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    images.forEach((_, i) => {
      const d = document.createElement("span");
      d.className = "dot" + (i === idx ? " is-active" : "");
      d.addEventListener("click", () => {
        idx = i;
        slide.dataset.slide = String(idx);
        render();
      });
      dotsWrap.appendChild(d);
    });
  }

  function render() {
    slide.style.backgroundImage = `url("${images[idx]}")`;
    const dots = Array.from(document.querySelectorAll(".banner-base__dots .dot"));
    dots.forEach((d, i) => d.classList.toggle("is-active", i === idx));
  }

  function prev() {
    idx = (idx - 1 + images.length) % images.length;
    slide.dataset.slide = String(idx);
    render();
  }

  function next() {
    idx = (idx + 1) % images.length;
    slide.dataset.slide = String(idx);
    render();
  }

  left?.addEventListener("click", prev);
  right?.addEventListener("click", next);

  buildDots();
  render();
})();
