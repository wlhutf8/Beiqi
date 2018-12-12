$(function(){
    $(".header").addClass('kon');

    $(".platform-price .frr").addClass('cur')
    $(".platform-price .fll").addClass('cur')

    $(".same-mobile .top").click(function(){
        if ($(this).hasClass('cur')) {
            $(this).siblings('.bot').slideUp();
            $(this).removeClass('cur')
        }else{
            $(this).siblings('.bot').slideDown();
            $(this).addClass('cur')
        }
    });
})

