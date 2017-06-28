/**
 * Created by ���� on 2017/3/22.
 */
//header
$(function () {
    $(".nav a").hover(
        function () {
            $(this).addClass("bkb");
            return false;
        },
        function () {
            $(this).removeClass("bkb");
        }
    )
});
$(function () {
    $(".denglu a").hover(
        function () {
            $(this).addClass("bianse");
            return false;
        },
        function () {
            $(this).removeClass("bianse");
        }
    )
});

//banner
$(function () {
    $(".meun1").hover(
        function () {
            $(this).addClass("bg");
            $(this).children("a").addClass("sanjiao");
        },
        function () {
            $(this).removeClass("bg");
            $(this).children("a").removeClass("sanjiao");
        }
    );
    $(".meun2").hover(
        function () {
            $(this).addClass("bg1");
            $(this).children("a").addClass("sanjiao");
        },
        function () {
            $(this).removeClass("bg1");
            $(this).children("a").removeClass("sanjiao");
        }
    );
    $(".meun3").hover(
        function () {
            $(this).addClass("bg2");
            $(this).children("a").addClass("sanjiao");
        },
        function () {
            $(this).removeClass("bg2");
            $(this).children("a").removeClass("sanjiao");
        }
    );

    $(".meun>li").hover(
        function () {
            var b=$(this).index();
            $(".meuns:eq("+b+")").show()
        },
        function(){
            $(".meuns").hide()
        }
    );

    $(".dian li").click(
        function () {
            var b=$(this).index();
            j=b;
            $(".lunbo li:eq("+b+")").fadeIn().siblings().hide();
            $(this).addClass("bb").siblings().removeClass("bb")
        }
    );

    var j=0;
    $(".right").click(
        function () {
            j=j+1;
            if(j==3){
                j=0
            }
            $(".lunbo li").eq(j).fadeIn().siblings().hide();
            $(".dian li").eq(j).addClass("bb").siblings().removeClass("bb")
            return false;
        }
    );
    $(".left").click(
        function () {
            if(j==0){
                j=3
            }
            j=j-1;
            $(".lunbo li").eq(j).fadeIn().siblings().hide();
            $(".dian li").eq(j).addClass("bb").siblings().removeClass("bb")
            return false;
        }
    );

});

//main
$(function () {
    $(".main .one").hover(
        function () {
            $(".pic img").stop().animate({"width":270,"height":270})

        },
        function () {
            $(".pic img").stop().animate({"width":250,"height":250})
        }
    );
    $(".main .tow").hover(
        function () {
            $(".pic01 img").stop().animate({"width":270,"height":270})

        },
        function () {
            $(".pic01 img").stop().animate({"width":250,"height":250})
        }
    )
});

$(function () {
   $(".dian1 li").click(
       function () {
           var z=$(this).index();
           $(".main1_banner div").eq(z).fadeIn().siblings().hide();
           $(this).addClass("bb").siblings().removeClass("bb")
       }
   )
});

$(function () {
    $(".con").hover(
        function () {
            $(this).find(".con1").stop().animate({"margin-left":-90});
            $(this).find(".text").stop().animate({"margin-left":-395});
            $(this).find(".con_inner").stop().animate({"margin-left":-65});
        },
        function () {
            $(".con1").stop().animate({"margin-left":0});
            $(".text").stop().animate({"margin-left":0});
            $(".con_inner").stop().animate({"margin-left":0});
        }
    )
});

$(function () {
   $(".peijian li").hover(
       function () {
           $(this).children("a").css("color","red")
       },
       function () {
           $(this).children("a").css("color","black")
       }
   )
});

//footer
$(function () {
    $(".footer_right .pic1").hover(
        function () {
            $(this).addClass("tu1")
        },
        function () {
            $(this).removeClass("tu1")
        }
    );
    $(".footer_right .pic2").hover(
        function () {
            $(this).addClass("tu2")
        },
        function () {
            $(this).removeClass("tu2")
        }
    );
    $(".footer_right .pic3").hover(
        function () {
            $(this).addClass("tu3")
        },
        function () {
            $(this).removeClass("tu3")
        }
    );
    $(".footer_right .pic4").hover(
        function () {
            $(this).addClass("tu4")
        },
        function () {
            $(this).removeClass("tu4")
        }
    )

});

