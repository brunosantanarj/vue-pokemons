<script setup lang="ts">
import { PokemonExplained } from '@/base/types/PokemonExplained'
defineProps<{ pokemon: PokemonExplained }>()
</script>

<template>
  <article class="bg-white rounded p-3 text-center max-h-[250px]">
    <img :src="pokemon.sprites.front_default" class="m-auto" />
    <h5 class="font-mulish font-bold mt-1">{{ pokemon.name }}</h5>
    <h6 class="font-mulish font-bold text-xs mt-3">Cód: {{ pokemon.id }}</h6>
  </article>
</template>
