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


//banner
$(function () {
    $(".dian li").click(
        function () {
            var o=$(this).index();
            $(".icon li:eq("+o+")").fadeIn().siblings().hide();
            $(this).addClass("yanse").siblings().removeClass("yanse")
        }
    )
});


//main
$(function () {
    $(".btn li").hover(
        function () {
            $(this).children("span").show();
            $(this).find("img").stop().animate({"width":250,"height":250,"margin-left":-5,"margin-top":-5},500);
            $(this).find("a").addClass("yanse1").siblings().removeClass("yanse1");
        },
        function () {
            $(this).children("span").hide();
            $(this).find("img").stop().animate({"width":240,"height":240,"margin-left":0,"margin-top":0},450);
            $(this).find("a").removeClass("yanse1")
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
    )
});
$(function () {
    $("#suoyou").click(
        function () {
            $(".btn li").show()
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