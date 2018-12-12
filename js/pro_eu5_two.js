$(function(){
    $(".header").addClass('kon');

    $('.slick').slick({
        dots: true,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        draggable:false,

    });
    $('.slick').slickGoTo(0);
    $(window).scroll(function(){
        if($(window).scrollTop() > $("#box1").offset().top){
            $('#nav').fadeIn();
        } else {
            $('#nav').fadeOut();
        }
    });
    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750
    });
    $(".slick-initialized .slick-slide.slick-active").eq(1).addClass('kk')
    $(".slick-initialized .slick-slide.slick-active").eq(1).siblings('').removeClass('kk')
    $(".pro-ev160 .box7 .js6 button").click(function(){
        $(".slick-initialized .slick-slide.slick-active").eq(1).addClass('kk')
        $(".slick-initialized .slick-slide.slick-active").eq(1).siblings('').removeClass('kk')
    });

    var top = $(window).scrollTop();
    var h = window.innerHeight;
    // if ($(window).width()<768) {
    //     if(($('.pro-ev160 .box1').offset().top-2*h/3)<=top){
    //         Enter($('.pro-ev160 .box1 .tit'),"Y","0",4,1000,300);
    //         setTimeout(function(){
    //             Enter($('.pro-ev160 .box1 .img'),"Y","0",1,1000,300);
    //         },400)
    //     }
    // }
    $(window).scroll(function(){
        var _height = window.innerHeight/4*2
        var _height2 = window.innerHeight/4*3;
        var top = $(window).scrollTop();
        var h = window.innerHeight;

        // if(($('.four-box').offset().top-2*h/3)<=top){
        //     Enter($('.four-box li:eq(0)'),"Y","0",4,1000,300);
        // }
        if(($('.bq-table').offset().top-2*h/3)<=top){
            Enter($('.bq-table .tit'),"Y","0",2,1000,300);
        }
    })
    $(".click-more").click(function(){
        $(this).hide()
        $(".bq-table .table-box").css("height","auto")
    });
    resize()

    $(window).resize(function(){
        resize();
    });

    var swiper = new Swiper('.mobile-js6', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    $(".info-end .click-btn a").eq(0).addClass('cur');

    $(".info-end .click-btn a").eq(0).click(function(){
        $(this).addClass('cur').siblings('').removeClass('cur');
        var newsurl = contextPath+"/models/newsurlAjax.htm?oid="+$('#oid').val();
        $(".end-jsvideo").load(newsurl)
    });

    $(".info-end .click-btn a").eq(1).click(function(){
        $(this).addClass('cur').siblings('').removeClass('cur');
        var url = contextPath+"/models/videoAjax.htm?oid="+$('#oid').val()+"&type=1"
        $(".end-jsvideo").load(url)
    });

    $(".info-end .click-btn a").eq(2).click(function(){
        $(this).addClass('cur').siblings('').removeClass('cur');
        var url = contextPath+"/models/wordsAjax.htm?oid="+$('#oid').val()+"&type=2"
        $(".end-jsvideo").load(url)
    });

    var id = $(".info-end .click-btn a").data("id");
    var newsurl = contextPath+"/models/newsurlAjax.htm?oid="+$('#oid').val();
    $(".end-jsvideo").load(newsurl)

    // var id = $(".info-end .click-btn a").data("id");
    // var url = contextPath+"/models/videoAjax.htm"+"?oid="+$('#oid').val()+"&type="+id;
    // $(".end-jsvideo").load(url)



    $(".er-nav .li").on("click",function(){
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }else{
            $(this).addClass("active").siblings("").removeClass("active");
        }
    })
    $(".er-nav .li .menu-dropdown .sp2").on("click",function(){
        $(this).parents(".li").removeClass("active");
    })

    scrollAni();
    visual_button_scroll_down();



})



function scrollAni() {
    $('.js-m').each(function() {
        var _this = $(this);
        if (_this.offset().top > $(window).scrollTop() + window.innerHeight || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
            // _this.removeClass('animate');
        } else if ($(window).scrollTop() > _this.offset().top - window.innerHeight * 0.8) {
            _this.addClass('animate');
        }
    });
    $('.js-m-1').each(function() {
        var _this = $(this);
        if (_this.offset().top > $(window).scrollTop() + window.innerHeight || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
            // _this.removeClass('animate');
        } else if ($(window).scrollTop() > _this.offset().top - window.innerHeight * 0.8) {
            _this.addClass('animate');
        }
    });
    $(window).scroll(function() {
        $('.js-m').each(function() {
            var _this = $(this);
            if (_this.offset().top > $(window).scrollTop() + window.innerHeight || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
                // _this.removeClass('animate');
            } else if ($(window).scrollTop() > _this.offset().top - window.innerHeight * 0.8) {
                _this.addClass('animate');
                // $(_this)
            }
        });
        $('.js-m-1').each(function() {
            var _this = $(this);
            if (_this.offset().top > $(window).scrollTop() + window.innerHeight || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
                // _this.removeClass('animate');
            } else if ($(window).scrollTop() > _this.offset().top - window.innerHeight * 0.8) {
                _this.addClass('animate');
                // $(_this)
            }
        });
    });


}
function visual_button_scroll_down(){
    $('.scroll_down').on('click',function(){
        var target = $(this).attr('href');
        var target_top = $(target).offset().top;
        $('html,body').animate({
            scrollTop : target_top
        },1000, 'easeInOutQuad');
        return false;
    });
}
function resize(){
    var _height = window.innerHeight;
    var _width =  window.innerWidth;

    if (_width<=1024) {
        var k = $(".pro-banner").data("mob");
        $(".pro-banner .bg").attr({
            src: k,
        });

        var k1 = $(".pro-eu260 .box2 .img").data("mob");
        $(".pro-eu260 .box2 .img img").attr({
            src: k1,
        });

        var k2 = $(".pro-eu260 .box5 .bg").data("mob");
        $(".pro-eu260 .box5 .bg img").attr({
            src: k2,
        });

        $(".four-box li").eq(2).css("float","right")
        $(".four-box li").eq(2).removeClass('cur')
        $(".four-box li").eq(3).css("float","right")
        $(".four-box li").eq(3).addClass('cur')
    }else{
        var k = $(".pro-banner").data("pc");
        $(".pro-banner .bg").attr({
            src: k,
        });
        var k1 = $(".pro-eu260 .box2 .img").data("pc");

        $(".pro-eu260 .box2 .img img").attr({
            src: k1,
        });

        var k2 = $(".pro-eu260 .box5 .bg").data("pc");
        $(".pro-eu260 .box5 .bg img").attr({
            src: k2,
        });
    }
}
