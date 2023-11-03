$(document).ready(function () {
    //화면이 준비되면 실행해라.

    setInterval(function () {
        $(".swiper-wrapper").animate({ "marginTop": -300 }, 400, function () {
            //appendTo -> 나를 이동하는것.
            $("div:first-child", this).appendTo($(this))
            $(this).css("marginTop", 0)
        })
    }, 3000)

})