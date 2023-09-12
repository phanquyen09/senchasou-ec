/* カスタマイズ用Javascript */
/**
 * ゆうパケット選べるセットのカート追加ボタンを制御する
 * 現時点でゆうパケット選べるセット(product_id = 2008)のみ
 */
function yuupake_set() {
    var product_id = $('input:hidden[name="product_id"]').val();

    if (product_id === "2008") {
        var option_price_inctax_default = $("#option_price_inctax_default").text();
        var option_price_total = parseInt(option_price_inctax_default.replace(/,/g, ''));
        if (option_price_total < 2000) {
            // 1600円未満の場合、カートに追加ボタンは無効化
            // 文言変更
            $(".add-cart").text("2,000円以下(送料含めず)のため購入できません。");
            $(".add-cart").prop("disabled", true);
        } else {
            $(".add-cart").text("カートに入れる");
            $(".add-cart").prop("disabled", false);
        }
    }

}

$(function () {
    $("#productoption1").change(function () {
        yuupake_set();
    });
    $("#productoption2").change(function () {
        yuupake_set();
    });
    $("#productoption3").change(function () {
        yuupake_set();
    });
});