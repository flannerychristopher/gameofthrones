$(document).ready(function() {

  $(function() {
    $('#slides').slidesjs({
      width: 800,
      navigation: false,
      pagination: false,
      effect: {
        slide: { speed: 2000 }
      },
      play:{
        active: false,
        effect: "slide",
        auto: true,
        interval: 6000,
        pauseOnHover: true,
        restartDelay: 500
      },
      callback: {
        loaded: function(number) {
          $("#slidertext1").delay(500).fadeIn(500);
        },
        start: function(number) {
          $("#slidertext" + number).fadeOut(400);
        },
        complete: function(number) {
          $("#slidertext" + number).delay(500).fadeIn(500);
        }
      }
    });
  });





























});
