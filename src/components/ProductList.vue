<template>
  <section class="products container">
    <h3>为你推荐</h3>
    <div class="grid">
      <ProductCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import ProductCard from './ProductCard.vue'

const store = useProductsStore()
const { items } = storeToRefs(store)
onMounted(() => { store.fetch() })
</script>

<style scoped lang="scss">
.products {
  background: #fff; border-radius: 8px; padding: 12px;
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
  @media (min-width: 768px) { .grid { grid-template-columns: repeat(3, 1fr); } }
  @media (min-width: 1200px) { .grid { grid-template-columns: repeat(5, 1fr); } }
}
</style>