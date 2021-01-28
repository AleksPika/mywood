(function($){
    "use_strict";

    var $slideImg, $slideIndx;
    $("#slider > .slide").each( function(i) {
        $slideImg = $("> img", this).attr("src");
        $slideIndx = $(this).attr("slide-indx");
        if( $(this).hasClass("active") )
            $("<div class='slide-control active' slide-indx='" + $slideIndx + "'> <img src='" + $slideImg + "' alt='' /> </div>").appendTo($("#slide-controls"));
        else
            $("<div class='slide-control' slide-indx='" + $slideIndx + "'> <img src='" + $slideImg + "' alt='' /> </div>").appendTo($("#slide-controls"));
    });

    var $slider = $("#slider"),
        $slide = $slider.find(".slide"),
        $slideIndx = 0,
        $slideMax = $slide.length;

    function change() {
        $slide.removeClass('active');
        $('.slide-control').removeClass('active');
        $slide.eq($slideIndx).addClass('active');
        $('.slide-control').eq($slideIndx).addClass('active');
        $slideIndx = ++$slideIndx % $slideMax;
    }
    /*$slider.mouseenter(function () {
        $slide.eq($indexImg).stop(true)
    });
    $slider.mouseleave(function () {
        change()
    });*/
    setTimeout(function repeat() {
      change();
      setTimeout(repeat, 7000);
    }, 7000);

    $(".slide-control").click( function() {
        $slideIndx = $(this).attr("slide-indx");
        $(".slide").removeClass('active');
        $(".slide-control").removeClass('active');
        $(this).addClass('active');
        $(".slide[slide-indx=" + $slideIndx + "]").addClass('active');
    });
})(jQuery);