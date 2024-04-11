<script setup lang="ts">
import { PokemonExplained } from '@/base/types/PokemonExplained'
import { computed, ref } from 'vue'

type ElementaryType = PokemonExplained['types'][0]['type']['name']
type ElementaryTypeColorScheme = {
  [keyof in ElementaryType]: { color: string; text: string }
}

const props = defineProps<{ type: ElementaryType }>()

const scheme = ref<ElementaryTypeColorScheme>({
  grass: { color: 'bg-green', text: 'GRASS' },
  normal: { color: 'bg-gray', text: 'NORMAL' },
  flying: { color: 'bg-dark-purple', text: 'FLYING' },
  poison: { color: 'bg-purple', text: 'POISON' },
  electric: { color: 'bg-yellow', text: 'ELECTRIC' },
  ground: { color: 'bg-schist', text: 'GROUND' },
  fairy: { color: 'bg-pink', text: 'FAIRY' },
  fire: { color: 'bg-red', text: 'FIRE' },
  water: { color: 'bg-blue', text: 'WATER' }
})

const selected = computed(
  () => scheme.value[props.type] || { color: 'bg-dark', text: props.type.toUpperCase() }
)
</script>

<template>
  <div
    :class="`${selected.color} text-white font-mulish font-semibold text-[10px] rounded-xl w-[64px] px-1 py-0.5`"
  >
    {{ selected.text }}
  </div>
</template>
