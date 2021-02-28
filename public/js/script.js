$(document).ready(function() {
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 30) {
          $("#nav").addClass("head-shadow");
      } else {
        $("#nav").removeClass("head-shadow");
      }
  })
})