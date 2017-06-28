/**
 * Created by 刘磊 on 2017/3/28.
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

//main
$(function () {
   $(".one").hover(
       function () {
           $(this).find("img").stop().animate({"width":810,"height":280,"margin-left":-10,"margin-top":-10},500);
           $(this).children("a").addClass("yanse3").siblings().removeClass("yanse3")
       },
       function () {
           $(this).find("img").stop().animate({"width":790,"height":270,"margin-left":0,"margin-top":0},500);
           $(this).children("a").removeClass("yanse3")
       }
   )
});
$(function () {
    $(".tow").hover(
        function () {
            $(this).find("img").stop().animate({"width":410,"height":280,"margin-left":-10,"margin-top":-10},500);
            $(this).children("a").addClass("yanse3").siblings().removeClass("yanse3")
        },
        function () {
            $(this).find("img").stop().animate({"width":400,"height":270,"margin-left":-5,"margin-top":-5},500);
            $(this).children("a").removeClass("yanse3")
        }
    )
});

$(function () {
    $(".btn li").hover(
        function () {
            $(this).children("span").show();
            $(this).find("img").stop().animate({"width":250,"height":250,"margin-left":-5,"margin-top":-5},500);
            $(this).find("p").stop().animate({"margin-bottom":10}).css("color","black");
        },
        function () {
            $(this).children("span").hide();
            $(this).find("img").stop().animate({"width":240,"height":240,"margin-left":0,"margin-top":0},450);
            $(this).find("p").stop().animate({"margin-bottom":45}).css("color","gray");
        }
    )
});

$(function () {
    $(".box li").click(
        function () {
            var a=$(this).children("a").text();

            //1.先将其他行隐藏掉
            $(".btn li").hide();

            //2.将内容包含?的  显示
            $(".btn li:contains("+a+")").show();

            return false;
        }
    );

    $(".box1 li").click(
        function () {
            var a=$(this).children("a").text();

            //1.先将其他行隐藏掉
            $(".btn li").hide();

            //2.将内容包含?的  显示
            $(".btn li:contains("+a+")").show();

            return false;
        }
    )
});
$(function () {
    $(".suoyou").click(
        function () {
            $(".btn li").show();
            return false;
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

