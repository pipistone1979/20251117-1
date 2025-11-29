import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    list: []
  }),
  actions: {
    async fetch() {
      const { data } = await axios.get('/api/categories')
      this.list = data
    }
  }
})