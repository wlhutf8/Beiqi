$(function(){
    var _height = window.innerHeight
    var _width =  window.innerWidth

    $(".header").addClass('kon');
    $(".app").addClass('cur');

    setTimeout(function(){
        $(".app .sbanner .frr").addClass('cur')
        $(".app .sbanner .fll").addClass('cur')
    },1000)


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
})

function resize(){
    var _height = window.innerHeight
    var _width =  window.innerWidth

    if (_width>=1024) {
        var k = $(window).scrollTop()/10;
        $(".sbanenr").css("background-position-y",k);
    }else{
        return false
    }

}

