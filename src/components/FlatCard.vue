<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import type { PokemonExplained } from '@/base/types/PokemonExplained'
import ElementaryTypeLabel from './ElementaryTypeLabel.vue'
import { QueriesKeys } from '@/base/enums/QueriesKeys'

defineProps<{ pokemon: PokemonExplained; secondary?: boolean }>()

const router = useRouter()
const queryClient = useQueryClient()

async function onClickHandler(pokemon: PokemonExplained) {
  queryClient.setQueryData([QueriesKeys.EXPLAINED_POKEMON], pokemon)
  router.push({ name: 'detail', query: { id: pokemon.id } })
}
</script>

<template>
  <article
    @click="onClickHandler(pokemon)"
    class="bg-white rounded-xl p-3 text-center max-h-[250px] shadow-sm"
    role="button"
    aria-live="assertive"
    aria-label="Navegue para detalhes do pokemon"
  >
    <img
      :src="
        secondary
          ? pokemon.sprites.other['official-artwork'].front_default
          : pokemon.sprites.front_default
      "
      class="m-auto max-h-[110px]"
    />
    <h5 class="font-mulish font-bold mt-1 text-sm">{{ pokemon.name }}</h5>
    <h6 v-if="!secondary" class="font-mulish font-bold text-[9px] mt-3">Cód: {{ pokemon.id }}</h6>
    <ul class="flex gap-1 justify-center mt-10 mb-2">
      <li v-for="item in pokemon.types" :key="item.type.name">
        <ElementaryTypeLabel :type="item.type.name" />
      </li>
    </ul>
  </article>
</template>
