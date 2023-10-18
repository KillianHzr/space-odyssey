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

h1 {
  font-size: 3.2em;
  line-height: 1.1;
  font-weight: 500;

  background: linear-gradient(120deg,#99ffec 0%,#99ffec 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: Termina;
  text-transform: uppercase;
  margin: 0;
}

.subtitle {
  font-size: 1.3em;
  line-height: 1.1;
  font-weight: 200;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #99ffec;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>
