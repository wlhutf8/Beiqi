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

    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(5).addClass('on')

    var arrayimg = [];
    $('.n-staff .dlbox .dd img').each(function(){
        arrayimg.push($(this).attr('src'));
    })
    _PreLoadImg(arrayimg,function(){
        $(".n-staff .dlbox .dt").each(function(){
            $(this).height($(this).siblings('.dd').height());
            var h = $(this).find(".p").height();
            var Hbig = $(this).siblings('.dd').height();
            $(this).find(".p").css('margin-top',(Hbig-h)/2);
        })
    })
    $(window).resize(function(){
        _PreLoadImg(arrayimg,function(){
            $(".n-staff .dlbox .dt").each(function(){
                $(this).height($(this).siblings('.dd').height());
                var h = $(this).find(".p").height();
                var Hbig = $(this).siblings('.dd').height();
                $(this).find(".p").css('margin-top',(Hbig-h)/2);
            })
        })
    })

    $(".swipebox").swipebox();

    Enter($('.n-staff .zw1400'),"Y","0",1,1000,300);
})

