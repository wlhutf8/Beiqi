
$(function(){
    var _height = window.innerHeight
    var _width =  window.innerWidth

    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(1).addClass('on')

    $(".question").addClass('cur');

    $(".same-mobile .top").click(function(){
        if ($(this).hasClass('cur')) {
            $(this).siblings('.bot').slideUp();
            $(this).removeClass('cur')
        }else{
            $(this).siblings('.bot').slideDown();
            $(this).addClass('cur')
        }
    });
    $(".question li .top").eq(0).addClass("cur");
    $(".question li .top").eq(0).siblings('.bot').slideDown();
    $(".question li .top").click(function(){
        if ($(this).hasClass('cur')) {
            $(this).removeClass('cur');
            $(this).siblings('.bot').slideUp();
        }else{
            $(this).addClass('cur')
            $(this).siblings('.bot').slideDown();
            $(this).parents("li").siblings('').find('.bot').slideUp();
            $(this).parents("li").siblings('').find('.top').removeClass('cur');
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
        var k = $(".question li").width() - 200;
        $(".question li .top .te").width(k)
        $(".question li .bot .te").width(k)
    }else{
        var k = $(".question li").width() - 90;
        $(".question li .top .te").width(k)
        $(".question li .bot .te").width(k)
    }

    $(".question li .top .te p").each(function(){
        var pl = $(this).height()
        if (_width<1024 && pl>24) {
            $(this).parent(".te").addClass('cur')
        }else{
            $(this).parent(".te").removeClass("cur")
        }
    });



}
