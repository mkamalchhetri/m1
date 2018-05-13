$(document).ready(function() {
    $("#banner").carousel({pause: "hover"});
    $(".carousel-control-prev-icon").hide();
    $(".carousel-control-next-icon").hide();

    $(".carousel-control-prev").onmouseover(function(){
        $(".carousel-control-prev-icon").show();
    });

    $(".carousel-control-next").onmouseover(function(){
        $(".carousel-control-next-icon").show();
    });

    $(".carousel-control-prev").onmouseout(function(){
        $(".carousel-control-prev-icon").hide();
    });

    $(".carousel-control-next").onmouseout(function(){
        $(".carousel-control-next-icon").hide();
    });
});