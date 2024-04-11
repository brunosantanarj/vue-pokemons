<script setup lang="ts">
import { PokemonExplained } from '@/base/types/PokemonExplained'
import ElementaryTypeLabel from './ElementaryTypeLabel.vue'
defineProps<{ pokemon: PokemonExplained }>()
</script>

<template>
  <article class="bg-white rounded-xl p-3 text-center max-h-[250px] shadow-sm">
    <img :src="pokemon.sprites.front_default" class="m-auto" />
    <h5 class="font-mulish font-bold mt-1 text-sm">{{ pokemon.name }}</h5>
    <h6 class="font-mulish font-bold text-[9px] mt-3">Cód: {{ pokemon.id }}</h6>
    <ul class="flex gap-1 justify-center mt-10 mb-2">
      <li v-for="item in pokemon.types" :key="item.type.name">
        <ElementaryTypeLabel :type="item.type.name" />
      </li>
    </ul>
  </article>
</template>
