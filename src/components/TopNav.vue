<template>
  <nav class="topnav">
    <div class="container">
      <div class="left">
        <a href="#">京东首页</a>
        <a href="#">京东秒杀</a>
        <a href="#">客户服务</a>
      </div>
      <div class="right">
        <a href="#">请登录</a>
        <a href="#">我的订单</a>
        <a href="#">购物车</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped lang="scss">
.topnav {
  background: #f1f1f1;
  font-size: 12px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
    height: 32px;
  }
  a { color: #666; margin-right: 12px; }
  .right a { margin-left: 12px; }
}
</style>