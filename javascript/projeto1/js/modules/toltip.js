export default function toltip() {}

const tooltips = document.querySelectorAll("[data-toltip");

tooltips.forEach((item) => {
  item.addEventListener("mouseover", onMouseOver);
});

function onMouseOver(event) {}

function criarTooltipBox() {
  const tooltipBox = createElement();
}
