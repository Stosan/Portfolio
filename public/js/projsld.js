$(function(){
    var project = $(".pr");
$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll >= 500){
        $(".pr").addClass("slida");
    }/*else{
        $(".pr").removeClass("slida");
    }*/
});
});