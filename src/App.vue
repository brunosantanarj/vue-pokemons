<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-white flex justify-center p-4 shadow-sm md:justify-start">
    <RouterLink to="/">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
    </RouterLink>
  </header>
  <main class="max-w-4xl mx-auto py-5 px-4">
    <RouterView />
  </main>
</template>
