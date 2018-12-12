$(function(){
    var _height = window.innerHeight
    var _width =  window.innerWidth

    resize()

    $(window).resize(function(){
        resize()
    });

    $(window).scroll(function(){
        resize()
    })
    $(".header").addClass('kon');
})

function resize(){
    var _height = window.innerHeight
    var _width =  window.innerWidth

    if (_width>=1024) {
        var k = $(window).scrollTop()/10;
        $(".sbanner").css("background-position-y",-k);
    }else{
        return false
    }

}

