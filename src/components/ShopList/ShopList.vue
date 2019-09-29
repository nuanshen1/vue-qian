<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li border-1px">
        <a>
          <div class="shop_left">
            <img class="shop_img" src="./images/01.jpg">
          </div>
          <div class="shop_right">
            <section class="shop_detail_header">
              <h4 class="shop_title ellipsis">锄禾日当午</h4>
              <ul class="shop_detail_ul">
                <li class="supports">保</li>
                <li class="supports">准</li>
                <li class="supports">票</li>
              </ul>
            </section>
            <section class="shop_rating_order">
              <section class="shop_rating_order_left">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                </div>
              </section>
            </section>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ShopList'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
.shop_container
  margin-bottom 50px
.shop_list
  bottom-border-1px(#f1f1f1)
  width 100%
>a
  clearFix()
  display block
  box-sizing border-box
  padding 15px 8px
  width 100%

</style>
