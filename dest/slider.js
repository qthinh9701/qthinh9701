// ---SLIDER---
let $carousel = $(".slider__item-wrap");
$carousel.flickity({
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  autoPlay: 2500,
  draggable: true,
  prevNextButtons: false,
  pageDots: false,
});

$(".slider__bottom .prev").on("click", function () {
  $carousel.flickity("previous");
});
$(".slider__bottom .next").on("click", function () {
  $carousel.flickity("next");
});
