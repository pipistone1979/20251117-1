<template>
  <div class="searchbar">
    <input
      v-model="q"
      type="text"
      placeholder="搜索商品/店铺"
      @input="onInput"
      @focus="open = true"
      @blur="close"
    />
    <button @click="search">搜索</button>
    <ul v-if="open && suggestions.length" class="suggestions">
      <li v-for="s in suggestions" :key="s" @mousedown.prevent="select(s)">{{ s }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/search'

const store = useSearchStore()
const { suggestions } = storeToRefs(store)
const q = ref('')
const open = ref(false)

const onInput = () => {
  if (q.value.trim()) store.suggest(q.value)
}
const select = (s) => {
  q.value = s
  open.value = false
}
const search = () => {
  open.value = false
}
const close = () => {
  setTimeout(() => { open.value = false }, 120)
}
</script>

<style scoped lang="scss">
.searchbar {
  display: flex;
  position: relative;
  gap: 8px;
  padding: 16px 0;
  input {
    flex: 1;
    height: 40px;
    border: 2px solid #e1251b;
    padding: 0 12px;
    border-radius: 2px;
  }
  button {
    background: #e1251b;
    color: #fff;
    border: none;
    padding: 0 16px;
    border-radius: 2px;
  }
  .suggestions {
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0 6px 24px rgba(0,0,0,.06);
    z-index: 10;
    li { padding: 10px 12px; cursor: pointer; }
    li:hover { background: #f5f5f5; }
  }
}
</style>