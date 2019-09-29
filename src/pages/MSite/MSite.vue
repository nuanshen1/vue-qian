<template>
  <section class="msite">
    <!--首页头部-->
<HeadTop title="地址">
  <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
    <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
  </HeadTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/04.png">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/04.png">
              </div>
              <span>商超便利</span>
            </a>
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="./images/04.png">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
<ShopList/>
    </div>
  </section>
</template>

<script>
import HeadTop from '../../components/HeadTop/HeadTop'
import ShopList from '../../components/ShopList/ShopList'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  mounted () {
    Swiper('swiper-container', {
      loop: true,
      pagination: {
        el: 'swiper-pagnation'
      }
    })
  },
  components: {
    HeadTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
.msite//首页
  width 100%

.msite_nav
  bottom-border-1px(#e4e4e4)
  margin-top 45px
  height 200px
  background #fff
.swiper-container
    width 100%
.msite_shop_list
  top-border-1px(#e4e4e4)
  margin-top 10px
  background  #fff
.shop_left
  bottom-border-1px(#e4e4e4)
  margin-top 45px
  height 200px
  background #fff
</style>
