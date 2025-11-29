import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore('search', {
  state: () => ({
    suggestions: []
  }),
  actions: {
    async suggest(q) {
      const { data } = await axios.get('/api/search', { params: { q } })
      this.suggestions = data
    }
  }
})