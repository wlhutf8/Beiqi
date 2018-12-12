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
            alert("请先填写姓名,再提交!");
            return;
        }
        if($('#telephone').val() == ''){
            alert("请先填写手机号码,再提交!");
            return;
        }else{
            reg=/^1[3|4|5|8]\d{9}$/;
            if(!reg.test($("#telephone").val())){
                alert("请输入正确的手机号码");
                $("#telephone").focus();
                return;
            }
        }
        if($("#email").val() == ''){
            alert("请先填写电子邮箱,再提交!");
            return;
        }else{
            reg=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
            if(!reg.test($("#email").val())){
                alert("请输入正确的电子邮箱");
                $("#email").focus();
                return;
            }
        }
        if($('#messageContent').val() == ''){
            alert("请先填写留言内容,再提交!");
            return;
        }
        if($('#captchas').val() == ''){
            alert("请先填写图片验证,再提交!");
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
                    //表单提交
                    App.Ajax.request({
                        type: "POST",
                        data: $('#messageFeedback').serialize(),
                        url: contextPath+"/messageFeedback/messageFeedback.htm",
                        success: function(resp){
                            console.log(resp);
                            if(resp.returnCode == 200){
                                if(resp.result == true){
                                    alert("提交成功");
                                    location.href=contextPath+"/ownersCommunity/community.htm";
                                }else{
                                    if(resp.msg != null){
                                        alert(resp.msg);
                                    }
                                }
                            }else{
                                alert("因网络原因提交失败，请重新提交!")
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

