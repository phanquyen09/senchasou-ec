<div class="prd_lst_block container_section">
  <h2 class="ttl_h2">カテゴリー：<{if $search_category!=""}><{$search_category}><{else}>指定なし<{/if}>／キーワード：<{if $search_keyword!=""}><{$search_keyword}><{else}>指定なし<{/if}>&nbsp;の検索結果</h2>

  <{if $productlist_num != 0}>
    <div class="prd_lst_sort icon icon_sort">
      <{if $productlist_sort_now != ""}>
        <a href="<{$productlist_sort_def}>">おすすめ順</a>
      <{else}>
        <strong>おすすめ順</strong>
      <{/if}>
      &nbsp;|&nbsp;
      <{if $productlist_sort_now != "p"}>
        <a href="<{$productlist_sort_price}>">価格順</a>
      <{else}>
        <strong>価格順</strong>
      <{/if}>
      &nbsp;|&nbsp;
      <{if $productlist_sort_now != "n"}>
        <a href="<{$productlist_sort_new}>">新着順</a>
      <{else}>
        <strong>新着順</strong>
      <{/if}>
    </div>
    <p class="prd_search_hit">
      <{$productlist_num}>件の商品が見つかりました
    </p>
    <ul class="prd_lst prd_lst_s clearfix">
      <{section name=num loop=$productlist}>
        <li class="prd_lst_unit prd_lst_unit_s">
          <a href="<{$productlist[num].link_url}>" class="prd_lst_link">
            <{if $productlist[num].img_url != ""}>
              <img src="<{$productlist[num].img_url}>" class="prd_lst_img" alt="<{$productlist[num].name}>" />
            <{else}>
              <img src="https://img.shop-pro.jp/tmpl_img/63/prd_lst_noimage.png" class="prd_lst_img" alt="<{$productlist[num].name}>" />
            <{/if}>
          </a>
          <span class="prd_lst_name prd_lst_span">
            <a href="<{$productlist[num].link_url}>"><{$productlist[num].name}></a>
          </span>
          <{if $productlist[num].s_expl != ""}>
            <span class="prd_lst_exp prd_lst_span">
              <{$productlist[num].s_expl}>
            </span>
          <{/if}>
          <{if $members_login_flg == true && $productlist[num].discount_flg == true}>
            <span class="prd_lst_regular prd_lst_span"><{$productlist[num].regular_price}></span>
          <{/if}>
          <{if $productlist[num].soldout_flg == false}>
            <span class="prd_lst_price prd_lst_span"><{$productlist[num].price}></span>
            <{if $members_login_flg == true && $productlist[num].discount_flg == true}>
              <span class="prd_lst_discount prd_lst_span"><{$productlist[num].discount_rate}>OFF!!</span>
            <{/if}>
          <{else}>
            <span class="prd_lst_soldout prd_lst_span">SOLDOUT</span>
          <{/if}>
        </li>
      <{/section}>
    </ul>
    <div class="prd_lst_pager">
      <ul>
        <li class="prd_lst_pager_prev">
          <{if $productlist_prev_page == ""}>
            <span class="icon icon_prev_dis">前のページ</span>
          <{else}>
            <a href="<{$productlist_prev_page}>" class="icon icon_prev">前のページ</a>
          <{/if}>
        </li>
        <li class="prd_lst_pos">
          <b><{$productlist_num}></b><span>商品中</span>&nbsp;<b><{$productlist_snum}>-<{$productlist_enum}></b><span>商品</span>
        </li>
        <li class="prd_lst_pager_next">
          <{if $productlist_next_page == ""}>
            <span class="icon icon_next_dis">次のページ</span>
          <{else}>
            <a href="<{$productlist_next_page}>" class="icon icon_next">次のページ</a>
          <{/if}>
        </li>
      </ul>
    </div>
    <div class="sp_prd_lst_pos">
      <b><{$productlist_num}></b><span>商品中</span>&nbsp;<b><{$productlist_snum}>-<{$productlist_enum}></b><span>商品</span>
    </div>
  <{else}>
    <{if $subcategory_num == 0 && $subgroup_num == 0}>
      <p class="prd_lst_none">該当する商品がありません</p>
    <{/if}>
  <{/if}>

</div>
