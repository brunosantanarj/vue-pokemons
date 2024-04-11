import type { PokemonExplained } from '@/base/types/PokemonExplained'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({
    search: ''
  }),
  getters: {
    filterFn: (state) => (list?: PokemonExplained[]) =>
      !state.search
        ? list
        : list?.filter(
            (poke) =>
              poke.name.toLowerCase().includes(state.search.toLowerCase()) ||
              poke.id === +state.search
          )
  }
})
