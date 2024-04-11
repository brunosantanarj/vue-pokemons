<script setup lang="ts">
import { useQueryClient, useQuery } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'
import FlatCard from '@/components/FlatCard.vue'
import AbilityCard from '@/components/AbilityCard.vue'
import { QueriesKeys } from '@/base/enums/QueriesKeys'
import { fetchDetailed } from '@/data/api/fetch-detailed'

const route = useRoute()
const router = useRouter()
const queryClient = useQueryClient()
const cachedData = queryClient.getQueryData([QueriesKeys.EXPLAINED_POKEMON])

const { data } = useQuery({
  queryKey: [QueriesKeys.EXPLAINED_POKEMON],
  queryFn: () => fetchDetailed(route.query.id as string),
  placeholderData: () => queryClient.getQueryData([QueriesKeys.EXPLAINED_POKEMON]),
  enabled: !cachedData
})
</script>
<template>
  <div class="md:max-w-xl mx-auto">
    <FlatCard :pokemon="data" v-if="data" secondary />
    <AbilityCard :pokemon="data" v-if="data" />
    <button
      @click="router.back"
      class="text-blue font-mulish font-bold text-sm mx-auto mt-10 block"
    >
      Voltar
    </button>
  </div>
</template>
