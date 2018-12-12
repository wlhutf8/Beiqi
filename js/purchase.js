var _height = window.innerHeight
var _width =  window.innerWidth

$(function(){

    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(4).addClass('on')


    $(".purchase .four .ul li").hover(function() {
        $(this).children('.jimg').stop(true,true).fadeIn()
        $(this).children('.zimg').stop(true,true).fadeOut()
        $(this).addClass('cur')
    }, function() {
        $(this).children('.jimg').stop(true,true).fadeOut()
        $(this).children('.zimg').stop(true,true).fadeIn()
        $(this).removeClass('cur')
    });

    var os1 = new Optiscroll(document.getElementById('k1'), { maxTrackSize: 60, preventParentScroll: true });
    var os2 = new Optiscroll(document.getElementById('k2'), { maxTrackSize: 60, preventParentScroll: true });
    var os3 = new Optiscroll(document.getElementById('k3'), { maxTrackSize: 60, preventParentScroll: true });
    var os4 = new Optiscroll(document.getElementById('k4'), { maxTrackSize: 60, preventParentScroll: true });

    $(".purchase .mobile-table .ulbox").eq(0).addClass('cur');
    $(".purchase .mobile-table .ulbox").eq(0).find('.bot').show()
    $('.business-type .clnav li').eq(0).addClass('cur')
    //var url = contextPath+"/bigCustomePurchase/purchaseAjax.htm?id="+$('.business-type .clnav li').eq(0).data('id');
    //var url2 = contextPath+"/bigCustomePurchase/purchaseAjax2.htm?id="+$('.business-type .clnav li').eq(0).data('id');
    //$(".bus-ajaxbox").load(url,function(){
    //    $('.bus-ajax').css("opacity","1")
    //})
    //$(".bus-ajaxbox2").load(url2,function(){
    //    $('.ajax2').css("opacity","1")
    //})

    //$('.business-type .clnav li').click(function(){
    //    $(this).addClass('cur').siblings('').removeClass('cur')
    //
    //    var id = $(this).data("id");
    //    var url = contextPath+"/bigCustomePurchase/purchaseAjax.htm"+"?id="+id;
    //    var url2 = contextPath+"/bigCustomePurchase/purchaseAjax2.htm"+"?id="+id;
    //
    //    $(".bus-ajaxbox").load(url,function(){
    //        $('.bus-ajax').css("opacity","1")
    //    })
    //    $(".bus-ajaxbox2").load(url2,function(){
    //        $('.ajax2').css("opacity","1")
    //    })
    //})

    //$(".business-type .mobile-clnav .swiper-slide").eq(0).addClass('cur')
    //$(".business-type .mobile-clnav .swiper-slide").click(function(){
    //    $(this).addClass('cur').siblings('').removeClass('cur');
    //
    //    var id = $(this).data("id");
    //    var url = contextPath+"/bigCustomePurchase/purchaseAjax.htm"+"?id="+id;
    //    var url2 = contextPath+"/bigCustomePurchase/purchaseAjax2.htm"+"?id="+id;
    //
    //    $(".bus-ajaxbox").load(url,function(){
    //        $('.bus-ajax').css("opacity","1")
    //    })
    //    $(".bus-ajaxbox2").load(url2,function(){
    //        $('.ajax2').css("opacity","1")
    //    })
    //});

    $(".buy .buynav li").eq(0).addClass('cur')
    $(".buy .table-q .tablebox").eq(0).show();

    $(".buy .buynav li").click(function(){
        $(this).addClass('cur').siblings('').removeClass('cur')
        var k = $(this).index();
        $(".buy .table-q .tablebox").eq(k).show();
        $(".buy .table-q .tablebox").eq(k).siblings('').hide();
    });

    var swiper = new Swiper('.mobile-clnav', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30
    });

    $(".purchase .mobile-table .ulbox").click(function(){
        if ($(this).hasClass('cur')) {
            $(this).children('.bot').slideUp()
            $(this).removeClass('cur')
        }else{
            $(this).children('.bot').slideDown()
            $(this).addClass('cur');
            $(this).siblings('').children('.bot').slideUp();
            $(this).siblings('').removeClass('cur')
        }
    });

    resize();

    //Ajax加载默认省市
    load("", "#sheng");
    //Ajax请求所在省的市
    $("#sheng").change(function() {
        load($("#sheng").val(), "#shi");
    });

    $(".su").click(function(){
        $("#provinceId").val($('#sheng option:selected').val());
        $("#cityId").val($('#shi option:selected').val());
        $("#industryModelsId").val($('#industryModels option:selected').val());
        if($("#procurementPurposes").val()==''){
            alert("请先填写采购用途，再提交!");
            return;
        }
        if($("#industry").val()==''){
            alert("请先填写行业，再提交!");
            return;
        }
        if($("#provinceId").val()==''){
            alert("请先填写省，再提交!");
            return;
        }
        if($("#cityId").val()==''){
            alert("请先填写市，再提交!");
            return;
        }
        if($("#company").val()==''){
            alert("请先填写单位，再提交!");
            return;
        }
        if($("#name").val()==''){
            alert("请先填写姓名，再提交!");
            return;
        }
        if($("#telephone").val()==''){
            alert("请先填写联系方式，再提交!");
            return;
        }else{
            reg=/^1[3|4|5|8]\d{9}$/;
            if(!reg.test($("#telephone").val())){
                alert("请输入正确的手机号码");
                $("#telephone").focus();
                return;
            }
        }
        if($("#industryModelsId").val()==''){
            alert("请先填写意向车型，再提交!");
            return;
        }
        if($("#number").val()==''){
            alert("请先填写采购数量 ，再提交!");
            return;
        }else{
            reg=/^[0-9]*[1-9][0-9]*$/;
            if(!reg.test($("#number").val())){
                alert("请输入正确的采购数量");
                $("#number").focus();
                return;
            }
        }
        //表单提交
        App.Ajax.request({
            type: "POST",
            data: $('#purchaseForm').serialize(),
            url: contextPath+"/procurementIntention/saveEntity.htm",
            isAutoTip: false,
            success: function(resp){
                if(resp.returnCode == 200){
                    alert("提交成功");
                    //虚拟邮箱
                    var emailAddress = "18758283966@s.com";
                    //eloqua埋码
                    $.ajax({
                        url: 'https://s780236938.t.eloqua.com/e/f2',
                        type: 'post',
                        data:{
                            elqFormName:'UntitledForm-1503639348810',
                            elqSiteID:'780236938',
                            elqCustomerGUID : $('#elqCustomerGUID').val(),
                            elqCookieWrite:'0',

                            purpose1 : $('#procurementPurposes').val(),
                            industry1 : $('#industry').val(),
                            province1 : $('#sheng option:selected').text(),
                            citys1 : $('#shi option:selected').text(),
                            company  : $('#company').val(),
                            firstName : $('#name').val(),
                            mobilePhone : $('#telephone').val(),
                            yixiangchexing1 : $('#industryModels option:selected').text(),
                            number1 : $('#number').val(),
                            emailAddress : emailAddress,
                        },
                        success: function(resp){
                            alert('数据同步成功');
                            location.href=contextPath+"/bigCustomePurchase/purchase.htm";
                        },
                        error:function(){
                            alert('数据同步失败');
                        }
                    });
                }
            }
        });
    });
})

$(window).resize(function(){
    var _height = window.innerHeight
    var _width =  window.innerWidth



    resize()
});

function resize(){
    var kl = $(".purchase .plan .w1400").width()/-2
    $(".purchase .plan .w1400").css("margin-left",kl);

    if (_width<1024) {
        var k1 = $(".buy .buynav li").eq(0).data("mob");
        var k2 = $(".buy .buynav li").eq(1).data("mob");

        $(".buy .table-q .tablebox img").eq(0).attr({
            src: k1,
        });

        $(".buy .table-q .tablebox img").eq(1).attr({
            src: k2,
        });
    }else{
        var k1 = $(".buy .buynav li").eq(0).data("pc");
        var k2 = $(".buy .buynav li").eq(1).data("pc");

        $(".buy .table-q .tablebox img").eq(0).attr({
            src: k1,
        });

        $(".buy .table-q .tablebox img").eq(1).attr({
            src: k2,
        });
    }

}

$(window).scroll(function(){
    var sc = $(window).scrollTop()/12

    $(".bannerimg").css("background-position-y",-sc)
})

//加载省市
//function load(id, dom) {
////alert("加载省市")
//    var html = '';
//    App.Ajax.request({
//        url : contextPath+"/api/dict/getRegion.ns?oid=" + id,
//        type : "post",
//        isAutoTip : false,
//        success : function(resp) {
//
//            if(id == ''){
//                html += "<option value=''>请选择省 </option>";
//            }
//            for (var i = 0; i < resp.data.length; i++) {
//                html += "<option value='"+resp.data[i].oid+"'>"
//                    + resp.data[i].name + "</option>";
//            }
//            $(dom).html(html);
//        }
//    });
//}
