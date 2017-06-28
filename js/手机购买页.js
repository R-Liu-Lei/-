/**
 * Created by ���� on 2017/3/30.
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
    $(".left1 li").click(
        function () {
            var i=$(this).children("img").attr("title");
            $("#pic").attr("src",i)
        }
    )
});
$(function () {
    $(".left2 li").click(
        function () {
            var i=$(this).children("img").attr("title");
            $("#pic1").attr("src",i)
        }
    )
});
$(function () {
   $(".right .btn1 li").click(
       function () {
           var a=$(this).index()-1;
           $(".left>div").eq(a).show().siblings().hide();
           $(this).addClass("red").siblings().removeClass("red");
           return false;
       }
   );
});
$(function () {
    $(".btn2 li:last").click(
        function () {
            $(".btn3,.btn4,.btn5").hide();
            $(".btn6").show();
            $(this).addClass("red").siblings().removeClass("red");
            return false;
        }
    );

    $(".btn2 li:first").click(
        function () {
            $(".btn3,.btn4,.btn5").show();
            $(".btn6").hide();
            $(this).addClass("red").siblings().removeClass("red");
            return false;
        }
    );
});
$(function () {
   $(".btn3 li:first").click(
       function () {
           $(".taozhuang").show();
           $(this).addClass("red").siblings().removeClass("red");
           return false;
       }
   );
    $(".btn3 li").eq(1).click(
        function () {
            $(".taozhuang").hide();
            $(this).addClass("red").siblings().removeClass("red");
            return false;
        }
    );
});
$(function () {
   $(".btn4 li").click(
       function () {
           $(".btn5").toggle().siblings(".btn7").toggle();
           $(this).toggleClass("red");
           return false;
       }
   );

});


//main
$(function () {
   $(".biaoti li").click(
       function () {
           var i=$(this).index();
            $(".main_pic ul").eq(i).show().siblings().hide();
            $(this).children("a").addClass("red").parent("li").siblings("li").children("a").removeClass("red");
           return false;
       }
   ) ;

});

$(function () {
    $(window).scroll(
        function(){
            //垂直滚动条滚动的距离
            var a=$(window).scrollTop();
              //console.log(a)查看滚动的距离
            if(a>=1150){
                $(".main_top").addClass("dingwei");
            }
            if(a<1150){
                $(".main_top").removeClass("dingwei");
            }
        }
    );
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



























