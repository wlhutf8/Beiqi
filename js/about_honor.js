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

    var k = $(".course-list ul li").length;
    Enter($('.course-list ul li').eq(0),"Y","0",k,1000,300);
    // var NewUrl = contextPath+"/aboutUs/aboutAjax.htm?pageNo=";
    var p = 1; //记录第几页
    var hasmore = true;
    var allpage = totalPage;
    if(p == allpage){
        $('.down-btn').hide();
    }
    if (!hasmore) { // 判断是否加载下一页
        $('.morebox').hide();
        return false;
    }
    $('.down-btn').click(function () {
        var _this = $(this);
        var k2 = $(".course-list ul li").length;
        Enter($('.course-list ul li').eq(k2-1),"Y","0",6,1000,300);
        p = p + 1;
        $.ajax({
            url: contextPath+"/aboutUs/aboutAjax.htm?pageNo="+p,
            data: { page: p },
            cache: false,
            dataType: 'html',
            beforeSend: function(){
                $(this).html("加载更多...")
            },
            success: function (html) {
                _this.siblings('ul').append(html);
                if (p >= allpage) {
                    $('.down-btn').hide();
                    hasmore = false;
                };
            }
        });
        return false;
    });
})

