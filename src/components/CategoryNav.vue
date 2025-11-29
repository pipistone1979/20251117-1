<template>
  <aside class="category">
    <ul>
      <li v-for="c in categories" :key="c.id" @mouseenter="open(c.id)" @mouseleave="close">
        <span>{{ c.name }}</span>
        <div v-if="active===c.id" class="submenu">
          <a v-for="sub in c.children" :key="sub.id" href="#">{{ sub.name }}</a>
        </div>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useCategoriesStore } from '@/stores/categories'
import { storeToRefs } from 'pinia'

const store = useCategoriesStore()
const { list: categories } = storeToRefs(store)
const active = ref(null)
const open = (id) => { active.value = id }
const close = () => { active.value = null }

onMounted(() => { store.fetch() })
</script>

<style scoped lang="scss">
.category {
  background: #fff;
  border-radius: 8px;
  ul { list-style: none; margin: 0; padding: 8px 0; }
  li { position: relative; padding: 10px 16px; }
  li:hover { background: #f8f8f8; }
  .submenu {
    position: absolute; top: 0; left: 100%; width: 480px; min-height: 100%; background: #fff; border: 1px solid #eee; box-shadow: 0 6px 24px rgba(0,0,0,.06);
    display: flex; flex-wrap: wrap; gap: 8px; padding: 12px;
    a { padding: 6px 8px; background: #f5f5f5; border-radius: 4px; }
  }
}
@media (max-width: 992px) {
  .category { display: none; }
}
</style>