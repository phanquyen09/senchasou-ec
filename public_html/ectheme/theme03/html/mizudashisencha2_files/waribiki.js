/**
 *全画面の薄い赤色の部分（カート含む）の現在割引率○%の部分をカート内の金額に応じたの数値を反映
 *カート内グレーの部分の割引項目に割引率を表示
 */
$(function () {
    const waribiki_rule = {
        0: 0,
        4: 21600,
        6: 54000,
    };

    const waribiki_percent_array = Object.keys(waribiki_rule);
    const max_waribiki_percent = waribiki_percent_array.slice(-1)[0];

    const current_price = $(".waribiki_current_price")
        .text()
        .replace(/[,円]/g, "");
    // const current_price = 0;

    const $waribiki_diff_box = $(".waribiki_diff_box");
    const $waribiki_diff = $(".waribiki_diff");
    const $waribiki_current_percent = $(".waribiki_current_percent");
    const $waribiki_next_percent = $(".waribiki_next_percent");

    let current_rule_percent, current_rule_price;
    let is_waribiki_max = false;

    for (let i = 0; i < waribiki_percent_array.length; i++) {
        const rule_percent = waribiki_percent_array[i];
        const rule_price = waribiki_rule[rule_percent];
        if (rule_price <= current_price) {
            current_rule_index = i;
            current_rule_percent = rule_percent;
            current_rule_price = rule_price;

            if (rule_percent === max_waribiki_percent) {
                is_waribiki_max = true;
            }
        }
    }

    //現在割引率
    $waribiki_current_percent.text(current_rule_percent);

    const next_rule_percent = waribiki_percent_array[current_rule_index + 1];
    const next_rule_price = waribiki_rule[next_rule_percent];
    const waribiki_diff_num = next_rule_price - current_price;

    if (is_waribiki_max) {
        //割引率がMAXだったら「あと○円..」削除
        $waribiki_diff_box.hide();
    } else {
        //あと○○円
        $waribiki_diff.text(waribiki_diff_num.toLocaleString());
        //次の割引率
        $waribiki_next_percent.text(next_rule_percent);
    }
    const $cart_waribiki = $(".cart_waribiki_current_percent");
    const is_cart_waribiki = $cart_waribiki.length;
    if (is_cart_waribiki) {
        $cart_waribiki.text(current_rule_percent);
    }
});
