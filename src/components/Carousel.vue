<template>
  <div class="carousel" @mouseenter="pause" @mouseleave="resume">
    <div class="slides" :style="{ transform: `translateX(-${index*100}%)` }">
      <div v-for="(item,i) in items" :key="i" class="slide">
        <img :src="item.image" :alt="item.title" />
      </div>
    </div>
    <button class="control prev" @click="prev">‹</button>
    <button class="control next" @click="next">›</button>
    <div class="dots">
      <span v-for="(item,i) in items" :key="i" :class="{ active: i===index }" @click="go(i)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({ items: { type: Array, default: () => [] } })
const index = ref(0)
let timer = null

const next = () => { index.value = (index.value + 1) % props.items.length }
const prev = () => { index.value = (index.value - 1 + props.items.length) % props.items.length }
const go = (i) => { index.value = i }
const start = () => { timer = setInterval(next, 3000) }
const pause = () => { if (timer) clearInterval(timer) }
const resume = () => { start() }

onMounted(() => { if (props.items.length) start() })
onBeforeUnmount(() => { pause() })
watch(() => props.items, (arr) => {
  pause()
  if (arr && arr.length) {
    index.value = 0
    start()
  }
})
</script>

<style scoped lang="scss">
.carousel {
  position: relative;
  overflow: hidden;
  height: 360px;
  border-radius: 8px;
  .slides {
    display: flex;
    transition: transform .4s ease;
    height: 100%;
  }
  .slide { min-width: 100%; height: 100%; }
  img { width: 100%; height: 100%; object-fit: cover; }
  .control {
    position: absolute; top: 50%; transform: translateY(-50%);
    background: rgba(0,0,0,.4); color: #fff; border: none;
    width: 36px; height: 36px; border-radius: 50%; cursor: pointer;
  }
  .prev { left: 12px; }
  .next { right: 12px; }
  .dots {
    position: absolute; bottom: 12px; left: 0; right: 0; display: flex; justify-content: center; gap: 8px;
    span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.6); cursor: pointer; }
    .active { background: #fff; }
  }
}
</style>