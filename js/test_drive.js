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
                                + '"地址：' + resp.data[i].streetAddress
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
                $(".us-right-one").html("加载中......");

            },
            success: function(data){
                $(".us-right-one").html(data);
                function myFun(result){
                    cityName = result.name;
                    //alert("当前定位城市1:"+cityName);
                    initial('',cityName,'');
                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);

                /*var data_info = [[120.186307,30.288703,"地址：下城区"],
                 [120.150663,30.326118,"地址：拱墅区"],
                 [120.136865,30.265249,"地址：西湖区"]
                 ];*/
            }


        });
        InputSelectOne();
    }else{
        var Html = $.ajax({
            url:Url,
            beforeSend: function(){
                $(".us-right-two").html("加载中......");
            },
            success: function(data){
                $(".us-right-two").html(data);
                function myFun(result){
                    cityName = result.name;
                    //alert("当前定位城市2:"+cityName);
                    initial('',cityName,'');
                }
                var myCity = new BMap.LocalCity();
                myCity.get(myFun);

                /*var data_info = [[120.186307,30.288703,"地址：下城区"],
                 [120.150663,30.326118,"地址：拱墅区"],
                 [120.136865,30.265249,"地址：西湖区"]
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
                    $(".us-right-one").html("加载中......");

                },
                success: function(data){
                    $(".us-right-one").html(data);
                    function myFun(result){
                        cityName = result.name;
                        //alert("当前定位城市1:"+cityName);
                        initial('',cityName,'');
                    }
                    var myCity = new BMap.LocalCity();
                    myCity.get(myFun);

                    /*var data_info = [[120.186307,30.288703,"地址：下城区"],
                     [120.150663,30.326118,"地址：拱墅区"],
                     [120.136865,30.265249,"地址：西湖区"]
                     ];*/
                }


            });
            window.location.reload();
        }else if($(window).width() <= 1024){
            var Html = $.ajax({
                url:Url,
                beforeSend: function(){
                    $(".us-right-two").html("加载中......");
                },
                success: function(data){
                    $(".us-right-two").html(data);
                    function myFun(result){
                        cityName = result.name;
                        //alert("当前定位城市2:"+cityName);
                        initial('',cityName,'');
                    }
                    var myCity = new BMap.LocalCity();
                    myCity.get(myFun);
                }
            });
        }
    });

    //function buildmap(data_info){
    //    var map = new BMap.Map("allmap");    // 创建Map实例
    //    map.centerAndZoom(new BMap.Point(longitude,latitude), 10);  // 初始化地图,设置中心点坐标和地图级别
    //    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    //    data_info = eval(data_info);
    //    var myIcon = new BMap.Icon( contextPath + "/views/module/web/pic/pic3-xin.png", new BMap.Size(21,28));
    //    for(var i=0;i<data_info.length;i++){
    //        var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});  // 创建标注
    //        var content = data_info[i][2];
    //        map.addOverlay(marker);               // 将标注添加到地图中
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
                    $(".us-right-one").html("加载中......");
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
                                    createMap();//创建地图
                                    setMapEvent();//设置地图事件
                                    addMapControl();//向地图添加控件
                                    addMapOverlay();//向地图添加覆盖物
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
                                    var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
                                    map.addOverlay(marker);              // 将标注添加到地图中
                                    var opts = {
                                        width : 400,     // 信息窗口宽度
                                        height: 140,     // 信息窗口高度
                                        title : resp.data.dealerName , // 信息窗口标题
                                        enableMessage:true,//设置允许信息窗发送短息
                                        message:""
                                    }
                                    var infoWindow = new BMap.InfoWindow("地址："+resp.data.streetAddress+"<br>电话："+resp.data.phone, opts);  // 创建信息窗口对象
                                    marker.addEventListener("click", function(){
                                        map.openInfoWindow(infoWindow,point); //开启信息窗口
                                    });
                                    map.openInfoWindow(infoWindow,point); //开启信息窗口
                                }
                                //向地图添加控件
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
                    $(".us-right-two").html("加载中......");
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
                                    createMap();//创建地图
                                    setMapEvent();//设置地图事件
                                    addMapControl();//向地图添加控件
                                    addMapOverlay();//向地图添加覆盖物
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
                                    var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
                                    map.addOverlay(marker);              // 将标注添加到地图中
                                    var opts = {
                                        width : 400,     // 信息窗口宽度
                                        height: 140,     // 信息窗口高度
                                        title : resp.data.dealerName , // 信息窗口标题
                                        enableMessage:true,//设置允许信息窗发送短息
                                        message:""
                                    }
                                    var infoWindow = new BMap.InfoWindow("地址："+resp.data.streetAddress+"<br>邮编："+resp.data.zipCode+"<br>电话："+resp.data.phone, opts);  // 创建信息窗口对象
                                    marker.addEventListener("click", function(){
                                        map2.openInfoWindow(infoWindow,point); //开启信息窗口
                                    });
                                    map.openInfoWindow(infoWindow,point); //开启信息窗口
                                }
                                //向地图添加控件
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


    //Ajax加载默认省市
    load("", "#sheng");
    $("#models").change(function() {
        load("", "#sheng");
        var html = "<option value=''> 请选择市 </option>";
        $("#shi").html(html);
    });
    //Ajax请求所在省的市
    $("#sheng").change(function() {
        var modelsId = $('#models option:selected').val();
        if(modelsId == null || modelsId == ''){
            alert("请先选择预约车型");
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
			alert("请先勾选隐私条款，再提交!");
		    return;
		}*/
        if($("#name").val() == ''){
            alert("请先填写姓名，再提交!");
            return;
        }
        if($("#telephone").val() == ''){
            alert("请先填写手机号码，再提交!");
            return;
        }else{
            reg=/^1[3|4|5|8]\d{9}$/;
            if(!reg.test($("#telephone").val())){
                alert("请输入正确的手机号码");
                $("#telephone").focus();
                return;
            }
        }
        if($("#email").val() != ''){
            reg=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
            if(!reg.test($("#email").val())){
                alert("请输入正确的电子邮箱");
                $("#email").focus();
                return;
            }
        }
        if($("#budget").val() != ''){
            reg=/^[0-9]*[1-9][0-9]*$/;
            if(!reg.test($("#budget").val())){
                alert("请输入正确的购车预算");
                $("#budget").focus();
                return;
            }
        }
        //表单提交
        App.Ajax.request({
            type: "POST",
            data: $('#testDrive').serialize(),
            url: contextPath+"/testDrive/save.htm",
            isAutoTip: false,
            success: function(resp){
                if(resp.returnCode == 200){
                    if(resp.result == true){
                        alert("提交成功");
                        var emailAddress;
                        var gender1;
                        if($('#email').val() != ''){
                            emailAddress = $('#email').val();
                        }else{
                            //虚拟邮箱
                            emailAddress ="18758283966@s.com";
                        }
                        if($('#appellation').val() == 1){
                            gender1 = "先生";
                        }else{
                            gender1 = "女士";
                        }
                        //eloqua埋码
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
                                alert('数据同步成功');
                                location.reload(true);
                            },
                            error:function(){
                                alert('数据同步失败');
                            }
                        });

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
    });
});

//加载省市
function load(id, dom) {
    var html = '';
    App.Ajax.request({
        url : contextPath+"/api/dict/getRegion.ns?oid=" + id,
        type : "post",
        isAutoTip : false,
        success : function(resp) {
            if(id == ''){
                html +="<option value=''> 请选择省 </option>";
            }
            if(id != ''){
                html +="<option value=''> 请选择市 </option>";
            }
            for (var i = 0; i < resp.data.length; i++) {
                html += "<option value='"+resp.data[i].oid+"'>"
                    + resp.data[i].name + "</option>";
            }
            $(dom).html(html);
        }
    });
}
//查找经销商
function findDealer(sheng,shi,modelsId){
    var html = '<option value="0">请选择经销商</option>';
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
