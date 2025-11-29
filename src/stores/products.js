import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetch() {
      const { data } = await axios.get('/api/products')
      this.items = data
    }
  }
})