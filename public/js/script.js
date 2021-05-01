$(document).ready(function() {

  //dropdown
   // Drop down menu on mobile screens
   $(".mob-nav").click(function() {
    if ($(".dropDN-menu").css("display") === "none") {
      $(".dropDN-menu").css("display", "block");
    } else {
      $(".dropDN-menu").css("display", "none");
    }
  });
  $(".dropDN-menu a").click(function() {
    $(".dropDN-menu").css("display","none");
  });
//shadow function
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 30) {
          $("#nav").addClass("head-shadow");
      } else {
        $("#nav").removeClass("head-shadow");
      }
  })

  //menubar
   // effect for portfolio section
   $(".item").mouseenter(function() {
    $(".color").css("display","none");
    $(this).find(".color").css("display","block");
  });
  $(".item").mouseleave(function() {
    $(".color").css("display","block");
  });
})