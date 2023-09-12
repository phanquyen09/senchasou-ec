$(window).on("load resize", function () {
    var w = $(window).width();
    var x = 1344;
    if (w >= x) {
        var $window = $(window);
        var $container = $(".ec-layoutRole__contents");
        var $main = $(".ec-layoutRole__mainBetweenColumn");
        var $sidebar = $(".subNavIn");
        var $rightbar = $(".rightNav");
        var $leftbar = $(".leftNav");
        var windowHeight, containerHeight, sidebarHeight;

        $(".ec-layoutRole__left").prependTo(".ec-layoutRole__contents");
        $("html").removeClass("tblWidth");

        //変数初期化
        var pos = 0;
        var sidebarHeight = $rightbar.outerHeight(true);
        var rightbarHeight = $rightbar.outerHeight(true);
        var leftbarHeight = $leftbar.outerHeight(true);
        var wH = $(window).height();
        var hHr = wH - rightbarHeight;
        var hHl = wH - leftbarHeight;

        $(window).on("scroll", function () {
            if ($(this).scrollTop() < pos) {
                //上スクロール時の処理を記述
                $rightbar.css({ top: 0 });
                $leftbar.css({ top: 0 });
            } else {
                //下スクロール時の処理を記述
                $rightbar.css({ top: hHr + "px" });
                $leftbar.css({ top: hHl + "px" });
            }
            //スクロールが停止した位置を保持
            pos = $(this).scrollTop();
        });
    } else {
        $(".ec-layoutRole__left").insertAfter(".ec-layoutRole__right dl.shopBag");
        $("html").addClass("tblWidth");
    }
});
