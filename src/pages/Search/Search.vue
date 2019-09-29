<template>
<section class="search">
  <HeadTop title="搜索">
  </HeadTop>
  <form class="search_form" action="#">
    <input type="search" name="search" placeholder="请输入商家或美食名称">
    <input type="submit" name="submit" class="search_submit">
  </form>
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
.search
  width 100%
.search_form
  clearFix()
  margin-top 45px
  background-color #fff
  padding 12px 8px
  input
  height 35px
  padding 0 4px
  border-radius 2px
  font-weight bold
</style>
