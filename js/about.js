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

    $(".dlbox .dt").on('click',function(){
        $(".video-ajax").fadeIn(0);
        $(".video-ajax").addClass("hide");
        $('video').trigger('play');
        setTimeout(function(){
            $(".video-ajax").addClass("hidetwo");
        },400)
    })

    $(".bg-close").on('click',function(){
        setTimeout(function(){
            $(".video-ajax").removeClass("hide");
        },400)
        $(".video-ajax").removeClass("hidetwo");
        $('video').trigger('pause');
        setTimeout(function(){
            $(".video-ajax").fadeOut();
        },800)
    })
    $(".video-ajax").on('click','.videobox-t',function(){
        setTimeout(function(){
            $(".video-ajax").removeClass("hide");
        },400)
        $(".video-ajax").removeClass("hidetwo");
        setTimeout(function(){
            $(".video-ajax").fadeOut(function(){
                $('video').trigger('pause');
            });
        },800)

    })
    if ($(window).width()<1460 && $(window).width()>=1024) {
        $(".n-about .lista .p").width($(".n-about .lista .zw1400").width()-500);
    }else if($(window).width()<=1024){
        $(".n-about .lista .p").css("width","100%");
    }
    $(window).resize(function(){
        if ($(window).width()<1460 && $(window).width()>=1024) {
            $(".n-about .lista .p").width($(".n-about .lista .zw1400").width()-500);
        }else if($(window).width()<=1024){
            $(".n-about .lista .p").css("width","100%");
        }
    })
    $(".n-about .lista .p").mCustomScrollbar({
        scrollButtons:{
            enable:false,
            scrollType:"continuous",
            scrollSpeed:20,
            scrollAmount:40
        },
        horizontalScroll:false,
    });

    Enter($('.n-about .lista'),"Y","0",1,1000,300);
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        var h=$(window).height();
        if(($('.listb ').offset().top-2*h/3)<=top){
            Enter($('.n-about .listb'),"Y","0",1,1000,300);
        }
    })

    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(5).addClass('on')
})

