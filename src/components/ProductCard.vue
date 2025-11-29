<template>
  <div class="card" :class="{ compact }">
    <img :src="item.image" :alt="item.name" />
    <div class="info">
      <h4>{{ item.name }}</h4>
      <p class="price">¥{{ item.price }}</p>
      <p class="sold">销量 {{ item.sales }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: { type: Object, required: true },
  compact: { type: Boolean, default: false }
})
</script>

<style scoped lang="scss">
.card {
  background: #fff; border-radius: 8px; overflow: hidden; transition: transform .2s ease, box-shadow .2s ease; cursor: pointer;
  display: flex; flex-direction: column;
  img { width: 100%; height: 180px; object-fit: cover; }
  .info { padding: 10px; }
  .price { color: #e1251b; font-weight: 600; }
}
.card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,.08); }
.compact img { height: 120px; }
</style>