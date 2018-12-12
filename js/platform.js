$(function(){
    // setTimeout(function(){
    //        $(".header").addClass('kon');
    //    },100)

    $(".header").addClass('kon');

    Enter($(".platform .hep").children('').eq(0), "top", 0, 3, 600, 400);

    setTimeout(function(){
        Enter($(".platform .hethr>.w1400").children('').eq(0), "left", 0, 3, 600, 400);
    },1000)

    $(".same-mobile .top").click(function(){
        if ($(this).hasClass('cur')) {
            $(this).siblings('.bot').slideUp();
            $(this).removeClass('cur')
        }else{
            $(this).siblings('.bot').slideDown();
            $(this).addClass('cur')
        }
    })


    $(window).scroll(function(){
        var k = $(window).height()/5*4;
        if ($(window).scrollTop()>=$(".platform .car").offset().top - k) {
            $(".platform .car .titt").addClass('cur');
            setTimeout(function(){
                Enter($(".platform .car>.w1400").children('').eq(0), "left", 0, 3, 600, 400);
            },1000)
        }
    })




})

