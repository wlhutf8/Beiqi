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



    $(".swipebox").swipebox();
    $(".events-list .li .list1 .p-text").each(function(){
        $(this).slimScroll({
            height: '256',
            color: '#0097e0', //��������ɫ
            disableFadeOut: true,
            alwaysVisible: false, //�Ƿ� ʼ����ʾ���
            railVisible: true, //�Ƿ� ��ʾ���
            railColor: '#000', //�����ɫ
            railOpacity: .2, //���͸����
        });
    })
    $(".events-list .li .list2 .p-text").each(function(){
        $(this).slimScroll({
            height: '245',
            color: '#0097e0', //��������ɫ
            disableFadeOut: true,
            alwaysVisible: false, //�Ƿ� ʼ����ʾ���
            railVisible: true, //�Ƿ� ��ʾ���
            railColor: '#000', //�����ɫ
            railOpacity: .2, //���͸����
        });
    })




    var url1 = contextPath+'/aboutUs/eventsAjax.htm';
    $(".wcarousel").load(url1+'?oid='+$(".li.cur").data("id"),function(){
        $('#diploma').owlCarousel({
            itemsDesktop:[1920,3],
            itemsTablet:[1200,2],
            itemsMobile:[768,1],
            slideSpeed: 600,
            autoPlay: false,
            navigation: true,
            pagination: false,
            rewindNav: false,
        });
        $(".events-list .li .list1 .p-text").each(function(){
            $(this).slimScroll({
                height: '256',
                color: '#0097e0', //��������ɫ
                disableFadeOut: true,
                alwaysVisible: false, //�Ƿ� ʼ����ʾ���
                railVisible: true, //�Ƿ� ��ʾ���
                railColor: '#000', //�����ɫ
                railOpacity: .2, //���͸����
            });
        })
        $(".events-list .li .list2 .p-text").each(function(){
            $(this).slimScroll({
                height: '245',
                color: '#0097e0', //��������ɫ
                disableFadeOut: true,
                alwaysVisible: false, //�Ƿ� ʼ����ʾ���
                railVisible: true, //�Ƿ� ��ʾ���
                railColor: '#000', //�����ɫ
                railOpacity: .2, //���͸����
            });
        })
    });
    $(".wul .ul .li").on('click',function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var id = $(this).attr("data-id");
        $(".wcarousel").load(url1+'?oid='+id,function(){
            $('#diploma').owlCarousel({
                itemsDesktop:[1920,3],
                itemsTablet:[1200,2],
                itemsMobile:[768,1],
                slideSpeed: 600,
                autoPlay: false,
                navigation: true,
                pagination: false,
                rewindNav: false,
            });
            $(".events-list .li .list1 .p-text").each(function(){
                $(this).slimScroll({
                    height: '256',
                    color: '#0097e0', //��������ɫ
                    disableFadeOut: true,
                    alwaysVisible: false, //�Ƿ� ʼ����ʾ���
                    railVisible: true, //�Ƿ� ��ʾ���
                    railColor: '#000', //�����ɫ
                    railOpacity: .2, //���͸����
                });
            })
            $(".events-list .li .list2 .p-text").each(function(){
                $(this).slimScroll({
                    height: '245',
                    color: '#0097e0', //��������ɫ
                    disableFadeOut: true,
                    alwaysVisible: false, //�Ƿ� ʼ����ʾ���
                    railVisible: true, //�Ƿ� ��ʾ���
                    railColor: '#000', //�����ɫ
                    railOpacity: .2, //���͸����
                });
            })
        });
    })
})


