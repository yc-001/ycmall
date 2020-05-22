<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive() {
        // /home -> item(/home) = true
        // /home -> item(/category) = true
        // /home -> item(/cart) = true
        // /home -> item(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
        // 判断处于活跃路由的path中，是否包含this.path 不等于-1证明就找到了
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
        // 活跃状态则添加样式，否则就传入空对象，使用默认颜色
      }
    },
    methods: {  
      itemClick() {
        this.$router.replace(this.path)
      }
    },
}
</script>

<style>
     .tab-bar-item {
      flex: 1;
      text-align: center;
      height: 49px;
      font-size: 14px;
    }

    .tab-bar-item img{
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle; /* 去掉图片本身下面的3px vertical：垂直的 */
        margin-bottom: 2px;
    }

    /* .active{
      color: red;
    } */
</style>