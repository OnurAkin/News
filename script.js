$(document).ready(function() {
  // Owl Carousel'i etkinleştirme
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoWidth:true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});