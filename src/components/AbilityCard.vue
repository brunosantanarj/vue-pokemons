<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import type { PokemonExplained } from '@/base/types/PokemonExplained'
import { QueriesKeys } from '@/base/enums/QueriesKeys'
import { listAbilities } from '@/data/api/list-abilities'

const props = defineProps<{ pokemon: PokemonExplained; secondary?: boolean }>()

const { data, isLoading } = useQuery({
  queryKey: [QueriesKeys.LIST_ABILITIES],
  queryFn: async () => await listAbilities(props.pokemon.abilities)
})
</script>

<template>
  <section class="bg-white rounded-xl p-3 text-center shadow-sm mt-4">
    <h5 class="font-mulish font-bold mt-1 text-sm">Habilidades</h5>
    <ul class="gap-1 justify-center mt-10 mb-2" v-if="!isLoading">
      <li
        v-for="ability in data?.flatMap((effects) => effects.effect_entries)"
        :key="ability.short_effect"
        class="text-regular font-normal font-mulish text-xs border-t border-gray-light p-5"
      >
        {{ ability.short_effect }}
      </li>
    </ul>
    <div v-else>carrengado</div>
  </section>
</template>
