$(function(){
    $(".header").addClass('kon');
    var cityName;
    var longitude;
    var latitude;

    var Url = contextPath+"/testDrive/deiveMapAjax.htm";
    var Url2 = contextPath+"/testDrive/deiveMapTAjax.htm";


    function initial(province,city,modelsId){
        var data_info = '[';
        App.Ajax.request({

            url : contextPath+"/testDrive/initial.htm",
            params : {
                'province': province,
                'city': city,
                'type': 1,
                'modelsId': modelsId
            },
            type : "post",
            isAutoTip : false,
            success : function(resp) {
                if (resp.returnCode == 200) {
                    if(resp.data.length > 0){
                        for (var i = 0; i < resp.data.length; i++) {
                            data_info += "[" + resp.data[i].longitude
                                + "," + resp.data[i].latitude + ","
                                + '"��ַ��' + resp.data[i].streetAddress
                                + '"]';
                            if (i < resp.data.length - 1) {
                                data_info += ",";
                            }
                        }
                        longitude = resp.data[0].longitude;
                        latitude = resp.data[0].latitude;
                    }
                    data_info += "]";
                } else if (resp.returnCode == 0 && resp.data != null) {
                    alert(resp.data);
                }
                buildmap(data_info);
            }
        });
    }
    if($(window).width()>1024){
        var Html = $.ajax({
            url:Url,
            beforeSend: function(){
                $(".us-right-one").html("������......");

            },
            success: function(data){
                $(".us-right-one").html(data);
                function myFun(result){
                    cityName = result.name;
                    //alert("��ǰ��λ����1:"+cityName);
                    initial('',cityName,'');
                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);

                /*var data_info = [[120.186307,30.288703,"��ַ���³���"],
                 [120.150663,30.326118,"��ַ��������"],
                 [120.136865,30.265249,"��ַ��������"]
                 ];*/
            }


        });
        InputSelectOne();
    }else{
        var Html = $.ajax({
            url:Url,
            beforeSend: function(){
                $(".us-right-two").html("������......");
            },
            success: function(data){
                $(".us-right-two").html(data);
                function myFun(result){
                    cityName = result.name;
                    //alert("��ǰ��λ����2:"+cityName);
                    initial('',cityName,'');
                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);

                /*var data_info = [[120.186307,30.288703,"��ַ���³���"],
                 [120.150663,30.326118,"��ַ��������"],
                 [120.136865,30.265249,"��ַ��������"]
                 ];*/

            }
        });
        InputSelectTwo();
    }
    $(window).resize(function(){
        if($(window).width() > 1024){
            var Html = $.ajax({
                url:Url,
                beforeSend: function(){
                    $(".us-right-one").html("������......");

                },
                success: function(data){
                    $(".us-right-one").html(data);
                    function myFun(result){
                        cityName = result.name;
                        //alert("��ǰ��λ����1:"+cityName);
                        initial('',cityName,'');
                    }
                    var myCity = new BMap.LocalCity();
                    myCity.get(myFun);

                    /*var data_info = [[120.186307,30.288703,"��ַ���³���"],
                     [120.150663,30.326118,"��ַ��������"],
                     [120.136865,30.265249,"��ַ��������"]
                     ];*/
                }


            });
            window.location.reload();
        }else if($(window).width() <= 1024){
            var Html = $.ajax({
                url:Url,
                beforeSend: function(){
                    $(".us-right-two").html("������......");
                },
                success: function(data){
                    $(".us-right-two").html(data);
                    function myFun(result){
                        cityName = result.name;
                        //alert("��ǰ��λ����2:"+cityName);
                        initial('',cityName,'');
                    }
                    var myCity = new BMap.LocalCity();
                    myCity.get(myFun);
                }
            });
        }
    });

    //function buildmap(data_info){
    //    var map = new BMap.Map("allmap");    // ����Mapʵ��
    //    map.centerAndZoom(new BMap.Point(longitude,latitude), 10);  // ��ʼ����ͼ,�������ĵ�����͵�ͼ����
    //    map.addControl(new BMap.MapTypeControl());   //��ӵ�ͼ���Ϳؼ�
    //    data_info = eval(data_info);
    //    var myIcon = new BMap.Icon( contextPath + "/views/module/web/pic/pic3-xin.png", new BMap.Size(21,28));
    //    for(var i=0;i<data_info.length;i++){
    //        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});  // ������ע
    //        var content = data_info[i][2];
    //        map.addOverlay(marker);               // ����ע��ӵ���ͼ��
    //    }
    //    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    //    map.addControl(navControl);
    //}

    function InputSelectOne(){
        $("#dealer").change(function(){
            var id=$(this).val();
            var Html = $.ajax({
                url:Url2,
                beforeSend: function(){
                    $(".us-right-one").html("������......");
                },
                success: function(data){
                    $(".us-right-one").html(data);
                    App.Ajax.request({
                        url : contextPath+"/testDrive/findDealerByOid.htm?oid="+id,
                        type : "post",
                        isAutoTip : false,
                        success : function(resp) {
                            if (resp.returnCode == 200) {
                                function initMap(){
                                    createMap();//������ͼ
                                    setMapEvent();//���õ�ͼ�¼�
                                    addMapControl();//���ͼ��ӿؼ�
                                    addMapOverlay();//���ͼ��Ӹ�����
                                }
                                function createMap(){
                                    map = new BMap.Map("allmap-two");
                                    map.centerAndZoom(new BMap.Point(resp.data.longitude,resp.data.latitude),12);
                                }
                                function setMapEvent(){
                                    map.enableScrollWheelZoom();
                                    map.enableKeyboard();
                                    map.enableDragging();
                                    map.enableDoubleClickZoom()
                                }
                                function addClickHandler(target,window){
                                    target.addEventListener("click",function(){
                                        target.openInfoWindow(window);
                                    });
                                }
                                function addMapOverlay(){
                                    map.centerAndZoom(point,18);
                                    var point = new BMap.Point(resp.data.longitude,resp.data.latitude);
                                    var myIcon = new BMap.Icon(contextPath+"/views/module/web/pic/pic3-xin.png", new BMap.Size(21,28));
                                    var marker = new BMap.Marker(point,{icon:myIcon});  // ������ע
                                    map.addOverlay(marker);              // ����ע��ӵ���ͼ��
                                    var opts = {
                                        width : 400,     // ��Ϣ���ڿ��
                                        height: 140,     // ��Ϣ���ڸ߶�
                                        title : resp.data.dealerName , // ��Ϣ���ڱ���
                                        enableMessage:true,//����������Ϣ�����Ͷ�Ϣ
                                        message:""
                                    }
                                    var infoWindow = new BMap.InfoWindow("��ַ��"+resp.data.streetAddress+"<br>�绰��"+resp.data.phone, opts);  // ������Ϣ���ڶ���
                                    marker.addEventListener("click", function(){
                                        map.openInfoWindow(infoWindow,point); //������Ϣ����
                                    });
                                    map.openInfoWindow(infoWindow,point); //������Ϣ����
                                }
                                //���ͼ��ӿؼ�
                                function addMapControl(){
                                    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
                                    map.addControl(navControl);
                                }
                                var map;
                                initMap();


                            } else if (resp.returnCode == 0 && resp.data != null) {
                                alert(resp.data);
                            }
                        }
                    });

                }
            });
        });
    }

    function InputSelectTwo(){
        $("#dealer").change(function(){
            var id=$(this).val();
            var Html = $.ajax({
                url:Url2,
                beforeSend: function(){
                    $(".us-right-two").html("������......");
                },
                success: function(data){
                    $(".us-right-two").html(data);
                    App.Ajax.request({
                        url : contextPath+"/testDrive/findDealerByOid.htm?oid="+id,
                        type : "post",
                        isAutoTip : false,
                        success : function(resp) {
                            if (resp.returnCode == 200) {
                                function initMap(){
                                    createMap();//������ͼ
                                    setMapEvent();//���õ�ͼ�¼�
                                    addMapControl();//���ͼ��ӿؼ�
                                    addMapOverlay();//���ͼ��Ӹ�����
                                }
                                function createMap(){
                                    map = new BMap.Map("allmap-two");
                                    map.centerAndZoom(new BMap.Point(resp.data.longitude,resp.data.latitude),12);
                                }
                                function setMapEvent(){
                                    map.enableScrollWheelZoom();
                                    map.enableKeyboard();
                                    map.enableDragging();
                                    map.enableDoubleClickZoom()
                                }
                                function addClickHandler(target,window){
                                    target.addEventListener("click",function(){
                                        target.openInfoWindow(window);
                                    });
                                }
                                function addMapOverlay(){
                                    map.centerAndZoom(point,18);
                                    var point = new BMap.Point(resp.data.longitude,resp.data.latitude);
                                    var myIcon = new BMap.Icon(contextPath+"/views/module/web/pic/pic3-xin.png", new BMap.Size(21,28));
                                    var marker = new BMap.Marker(point,{icon:myIcon});  // ������ע
                                    map.addOverlay(marker);              // ����ע��ӵ���ͼ��
                                    var opts = {
                                        width : 400,     // ��Ϣ���ڿ��
                                        height: 140,     // ��Ϣ���ڸ߶�
                                        title : resp.data.dealerName , // ��Ϣ���ڱ���
                                        enableMessage:true,//����������Ϣ�����Ͷ�Ϣ
                                        message:""
                                    }
                                    var infoWindow = new BMap.InfoWindow("��ַ��"+resp.data.streetAddress+"<br>�ʱࣺ"+resp.data.zipCode+"<br>�绰��"+resp.data.phone, opts);  // ������Ϣ���ڶ���
                                    marker.addEventListener("click", function(){
                                        map2.openInfoWindow(infoWindow,point); //������Ϣ����
                                    });
                                    map.openInfoWindow(infoWindow,point); //������Ϣ����
                                }
                                //���ͼ��ӿؼ�
                                function addMapControl(){
                                    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
                                    map.addControl(navControl);
                                }
                                var map;
                                initMap();


                            } else if (resp.returnCode == 0 && resp.data != null) {
                                alert(resp.data);
                            }
                        }
                    });

                }
            });
        });
    }

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

    $(".close,.submitx").on('click',function(){
        setTimeout(function(){
            $(".video-ajax").removeClass("hide");
        },400)
        $(".video-ajax").removeClass("hidetwo");
        setTimeout(function(){
            $(".video-ajax").fadeOut();
        },800)
    })


    //Ajax����Ĭ��ʡ��
    load("", "#sheng");
    $("#models").change(function() {
        load("", "#sheng");
        var html = "<option value=''> ��ѡ���� </option>";
        $("#shi").html(html);
    });
    //Ajax��������ʡ����
    $("#sheng").change(function() {
        var modelsId = $('#models option:selected').val();
        if(modelsId == null || modelsId == ''){
            alert("����ѡ��ԤԼ����");
            return false;
        }
        load($("#sheng").val(), "#shi");
        initial($('#sheng option:selected') .text(),$('#shi option:selected') .text(),$('#modelsId option:selected').val());
    });
    $("#shi").change(function() {
        findDealer($('#sheng option:selected').text(),$('#shi option:selected').text(), $('#models option:selected').val());
        initial($('#sheng option:selected') .text(),$('#shi option:selected') .text(),$('#modelsId option:selected').val());
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
        if($("#name").val() == ''){
            alert("������д���������ύ!");
            return;
        }
        if($("#telephone").val() == ''){
            alert("������д�ֻ����룬���ύ!");
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
                    if(resp.result == true){
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
                                location.reload(true);
                            },
                            error:function(){
                                alert('����ͬ��ʧ��');
                            }
                        });

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
    });
});

//����ʡ��
function load(id, dom) {
    var html = '';
    App.Ajax.request({
        url : contextPath+"/api/dict/getRegion.ns?oid=" + id,
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
function findDealer(sheng,shi,modelsId){
    var html = '<option value="0">��ѡ������</option>';
    App.Ajax.request({
        url : contextPath+"/testDrive/findDealer.htm",
        params : {
            'province': sheng,
            'city': shi,
            'modelsId': modelsId
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
}
