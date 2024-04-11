<script setup lang="ts">
import { useQueryClient, useQuery } from '@tanstack/vue-query'
import { useRoute, useRouter } from 'vue-router'
import FlatCard from '@/components/FlatCard.vue'
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
  <FlatCard :pokemon="data" v-if="data" secondary />
  <button @click="router.back">Voltar</button>
</template>
