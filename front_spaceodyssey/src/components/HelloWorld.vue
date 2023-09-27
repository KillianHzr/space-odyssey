<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  subtitle: String,
})

const count = ref(0)
</script>

<template>
    <div class="home">
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <button>Partir à l'aventure</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
