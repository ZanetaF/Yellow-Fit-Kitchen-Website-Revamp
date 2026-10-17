// Hanya transisi yang dipakai slider di index.html (transition2d: 1 saat swipe, 5 sebagai default)
var layerSliderTransitions = {
  t2d: [
    {
      name: "Sliding from right",
      rows: 1,
      cols: 1,
      tile: { delay: 0, sequence: "forward" },
      transition: { type: "slide", easing: "easeInOutQuad", duration: 1000, direction: "left" },
    },
    {
      name: "Sliding from left",
      rows: 1,
      cols: 1,
      tile: { delay: 0, sequence: "forward" },
      transition: { type: "slide", easing: "easeInOutQuad", duration: 1000, direction: "right" },
    },
    {
      name: "Sliding from bottom",
      rows: 1,
      cols: 1,
      tile: { delay: 0, sequence: "forward" },
      transition: { type: "slide", easing: "easeInOutQuad", duration: 1000, direction: "top" },
    },
    {
      name: "Sliding from top",
      rows: 1,
      cols: 1,
      tile: { delay: 0, sequence: "forward" },
      transition: { type: "slide", easing: "easeInOutQuad", duration: 1000, direction: "bottom" },
    },
    {
      name: "Crossfading",
      rows: 1,
      cols: 1,
      tile: { delay: 0, sequence: "forward" },
      transition: { type: "fade", easing: "easeInOutQuad", duration: 1000, direction: "left" },
    },
  ],
  t3d: [],
};
