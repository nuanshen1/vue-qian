<template>
  <header class="header">
      <slot name="left"></slot>
    <span class="header_title">
        <span class="header_title_text ellipsis">{{title}}</span>
      </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    background-color #02a774
    position fixed
    z-index 100
    left 0
    top:0
    width 100%
    height 45px
  .left
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
</style>
