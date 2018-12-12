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

    $(".listb .join-list li:odd").css("background","#f3f3f3")

    //var url = contextPath+"/jobOpportunities/recruitAjax.htm";
    //$(".listb li").on('click',function(){
    //    $(".video-ajax").fadeIn(0);
    //    var id = $(this).attr("data-id");
    //    $(".video-ajax").load(url+'?oid='+id,function(){
    //        $('.mask .p').slimScroll({
    //            height: '285',
    //            color: '#0097e0' //滚动条颜色
    //        });
    //        $(".bg-close,.close").on('click',function(){
    //            setTimeout(function(){
    //                $(".video-ajax").removeClass("hide");
    //            },400)
    //            $(".video-ajax").removeClass("hidetwo");
    //            setTimeout(function(){
    //                $(".video-ajax").fadeOut();
    //            },800)
    //        })
    //    });
    //    $(".video-ajax").addClass("hide");
    //    setTimeout(function(){
    //        $(".video-ajax").addClass("hidetwo");
    //    },400)
    //})

    $(".header").addClass('kon');

    var sum = 0;
    $('.listc').on('click','.jointop',function(){
        sum=$('.n-recruit .same').outerHeight();
        var index=$(this);
        $(this).toggleClass('on').parents('li').siblings().find('.jointop').removeClass('on');
        $(this).parents('li').find('.joins').slideToggle(function(){
            jQuery("html,body").animate({ scrollTop: index.parents('li').offset().top-sum},640);
        });
        $(this).parents('li').siblings().find('.joins').slideUp();
    });

    Enter($('.n-recruit .lista'),"Y","0",1,1000,300);
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        var h=$(window).height();
        if(($('.listb ').offset().top-2*h/3)<=top){
            Enter($('.n-recruit .listb'),"Y","0",1,1000,300);
        }
    })
    var NewUrl2 = contextPath +"/jobOpportunities/recruitAjaxM.htm?type="+type
    var p = 1; //记录第几页
    var hasmore = true;

    var allpage = totalPage;
    if (p >= allpage) {
        $('.more-x').hide();
    };
    if (!hasmore) { // 判断是否加载下一页
        $('.more-x').hide();
        return false;
    }
    var k = $(".listc .join-list li").length;
    Enter($('.listc .join-list li').eq(0),"Y","0",k,1000,300);
    $('.more-x').click(function () {
        var _this = $(this);
        var k2 = $(".listc .join-list li").length;
        Enter($('.listc .join-list li').eq(k2-1),"Y","0",6,1000,300);
        p = p + 1;
        $.ajax({
            url: NewUrl2+"&pageNo="+p,
            data: { page: p },
            cache: false,
            dataType: 'html',
            beforeSend: function(){
                $(this).html("加载更多...")
            },
            success: function (html) {
                _this.siblings('ul').append(html);
                if (p >= allpage) {
                    $('.more-x').hide();
                    hasmore = false;
                };
            }
        });
        return false;
    });
})

