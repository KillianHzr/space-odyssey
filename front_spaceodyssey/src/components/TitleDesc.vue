<script setup>

defineProps({
  title: String,
  subtitle: String,
  buttontext: String,
  href: String,
})

</script>

<template>
    <div class="home">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
      <a :href="href"><span>{{ buttontext }}</span></a>
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
  margin-bottom: 5em;
}

a {
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #131313;
  cursor: pointer;
  transition: border-color 0.25s;
}
a:hover {
  border-color: #99ffec;
}
</style>
