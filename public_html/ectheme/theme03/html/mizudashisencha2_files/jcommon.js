/*
 * jcommon.js
 * Copyright (c) 2018 C.M.A. Co.,Ltd.
 *
 * Last Added: 2018-03-02
 *
 */

$(function () {
    var wH = $(window).height(),
        wW = $(window).width();
    var userAgent = window.navigator.userAgent.toLowerCase();
    var isForm = $("body.form").length;
    var isIE =
        userAgent.indexOf("msie") != -1 ||
        userAgent.indexOf("trident") != -1 ||
        userAgent.indexOf("edge") != -1;
    if (isForm) {
        //フォームのみ処理
    }
    if (isIE) {
        //IEのみ処理
        $("html").addClass("ie");
    }
    //CURRENT
    var lchref = location.href;
    $("#globalNav li a").each(function () {
        var h = $(this).attr("href");
        var abPath = $(this).attr("href", h).get(0).href;
        if (abPath == lchref) {
            $(this).addClass("current");
        }
        if (lchref.indexOf(abPath) != -1) {
            $(this).addClass("current");
        }
    });

    //objectFit
    if ("objectFit" in document.documentElement.style === false) {
        $(function () {
            $(
                "body.information.cms #contents main .entryList .firstEntry a .photo,body.cms #contents #sub .subPopular ol li a .photo"
            ).each(function () {
                var imgEl = $(this).find("img"),
                    imgSrc = imgEl.attr("src");
                imgEl.css("opacity", 0);
                $(this).css({
                    background: "url(" + imgSrc + ") no-repeat center top",
                    "background-size": "cover",
                });
            });
        });
    }

	//カタログ請求ポップアップ
    $(".popup").click(function () {
        window.open(
            this.href,
            "WindowName",
            "width=780,height=600,resizable=yes,scrollbars=yes"
        );
        return false;
    });

    //SlideToggle
    $(".toggleBox dd").hide();
    $(".toggleBox dt").click(function () {
        $(this).toggleClass("active");
        $(this).next().stop().slideToggle(500);
    });

	//load終わったらactive付ける
    $(window).on("load", function () {
        setTimeout(function () {
            $('body[class^="LC_Page_Shopping"] .flow_area ul').addClass(
                "active"
            );
        }, 800);
    });

	//外部リンクは別ウインドウを設定
	$('a[href^="http"]:not([href*="xn--68j3b285ocet5sxjpbrsu61e3ke.jp"])').click(function() {
        window.open(this.href, '_blank');
        return false;
    })
    .addClass('externalLink');
	//別ウィンドウを設定
    $('a[href$=".pdf"],a[href$=".asx"]').click(function () {
        window.open(this.href, "_blank");
        return false;
    });
	//スクロールにあわせてクラス付与
    $(window).on("scroll load", function () {
        var scPos = wH + $(this).scrollTop();
        var $target = $(".contentsBox");
        $target.each(function () {
            var conPos = $(this).offset();
            if (scPos > conPos.top + 300) {
                $(this).addClass("action");
            }
        });
    });

	//右クリック禁止
    if ($("body.cms").length) {
        $("#contents").contextmenu(function (e) {
            alert('右クリック禁止です');
            e.preventDefault();
        });
    }
    //totop
    var topBtn = $("p.toTop a");
    /*topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100){topBtn.fadeIn();} else{topBtn.fadeOut();}
    });*/
    topBtn.click(function () {
        $("body,html").animate({ scrollTop: 0 }, 800);
        return false;
    });

    if (device.desktop()) {
		//スクロールしたら表示
        /*$(window).on('scroll', function() {
			var resBox = $(this).scrollTop();
			var $box = $('#suddenBnr');
			if (resBox >= 600) {
				$box.fadeIn().css('display', 'block');
			} else {
				$box.fadeOut();
			}
		});*/
        $(window).on("load", function () {
            $(function () {
                var flag = "up";
                var heightBox = $("#suddenBnr").innerHeight();
                var menuBox = $("#suddenBnr");
                var menuBtn = $("#suddenBnr #rBtn");

                //
                $(window).on("scroll", function () {
                    if ($(this).scrollTop() > 0) {
                        if (flag === "up") {
                            menuBox.addClass("down");
                            menuBox.stop().animate(
                                {
                                    bottom: "-" + heightBox + "px",
                                },
                                500
                            );
                            flag = "down";
                        }
                    } else {
                        if (flag === "down") {
                            menuBox.removeClass("down");
                            menuBox.stop().animate(
                                {
                                    bottom: 0,
                                },
                                500
                            );
                            flag = "up";
                        }
                    }
                });

				//クリックした場合
                menuBtn.on("click", function () {
                    var targetId = $(menuBox).attr("class");

                    if (targetId == "down") {
                        //console.log('hoge');
                        menuBox
                            .stop()
                            .animate(
                                {
                                    bottom: 0,
                                },
                                300
                            )
                            .attr("class", "");
                    } else {
                        //console.log('huga');
                        menuBox
                            .stop()
                            .animate(
                                {
                                    bottom: "-" + heightBox + "px",
                                },
                                300
                            )
                            .attr("class", "down");
                    }
                });
            });
        });

        $(window).on("scroll", function () {
            if ($("#suddenBnr").length) {
                $("footer").css("padding-bottom", "150px");
            }
            if ($("#suddenBnr.down").length) {
                $("footer").css("padding-bottom", "30px");
            }
        });
    }

    if (device.tablet()) {
        //タブレット
        $("head").append("<meta name='viewport' content='width=1200px'/>");
    }
    if (device.mobile()) {
        //スマホ
        $("button#spBtn").on("click", function () {
            $(this).toggleClass("is-active");
            $("#spMenu .menu").fadeToggle("fast").toggleClass("open");
        });

        //スライドメニュー
        var mySlidebar = new $.slidebars({
            siteClose: true,
            disableOver: 480,
            hideControlClasses: true,
            scrollLock: true,
        });

        //電話番号リンク
        $(".telNumber").each(function () {
            var str = $(this).text(),
                num = str.match(/\d/g).join("");
            $(this).wrapInner('<a href="tel:' + num + '"></a>');
        });

        //要素移動
        $("header #htContent .htTel").appendTo("#spMenu #spHead");
        $("header #htContent .htMenu").appendTo("header");
        $(".ec-layoutRole__contents .subNav").prependTo("#spHead");
        $(".checkList").prependTo("#spCheckList");
        $(".ec-layoutRole__right .shopBag").insertAfter("#sb-site");
        $("body.LC_Page_Products_Detail #item_desc .itemInfo .txt h3").addClass(
            "logo_title"
        );
        $(
            "body.LC_Page_Products_Detail #detailarea #detailrightbloc .detailBox .cartArea"
        ).insertBefore(
            "body.LC_Page_Products_Detail #detailarea #detailrightbloc .detailBox .commentArea ul"
        );

        $(window).on("load", function () {
            if ($("#suddenBnr").length) {
                var suddenH = $("#suddenBnr").height();
                $("header").css("margin-top", suddenH + "px");
            }
        });
    }

    
	//アンカーリンク
    $('body#campaignIndex main #itemArea .btn a[href^="#"]').click(function () {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    $("body.LC_Page_Cart table.cartTbl td").each(function () {
        var txt = $(this).html();
        $(this).html(
            txt
                .replace("里山の純 3本セット 2,900円(税込):購入しない", "")
                .replace("葛野ほまれ2本セット 2,800円(税込):購入しない", "")
                .replace(
                    "掛川茶セット(深蒸し茶の郷×2本・一豊・千代の功名茶×1本) 2,800円(税込):購入しない",
                    ""
                )
                .replace(
                    "深蒸し茶セット(深蒸し茶の郷×1本・葛野やちよ×1本・一豊・千代の功名茶×1本)2,800円(税込):購入しない",
                    ""
                )
                .replace(
                    "お茶好きセット(葛野はつづみ×1本・葛野するが×1本)　 2,900円(税込):購入しない",
                    ""
                )
                .replace("里山の詩(200g×2本)セット:購入しない", "")
        );
    });
});
