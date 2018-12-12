$(function(){

    $(".header").addClass('kon');

    var cityName;
    var longitude;
    var latitude;

    function initial(province,city,modelsId,dealerName){
        var data_info =new Array();
        var infor = '';
        App.Ajax.request({
            url : contextPath+"/testDrive/initial.htm",
            params : {
                'province': province,
                'city': city,
                'type': type,
                'dealerName': dealerName,
                'modelsId': modelsId
            },
            type : "post",
            isAutoTip : false,
            success : function(resp) {
                if (resp.returnCode == 200) {
                    if(resp.data.length > 0){
                        for (var i = 0; i < resp.data.length; i++) {
                            infor="<h4 class='h4'>"+resp.data[i].dealerName+"</h4>"+"<div class='p'>"+resp.data[i].streetAddress+"</div>"+"<div class='time'>电话："+resp.data[i].phone+"</div>"+"<div class='bot'>";
                            if(type == 1){
                                infor += "<a href='"+contextPath+"/testDrive/all.htm' class='y-yue fl' target='_blank'>预约试驾</a>";
                            }
                            infor += "<a target='_blank' href='http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D"+resp.data[i].streetAddress+"' class='adds fl'>到这里去</a>"+"</div>"+"</div>";
                            data_info.push([resp.data[i].longitude,resp.data[i].latitude,infor]);
                        }
                        longitude = resp.data[0].longitude;
                        latitude = resp.data[0].latitude;
                    }
                } else if (resp.returnCode == 0 && resp.data != null) {
                    alert(resp.data);
                }
                setTimeout(function(){
                    buildmap(data_info);
                },500)

            }
        });
    }

    var Url = contextPath+"/testDrive/deiveMapAjax.htm";
    var Html = $.ajax({
        url:Url,
        beforeSend: function(){
            $(".us-right").html("加载中......");
        },
        success: function(data){
            $(".us-right").html(data);
            function myFun(result){
                cityName = result.name;
                initial('',cityName,'','');
                $(".w-list-search").load(url1,{city:cityName,type:type},function(){
                    if ($(window).width()>=1024) {
                        $(".n-map-scroll").mCustomScrollbar({});
                    }
                    //Ajax加载默认省市
                    load("", "#sheng");
                    //Ajax请求所在省的市
                    $("#sheng").change(function() {
                        load($("#sheng").val(), "#shi");
                        initial($('#sheng option:selected') .text(),'',$('#modelsId option:selected').val(),'');
                        $(".w-list-search").load(url1,{province:$('#sheng option:selected') .text(),modelsId:$('#modelsId option:selected').val(),type:type},function(){
                        });
                    });
                    $("#shi").change(function() {
                        initial($('#sheng option:selected') .text(),$('#shi option:selected') .text(),$('#modelsId option:selected').val(),'');
                        $(".w-list-search").load(url1,{province:$('#sheng option:selected') .text(),city:$('#shi option:selected') .text(),modelsId:$('#modelsId option:selected').val(),type:type},function(){
                        });
                    });
                    $("#modelsId").change(function() {
                        initial($('#sheng option:selected') .text(),$('#shi option:selected') .text(),$('#modelsId option:selected').val(),'');
                        $(".w-list-search").load(url1,{province:$('#sheng option:selected') .text(),city:$('#shi option:selected') .text(),modelsId:$('#modelsId option:selected').val(),type:type},function(){
                        });
                    });
                });

            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);
        }
    });



    //function buildmap(data_info){
    //    //创建和初始化地图函数：
    //    function initMap(){
    //        createMap();//创建地图
    //        setMapEvent();//设置地图事件
    //        addMapControl();//向地图添加控件
    //        addMarker();//向地图中添加marker
    //    }
    //    //创建地图函数：
    //    function createMap(){
    //        var map = new BMap.Map("allmap");//在百度地图容器中创建一个地图
    //        var point1 = new BMap.Point(longitude,latitude);//定义一个中心点坐标
    //        map.centerAndZoom(point1,10);//设定地图的中心点和坐标并将地图显示在地图容器中
    //        window.map = map;//将map变量存储在全局
    //    }
    //    //地图事件设置函数：
    //    function setMapEvent(){
    //        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
    //        map.disableScrollWheelZoom();//禁用地图滚轮放大缩小，默认禁用(可不写)
    //        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
    //        map.enableKeyboard();//启用键盘上下左右键移动地图
    //    }
    //    //地图控件添加函数：
    //    function addMapControl(){
    //        //向地图中添加缩放控件
    //        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    //        map.addControl(ctrl_nav);
    //    }
    //    function addMarker(){
    //        var opts = {
    //            width : 280,     // 信息窗口宽度
    //            height: 165,     // 信息窗口高度
    //            enableMessage:true//设置允许信息窗发送短息
    //        };
    //        var myIcon = new BMap.Icon( contextPath + "/views/module/web/pic/pic3-xin.png", new BMap.Size(21,28));
    //        for(var i=0;i<data_info.length;i++){
    //            var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});  // 创建标注
    //            var content = data_info[i][2];
    //            map.addOverlay(marker);               // 将标注添加到地图中
    //            addClickHandler(content,marker);
    //        }
    //        function addClickHandler(content,marker){
    //            marker.addEventListener("click",function(e){
    //                    openInfo(content,e)}
    //            );
    //        }
    //        for(var i=0;i<data_info.length;i++){
    //            var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});  // 创建标注
    //            var content = data_info[i][2];
    //            map.addOverlay(marker);               // 将标注添加到地图中
    //            addClickHandler(content,marker);
    //        }
    //        function addClickHandler(content,marker){
    //            marker.addEventListener("click",function(e){
    //                    openInfo(content,e)}
    //            );
    //        }
    //        function openInfo(content,e){
    //            var p = e.target;
    //            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
    //            var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象
    //            map.openInfoWindow(infoWindow,point); //开启信息窗口
    //            map.centerAndZoom(point,16);//设定地图的中心点和坐标并将地图显示在地图容器中
    //        }
    //        $(".n-map-scroll").on('click','.list-sd',function(){
    //            var _this=$(this);
    //            var point = new BMap.Point(_this.attr("data-lng"), _this.attr("data-lat"));
    //            var Tex1 = _this.find(".h-18").text();
    //            var Tex2 = _this.find(".h-14").text();
    //            var Tex3 = _this.find(".phone").text();
    //            infor="<h4 class='h4'>"+Tex1+"</h4>"+"<div class='p'>"+Tex2+"</div>"+"<div class='time'>"+Tex3+"</div><div class='bot'>";
    //            if(type == 1){
    //                infor += "<a href='"+contextPath+"/testDrive/all.htm' class='y-yue fl' target='_blank'>预约试驾</a>";
    //            }
    //            infor += "<a target='_blank' href='http://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D"+Tex2+"' class='adds fl'>到这里去</a>"+"</div>"+"</div>";
    //            var infoWindow = new BMap.InfoWindow(infor,opts);  // 创建信息窗口对象
    //            map.openInfoWindow(infoWindow,point); //开启信息窗口
    //            map.centerAndZoom(point,16);//设定地图的中心点和坐标并将地图显示在地图容器中
    //        })
    //    }
    //    initMap();//创建和初始化地图
    //}



    setTimeout(function(){
        if ($(window).width()>1024) {
            $(".us-right").width(document.documentElement.clientWidth-500);
        };
    },500)

    window.onresize = function(e) {
        if ($(window).width()>1024) {
            $(".us-right").width(document.documentElement.clientWidth-500);
        };
    }

    $('.wn-map-scroll').on('click','.list-top',function(){
        var index=$(this);
        $(this).toggleClass('on').parents('.listbox').siblings().find('.list-top').removeClass('on');
        $(this).parents('.listbox').find('.w-listx').slideToggle();
        $(this).parents('.listbox').siblings().find('.w-listx').slideUp();
    });


    var url1 = contextPath+'/dealers/findUsListAjax.htm';
    var url2 = contextPath+'/dealers/findUsMapAjax.htm';

    $(".us-right").load(url2);
    $(".lix").on('click',function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        var id = $(this).attr("data-id");
        location.href = contextPath+"/dealers/findUs.htm?type="+id;
    })
})




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
