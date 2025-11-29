<template>
  <div class="home">
    <section class="hero">
      <CategoryNav />
      <Carousel :items="banners" />
      <SeckillSection />
    </section>
    <ProductList />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import CategoryNav from '@/components/CategoryNav.vue'
import Carousel from '@/components/Carousel.vue'
import SeckillSection from '@/components/SeckillSection.vue'
import ProductList from '@/components/ProductList.vue'

const banners = ref([])
onMounted(async () => {
  const { data } = await axios.get('/api/banners')
  banners.value = data
})
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.hero {
  display: grid;
  grid-template-columns: 260px 1fr 300px;
  gap: 16px;
}
@media (max-width: 992px) {
  .hero {
    grid-template-columns: 1fr;
  }
}
</style>