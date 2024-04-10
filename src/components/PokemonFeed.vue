<script setup>
import { useSearchStore } from '@/stores/search'
const store = useSearchStore()
</script>
<template>feed: {{ store.search }}</template>
