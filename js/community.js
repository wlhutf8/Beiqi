$(function(){
    $(".news-sub .sub-r a").eq(0).addClass("cur");
    $(".news-sub-two .click-btn").on('click',function(){
        $(this).siblings(".box").stop().slideToggle();
    })
    $('#diploma').owlCarousel({
        itemsDesktop:[1920,3],
        itemsTablet:[1200,2],
        itemsMobile:[768,1],
        slideSpeed: 600,
        autoPlay: false,
        navigation: false,
        pagination: true,
        rewindNav: false,
    });
    $('#fxbox').owlCarousel({
        itemsDesktop:[1920,4],
        itemsDesktopSmall:[1200,3],
        itemsTablet:[960,2],
        itemsMobile:[650,1],
        slideSpeed: 600,
        autoPlay: false,
        navigation: false,
        pagination: true,
        rewindNav: false,
    });
    if ($(window).width()>1024) {
        var src2 =$(".n-community .listb .dd img").attr('src');
        _PreLoadImg([
            src2,
        ],function(){
            $(".dlbox .dt").height($(".dlbox .dd").height());
        })
    }else{
        $(".dlbox .dt").height('auto');
    }
    window.resize = function(e) {
        if ($(window).width()>1024) {
            var src2 =$(".n-community .listb .dd img").attr('src');
            _PreLoadImg([
                src2,
            ],function(){
                $(".dlbox .dt").height($(".dlbox .dd").height());
            })
        }else{
            $(".dlbox .dt").height('auto');
        }

        var kl = $(".purchase .plan .w1400").width()/-2;
        $(".purchase .plan .w1400").css("margin-left",kl);
    }
    $(window).scroll(function(){
        var sc = $(window).scrollTop()/12;
        $(".bannerimg").css("background-position-y",-sc)
    })


    $('label').click(function(){
        var radioId = $(this).find('.radio_a').attr('name');
        $('label').removeAttr('class') && $(this).attr('class', 'checked');
        $('.radio_a').removeAttr('checked') && $(this).find('.radio_a').attr('checked', 'checked');
    });

    $(".submit").click(function(){
        if($('#name').val() == ''){
            alert("������д����,���ύ!");
            return;
        }
        if($('#telephone').val() == ''){
            alert("������д�ֻ�����,���ύ!");
            return;
        }else{
            reg=/^1[3|4|5|8]\d{9}$/;
            if(!reg.test($("#telephone").val())){
                alert("��������ȷ���ֻ�����");
                $("#telephone").focus();
                return;
            }
        }
        if($("#email").val() == ''){
            alert("������д��������,���ύ!");
            return;
        }else{
            reg=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
            if(!reg.test($("#email").val())){
                alert("��������ȷ�ĵ�������");
                $("#email").focus();
                return;
            }
        }
        if($('#messageContent').val() == ''){
            alert("������д��������,���ύ!");
            return;
        }
        if($('#captchas').val() == ''){
            alert("������дͼƬ��֤,���ύ!");
            return;
        }
        $("#type").val($('.checked .radio_a ').val());
        App.Ajax.request({
            url : contextPath + "/messageFeedback/validateImgCode.htm",
            isAutoTip : false,
            params : {
                "imgCode" : $("#captchas").val()
            },
            success : function(resp) {
                console.log(resp);
                if (resp.returnCode == 200) {
                    //���ύ
                    App.Ajax.request({
                        type: "POST",
                        data: $('#messageFeedback').serialize(),
                        url: contextPath+"/messageFeedback/messageFeedback.htm",
                        success: function(resp){
                            console.log(resp);
                            if(resp.returnCode == 200){
                                if(resp.result == true){
                                    alert("�ύ�ɹ�");
                                    location.href=contextPath+"/ownersCommunity/community.htm";
                                }else{
                                    if(resp.msg != null){
                                        alert(resp.msg);
                                    }
                                }
                            }else{
                                alert("������ԭ���ύʧ�ܣ��������ύ!")
                            }
                        }
                    });
                }
            },
            error: function (resp) {
                alert(resp.data);
            }
        });

    });

    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(3).addClass('on')
})

