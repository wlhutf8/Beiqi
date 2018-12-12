$(function(){
    $(".header").addClass('kon');
    $(".story").addClass('cur')

    var _height = window.innerHeight
    var _width =  window.innerWidth

    $(".same-mobile .top").click(function(){
        if ($(this).hasClass('cur')) {
            $(this).siblings('.bot').slideUp();
            $(this).removeClass('cur')
        }else{
            $(this).siblings('.bot').slideDown();
            $(this).addClass('cur')
        }
    });
    resize()

    $(window).resize(function(){
        resize()
    });

    $(window).scroll(function(){
        resize()
    })
})

function resize(){
    var _height = window.innerHeight
    var _width =  window.innerWidth

    if (_width>=1024) {
        var k = $(window).scrollTop()/10;
        $(".sbanenr").css("background-position-y",-k);
    }else{
        return false
    }

}

$(window).scroll(function(){
    var k = $(window).height()/5*4;
    if ($(window).scrollTop()>=$(".story .stext").offset().top - k) {
        Enter($(".story .stext").children('').eq(0), "top", 0, 3, 700, 200);
    }
    if ($(window).scrollTop()>=$(".landscape").offset().top - k) {
        $(".landscape .cbox").addClass('cur');
        Enter($(".landscape").children('').eq(0), "top", 0, 2, 700, 200);
    }
    if ($(window).scrollTop()>=$(".story .send").offset().top - k) {
        Enter($(".story .send").children('').eq(0), "top", 0, 4, 700, 200);
    }
})

