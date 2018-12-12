$(function(){
    $(window).scroll(function(){
        var _height = $(window).height()/4*2;
        var _height2 = $(window).height()/4*3;

        if ($(window).scrollTop() >= $(".charging-pile .box1").offset().top - _height2) {
            Enter($(".charging-pile .box1").children('').eq(0), "top", 0, 4, 600, 400)
        }

        if ($(window).scrollTop() >= $(".charging-pile .box2").offset().top - _height2) {
            Enter($(".charging-pile .box2 .sda").children('').eq(0), "top", 0, 4, 600, 400)
        }

        $(".charging-pile .box2 .boxnum.kk").each(function(){
            if ($(window).scrollTop() >= $(this).offset().top - _height2) {
                Enter($(this).children('').eq(0), "top", 0, 4, 600, 400)
            }
        });

        if ($(window).scrollTop() >= $(".boxnum .sda").offset().top - _height2) {
            Enter($(".boxnum .sda").children('').eq(0), "top", 0, 4, 600, 400)
        }

        if ($(window).scrollTop() >= $(".charging-pile .box3").offset().top - _height2) {
            Enter($(".charging-pile .box3").children('').eq(0), "top", 0, 4, 600, 400)
        }

        if ($(window).scrollTop() >= $(".charging-pile .box4").offset().top - _height2) {
            Enter($(".charging-pile .box4 .w1400").children('').eq(0), "top", 0, 4, 600, 400)
        }
    })

    resize()

    $(window).resize(function(){
        resize();
    });

    $(".charging-pile .box1 .tee .top span").eq(0).addClass('cur')
    $(".charging-pile .box1 .tee .bot .cl1").eq(0).show();

    $(".charging-pile .box1 .tee .top span").click(function(){
        var k = $(this).index();
        $(this).addClass('cur').siblings('').removeClass('cur')
        $(".charging-pile .box1 .tee .bot .cl1").eq(k).show();
        $(".charging-pile .box1 .tee .bot .cl1").eq(k).siblings('').hide();
    });

    $(".header").addClass('kon');
})

function resize(){
    var _height = window.innerHeight;
    var _width =  window.innerWidth;

    var _height = $(window).height()/4*2;
    var _height2 = $(window).height()/4*3;

    if (_width<=1024) {
        var k = $(".charbanner").data("mob");
        $(".charbanner img").attr({
            src: k,
        });

        var k1 = $(".boxnum.k1 .pc").data("mob");
        $(".boxnum.k1 .pc img").attr({
            src: k1,
        });

        var k2 = $(".boxnum.k2 .pc").data("mob");
        $(".boxnum.k2 .pc img").attr({
            src: k2,
        });

        var k3 = $(".boxnum.k3 .pc").data("mob");
        $(".boxnum.k3 .pc img").attr({
            src: k3,
        });

        var k4 = $(".boxnum.k4 .pc").data("mob");
        $(".boxnum.k4 .pc img").attr({
            src: k4,
        });

        if ($(window).scrollTop() >= $(".charging-pile .box1").offset().top - _height2) {
            Enter($(".charging-pile .box1").children('').eq(0), "top", 0, 4, 600, 400)
        }

    }else{
        var k = $(".charbanner").data("pc");
        $(".charbanner img").attr({
            src: k,
        });

        var k1 = $(".boxnum.k1 .pc").data("pc");
        $(".boxnum.k1 .pc img").attr({
            src: k1,
        })

        var k2 = $(".boxnum.k2 .pc").data("pc");
        $(".boxnum.k2 .pc img").attr({
            src: k2,
        });

        var k3 = $(".boxnum.k3 .pc").data("pc");
        $(".boxnum.k3 .pc img").attr({
            src: k3,
        });

        var k4 = $(".boxnum.k4 .pc").data("pc");
        $(".boxnum.k4 .pc img").attr({
            src: k4,
        });
    }
}

