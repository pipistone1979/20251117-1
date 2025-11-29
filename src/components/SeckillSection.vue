<template>
  <section class="seckill">
    <header>
      <h3>京东秒杀</h3>
      <div class="countdown">
        <span>{{ time.h }}</span>:
        <span>{{ time.m }}</span>:
        <span>{{ time.s }}</span>
      </div>
    </header>
    <div class="list">
      <ProductCard v-for="item in items" :key="item.id" :item="item" compact />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSeckillStore } from '@/stores/seckill'
import ProductCard from '@/components/ProductCard.vue'

const store = useSeckillStore()
const { items, endTime } = storeToRefs(store)

const now = () => Date.now()
const pad = (n) => String(n).padStart(2, '0')
const time = computed(() => {
  const diff = Math.max(0, endTime.value - now())
  const h = Math.floor(diff / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { h: pad(h), m: pad(m), s: pad(s) }
})

onMounted(() => {
  store.fetch()
  setInterval(() => {}, 1000)
})
</script>

<style scoped lang="scss">
.seckill {
  background: #fff; border-radius: 8px; padding: 12px;
  header { display: flex; justify-content: space-between; align-items: center; }
  h3 { color: #e1251b; }
  .countdown span { background: #000; color: #fff; padding: 6px 8px; border-radius: 4px; }
  .list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  @media (min-width: 1200px) { .list { grid-template-columns: repeat(3, 1fr); } }
}
</style>