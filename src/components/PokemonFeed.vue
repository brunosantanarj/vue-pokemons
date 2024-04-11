<script setup lang="ts">
import { ref } from 'vue'
import { useInfiniteScroll } from '@vueuse/core'
import { useInfiniteQuery } from '@tanstack/vue-query'
import { useSearchStore } from '@/stores/search'
import { listAll } from '@/data/api/list-all'
import FlatCard from '@/components/FlatCard.vue'

const el = ref<HTMLElement | null>(null)
const store = useSearchStore()

const { data, fetchNextPage } = useInfiniteQuery({
  queryKey: ['LIST_POKEMONS'],
  queryFn: listAll,
  getNextPageParam: (lastPage, pages) =>
    new URLSearchParams(new URL(lastPage.next).search).get('offset')
})

useInfiniteScroll(el, fetchNextPage, { distance: 10 })
</script>

<template>
  <section
    ref="el"
    class="grid gap-3 auto-rows-max h-screen grid-cols-2 md:grid-cols-5 overflow-y-scroll"
  >
    <FlatCard
      v-for="item in store.filterFn(data?.pages.flatMap((page) => page.results))"
      :pokemon="item"
      :key="item.id"
    />
  </section>
</template>
