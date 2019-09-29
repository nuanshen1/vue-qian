<template>
  <section>
    <HeadTop title="我的"></HeadTop>
    <section class="profile-number">
      <router-link to="/login" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top">登录|注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
      </ul>
    </section>
  </section>
</template>

<script>
import HeadTop from '../../components/HeadTop/HeadTop'
export default {
  components: {
    HeadTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .profile
    width 100%
    overflow scroll
  .profile-number
    margin-top  45.5px
  .profile-link
    clearFix()
    display block
    background-color #02a774
    padding 20px 10px
  .profile_image
    float left
    width 60px
    height 60px
</style>
