<script setup>
import TitleDesc from './TitleDesc.vue'
import Logo from './Logo.vue'
</script>

<template>
  <div>
    <div class="background-space"></div>
    <div class="app">
      <Logo/>
      <TitleDesc
      title="Enigme 1"
      subtitle="Découvrez le secret universel à travers un voyage au cœur de l’espace"
      />
    </div>
  </div>
</template>

<style scoped>
.app{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  text-align: center;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.background-space{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  
  background-image: url(images/background.png);
  background-repeat: repeat;
  background-size: 27%;
  opacity: 0.7;
}
</style>
