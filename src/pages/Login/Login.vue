<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;" >密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码">
            </section>
            <section class="login_hint">
              温馨提示
              <a href="javascript:;">用户协议</a>
            </section>
          </div>
          <div>
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户">
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="11" placeholder="密码">
                <img class="login_verification" src="./images/01.png">
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:;" class="go_bank" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
.loginContainer
  width 100%
  height 100%
  background #fff
.loginInner
  padding-top 60px
  width: 80%
  margin 0  auto
.login_header
.login_logo
  font-weight bold
  font-size 40px
  color #02a774
  text-align center
.login_header_title
  padding-top 40px
  text-align center
>a
  color #333
  font-size 14px
  padding-bottom 4px
&:first-child
  margin-right 40px
&:on
  color #02a774
  font-weight 700
  border-bottom 2px solid #02a774
.login_content
>form
>div
  display none
&.on
  display block
</style>
