var _height = window.innerHeight;   
var _width =  window.innerWidth;   

$(function(){
    resize();
    var swiper = new Swiper('.banner-mobile', {
        pagination: '.hj',
        paginationClickable: true,
        autoPlay:2500,
    });

    var swiper2 = new Swiper('.news-banner', {
        pagination: '.hd-1-a',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 4500,
        autoplayDisableOnInteraction: false,
    });
    $(".c-slide .find").click(function(){
		$(".syb").fadeIn();
		var headerajax = contextPath+"/indexpicture/inputAjax.htm";
		$(".syb").load(headerajax,function(){
			$(".syb .box").animate({opacity:"1",marginTop:"-214px"})
		})
	});

	$(".c-slide .acti").click(function(){
		$(".header-ajax").fadeIn();
		var headerajax = contextPath+"/indexpicture/headerAjax.htm";
		$(".header-ajax").load(headerajax,function(){
			$(".header-ajax").animate({right:"0"})
		});
		
	});
	/* $(".c-slide .acti").click(function(){
    	$(".header-ajax").fadeIn();
    	var headerajax = "${contextPath}/indexpicture/headerAjax.htm";
    	$(".header-ajax").load(headerajax)
    });

    $(".c-slide .find").click(function(){
    	$(".syb").fadeIn();
    	var headerajax = "${contextPath}/indexpicture/inputAjax.htm";
    	$(".syb").load(headerajax,function(){
    		$(".syb .box").animate({opacity:"1",marginTop:"-214px"})
    	})
    }); */

    _PreLoadImg([
         contextPath+"/views/module/web/img/img-06.png",
    ],function(){
        var k =  $(".banner .img").height();    
        $(".banner .bd ul").height(k);
        $(".banner").height(k);
    })
    
    

    $(window).resize(function(){
        resize();
    });
    
    var div = document.getElementById('div');

    var video1=document.getElementById("cideoPlay1");
    var video2=document.getElementById("nj");

    var videoimg=document.getElementById("video-img");

    var mobile=document.getElementById("mobvideo");

    div.onmouseenter = function(){
        video1.play();
        videoimg.style.opacity = "0"; 
    }
    div.onmouseleave = function(){
        video1.pause();
        videoimg.style.opacity = "100"; 
    }
    video2.onclick=function(){
        if(video2.classList.contains('cur')){
            video2.pause();
            video2.className = "curr";
        }else{
            video2.play();
            video2.className = "cur";
        }
    }

    
    $(window).scroll(function(){
        var _height = window.innerHeight;   
        var _width =  window.innerWidth; 

        var _height2 = _height/5*4;

        

        if($(window).scrollTop()>= $(".video").offset().top - _height2) {
            $(".video").addClass('kon')
        };
        if($(window).scrollTop()>= $(".images").offset().top - _height2) {
            $(".images").addClass('kon')
        };
        if($(window).scrollTop()>= $(".two").offset().top - _height2) {
            Enter($(".two").children('').eq(0), "top", 0, 4, 300, 400)
        };
        
        $(".mobile-box").each(function(){
            if($(window).scrollTop()>= $(this).offset().top - _height2) {
                $(this).animate({opacity:"1",top:"0px"},1000)
            };
        });
    })

    $(".load").height(window.innerHeight);

    if ($(window).width()>1024) {
        $('body','html').addClass("fex");
        setTimeout(function(){
            $(".load").addClass("onc");
        },2000);
        setTimeout(function(){
            $(".w-warpx").addClass("onc")
            $('body','html').removeClass("fex");
        },2000)
    }


    setTimeout(function(){
        $(".header").addClass('kon')
        $(".banner").addClass('kon')

        jQuery(".banner").slide({mainCell:".bd ul",effect:"fold",autoPlay:true});
    },2400)



    if (_width>=1024) {
        var k = _height - 90;
        $(".banner").height(k)
        $(".banner .bd ul").height(k)
        $(".banner .bd li").height(k)  
    }else{
        //图片加载 调用方法
        var arr = new Array();
        $('.banner-mobile').find('img').each(function(){
         arr.push($(this).attr('src'));
        })
        _PreLoadImg(
         arr
        ,function(){
            var k = window.innerHeight; 
            var kk = $(".banner-mobile").height();  
            var jk = k - kk - 50;
            $(".mobile-list").height(jk)
            $(".mobile-list li").height(jk*0.5);
            $(".mobile-list li img").css("margin-top",(jk*0.5-35)/2);
            $(".mobile-list li span").css("line-height",jk*0.5+"px")
        }) 
    }

    $(".video_dd").on('click',function(){
        $(".video-ajax").fadeIn(0);
        $(".video-ajax").addClass("hide");
        $('.video-ajax video').trigger('play');
        setTimeout(function(){
            $(".video-ajax").addClass("hidetwo");
        },400)
    })

    $(".bg-close").on('click',function(){
        setTimeout(function(){
            $(".video-ajax").removeClass("hide");
        },400)
        $(".video-ajax").removeClass("hidetwo");
        $('.video-ajax video').trigger('pause');
        setTimeout(function(){
            $(".video-ajax").fadeOut();
        },800)
    })
    $(".video-ajax").on('click','.videobox-t',function(){
        setTimeout(function(){
            $(".video-ajax").removeClass("hide");
        },400)
        $(".video-ajax").removeClass("hidetwo");
        setTimeout(function(){
            $(".video-ajax").fadeOut(function(){
                $('video').trigger('pause');
            });
        },800)
       
    })


    if ($(window).width()>1024) {
        $('body').addClass("bac-f")
    }else{
        $('body').addClass("bac-e")
    }
    // setTimeout(function(){
    //  fll = $(".video .fll video").height();
    // },1000)
    //  console.log(fll);

    

})


function resize(){
    var _height = window.innerHeight;   
    var _width =  window.innerWidth; 

    if ($(window).width()>1024) {
        $('body','html').addClass("fex");
        setTimeout(function(){
            $(".load").addClass("onc");
        },2000);
        setTimeout(function(){
            $(".w-warpx").addClass("onc")
            $('body','html').removeClass("fex");
        },2000)
    }
    setTimeout(function(){
        var arr2 = new Array();
        $('.images .frr').find("img").each(function(){
            arr2.push($(this).attr('src'));
        })
        _PreLoadImg(arr2,function(){
            var k =  $(".images .frr img").height();    
            $(".images .fll").height(k)
            $(".images .fll table").height(k)
        })
    },4000)
    if ($(window).width()>1024) {
        $('body').addClass("bac-f")
    }else{
        $('body').addClass("bac-e");
        $(".listboxss").addClass("cur");
        $("#index-canvas").hide();
    }

    setTimeout(function(){
        var setFullYear = $(".video .fll").height();
        $(".video .frr").height(setFullYear);
        $(".video .frr table").height(setFullYear);
    },4000)
    
    setTimeout(function(){
        var ml = $(".two .box .potext").height()+1
        $(".two .box .potext").css("bottom",-ml)
    },1000)


    /*var header = contextPath+"/indexpicture/pc/header.htm";
    $(".ajax-header").load(header,function(){
        $(".header").addClass('kon');
        $(".header .bot .nav a").eq(0).addClass('on')
    });*/
    $(".header").addClass('kon');
    $(".header .bot .nav a").eq(0).addClass('on');
}