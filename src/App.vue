<template>
  <div class="layout">
    <TopNav />
    <header class="header">
      <div class="container">
        <SearchBar />
      </div>
    </header>
    <main class="container main">
      <section class="hero">
        <CategoryNav />
        <Carousel :items="banners" />
        <SeckillSection />
      </section>
      <ProductList />
    </main>
  </div>
  <FooterBar />
  <RouterView />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TopNav from '@/components/TopNav.vue'
import SearchBar from '@/components/SearchBar.vue'
import Carousel from '@/components/Carousel.vue'
import CategoryNav from '@/components/CategoryNav.vue'
import SeckillSection from '@/components/SeckillSection.vue'
import ProductList from '@/components/ProductList.vue'
import FooterBar from '@/components/FooterBar.vue'
import axios from 'axios'

const banners = ref([])
onMounted(async () => {
  const { data } = await axios.get('/api/banners')
  banners.value = data
})
</script>

<style scoped lang="scss">
.layout {
  background: #f5f5f5;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}
.header {
  background: #fff;
}
.main {
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