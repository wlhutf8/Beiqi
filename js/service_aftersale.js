var _height = window.innerHeight
var _width =  window.innerWidth

$(function(){


    $(".same-mobile .top").click(function(){
        if ($(this).hasClass('cur')) {
            $(this).siblings('.bot').slideUp();
            $(this).removeClass('cur')
        }else{
            $(this).siblings('.bot').slideDown();
            $(this).addClass('cur')
        }
    });

    var swiper = new Swiper('.service-nav', {
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 20,
        nextButton: '.servicenav-box .next',
        prevButton: '.servicenav-box .prev',
    });

    resize()
})

$(window).resize(function(){
    var _height = window.innerHeight
    var _width =  window.innerWidth

    resize()
});


function resize(){
    if (_width>1024) {
        var swiper = new Swiper('.service-nav', {
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 20,
            nextButton: '.servicenav-box .next',
            prevButton: '.servicenav-box .prev',
        });
    }else{
        var swiper = new Swiper('.service-nav', {
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 10,
            nextButton: '.servicenav-box .next',
            prevButton: '.servicenav-box .prev',
        });
    }

    setTimeout(function(){
        if ($(".servicenav-box .next").hasClass('swiper-button-disabled')) {
            $(".servicenav-box .next").hide()
            $(".servicenav-box .prev").hide()
        }
    },1000)

    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(1).addClass('on')
}