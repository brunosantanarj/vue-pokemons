<script setup>
import { useSearchStore } from '@/stores/search'
const store = useSearchStore()
</script>
<template>
  <input
    type="search"
    v-model="store.search"
    placeholder="Pesquise por nome ou código"
    class="py-3 px-12 rounded-[50px] border border-gray-thin w-full text-sm font-mulish"
  />
</template>
