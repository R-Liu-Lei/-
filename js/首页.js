/**
 * Created by ���� on 2017/3/20.
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
            var i=$(this).index();
            $(".btn li:eq("+i+")").fadeIn().siblings().hide();
            $(this).addClass("yanse").siblings().removeClass("yanse")

        }
    )
});

//main
$(function () {
        $(".main li").hover(
            function () {
                $(this).children("img").stop().animate({"white":190,"height":130},500)
            },
            function () {
                $(this).children("img").stop().animate({"white":182,"height":123},500)
            }
        )
    }
);

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