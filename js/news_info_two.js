$(function(){
    $('label').click(function(){
        var radioId = $(this).find('.radio_a').attr('name');
        $('label').removeAttr('class') && $(this).attr('class', 'checked');
        $('.radio_a').removeAttr('checked') && $(this).find('.radio_a').attr('checked', 'checked');
    });
    $(".msg-input").focus(function(){
        if ($(this).parents(".wtd").hasClass("active")) {
            var _this = $(this).parents(".wtd");
            _this.removeClass("active");
        }else{
            var _this = $(this).parents(".wtd");
            _this.addClass("active");
        }
    })
    $(".msg-input").blur(function(){
        if ($(this).parents(".wtd").hasClass("active")) {
            var _this = $(this).parents(".wtd");
            _this.removeClass("active");
        }else{
            var _this = $(this).parents(".wtd");
            _this.addClass("active");
        }
    })

    $(".inputx").on('click',function(){
        $(".video-ajax").fadeIn(0);
        $(".video-ajax").addClass("hide");
        setTimeout(function(){
            $(".video-ajax").addClass("hidetwo");
        },400)
    })

    $(".close,.reset,.submit").on('click',function(){
        setTimeout(function(){
            $(".video-ajax").removeClass("hide");
        },400)
        $(".video-ajax").removeClass("hidetwo");
        setTimeout(function(){
            $(".video-ajax").fadeOut();
        },800)
    })
    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(2).addClass('on')

    //Ajax����Ĭ��ʡ��
    load("", "#sheng");
    //Ajax��������ʡ����
    $("#sheng").change(function() {
        load($("#sheng").val(), "#shi");
    });
    $("#shi").change(function() {
        findDealer($('#sheng option:selected').text(),$('#shi option:selected').text());
    });
    $(".submit").click(function(){
        $("#modelsId").val($('#models option:selected').val());
        $("#provinceId").val($('#sheng option:selected').val());
        $("#cityId").val($('#shi option:selected').val());
        $("#dealerId").val($('#dealer option:selected').val());
        $("#appellation").val($('.checked .radio_a ').val());

        /**var hasChk = $('#isChecked').is(':checked');
         if(!hasChk){
				alert("���ȹ�ѡ��˽������ύ!");
			    return;
			}*/
        if($("#name").val()==''){
            alert("������д���������ύ!");
            return;
        }
        if($("#telephone").val()==''){
            alert("������д�ֻ������ύ!");
            return;
        }else{
            reg=/^1[3|4|5|8]\d{9}$/;
            if(!reg.test($("#telephone").val())){
                alert("��������ȷ���ֻ�����");
                $("#telephone").focus();
                return;
            }
        }
        if($("#email").val() != ''){
            reg=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
            if(!reg.test($("#email").val())){
                alert("��������ȷ�ĵ�������");
                $("#email").focus();
                return;
            }
        }
        if($("#budget").val() != ''){
            reg=/^[0-9]*[1-9][0-9]*$/;
            if(!reg.test($("#budget").val())){
                alert("��������ȷ�Ĺ���Ԥ��");
                $("#budget").focus();
                return;
            }
        }
        //���ύ
        App.Ajax.request({
            type: "POST",
            data: $('#testDrive').serialize(),
            url: contextPath+"/testDrive/save.htm",
            isAutoTip: false,
            success: function(resp){
                if(resp.returnCode == 200){
                    alert("�ύ�ɹ�");

                    var emailAddress;
                    var gender1;
                    if($('#email').val() != ''){
                        emailAddress = $('#email').val();
                    }else{
                        //��������
                        emailAddress ="18758283966@s.com";
                    }
                    if($('#appellation').val() == 1){
                        gender1 = "����";
                    }else{
                        gender1 = "Ůʿ";
                    }
                    //eloqua����
                    $.ajax({
                        url: 'https://s780236938.t.eloqua.com/e/f2',
                        type: 'post',
                        data:{
                            elqFormName:'UntitledForm-1469514956461',
                            elqSiteID:'780236938',
                            elqCustomerGUID : $('#elqCustomerGUID').val(),
                            elqCookieWrite:'0',
                            firstName : $('#name').val(),
                            gender1 : gender1,
                            mobilePhone : $('#telephone').val(),
                            emailAddress : emailAddress,
                            classCar1 : $('#models option:selected').text(),
                            orderDate1 : $('#time').val(),
                            province1 : $('#sheng option:selected').text(),
                            city : $('#shi option:selected').text(),
                            jxsName : $('#dealer option:selected').text(),
                            budget : $('#budget').val(),
                        },
                        success: function(resp){
                            alert('����ͬ���ɹ�');
                            location.href=contextPath+"/newsInformation/list.htm?code=Sales_Promotion";
                        },
                        error:function(){
                            alert('����ͬ��ʧ��');
                        }
                    });
                }else{
                    alert("������ԭ���ύʧ�ܣ��������ύ!")
                }
            }
        });
    });
})

//����ʡ��
function load(id, dom) {
    var html = '';
    App.Ajax.request({
        url : contextPath+"/api/dict/getRegion.ns",
        params : {
            'oid': id
        },
        type : "post",
        isAutoTip : false,
        success : function(resp) {
            if(id == ''){
                html +="<option value=''> ��ѡ��ʡ </option>";
            }
            if(id != ''){
                html +="<option value=''> ��ѡ���� </option>";
            }
            for (var i = 0; i < resp.data.length; i++) {
                html += "<option value='"+resp.data[i].oid+"'>"
                    + resp.data[i].name + "</option>";
            }
            $(dom).html(html);

        }
    });
}
//���Ҿ�����
function findDealer(sheng,shi){
    var html = '<option value="0">��ѡ������</option>';
    App.Ajax.request({
        url : contextPath+"/testDrive/findDealer.htm",
        params : {
            'province': sheng,
            'city': shi
        },
        type : "post",
        isAutoTip : false,
        success : function(resp) {
            for (var i = 0; i < resp.data.length; i++) {
                html += "<option value='"+resp.data[i].oid+"'>"
                    + resp.data[i].dealerName + "</option>";
            }
            $('#dealer').html(html);
        }
    });

    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(2).addClass('on')
}
