  $('.carousel-slider').carousel({fullWidth: true, padding:0},setTimeout(autoplay, 4500));
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 9000);
     }