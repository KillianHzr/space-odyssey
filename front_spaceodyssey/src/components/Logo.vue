<script setup>

defineProps({
  title: String,
  subtitle: String,
})

</script>

<template>
    <div class="logo">
        <img src="/images/logo.png">
        <div class="coordonnees">
            <span id="x-coord">X: -203.4360019721281</span>
            <span id="y-coord">Y: 92.64921900591002</span>
            <span id="z-coord">Z: 72</span>
        </div>
    </div>
</template>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    function updateCoordinates() {
      const duration = 30000; // Durée de la transition en millisecondes (30 secondes)
      const interval = 60; // Intervalle de mise à jour en millisecondes

      const minX = -500;
      const maxX = 500;

      const steps = duration / interval;
      let step = 0;

      function animate() {
        const progress = step / steps;

        // Génère aléatoirement les nouvelles coordonnées
        const newX = getRandomCoordinate(minX, maxX);
        const newZ = getRandomCoordinate(minX, maxX, false); // Y sans décimales
        const newY = getRandomCoordinate(0, 1000);

        document.getElementById('x-coord').textContent = `X: ${newX}`;
        document.getElementById('y-coord').textContent = `Y: ${newY}`;
        document.getElementById('z-coord').textContent = `Z: ${newZ}`;

        step++;
        if (step > steps) {
          step = 0;
        }
        setTimeout(animate, interval);
      }

      animate();
    }

    function getRandomCoordinate(min, max, includeDecimals = true) {
      const randomValue = Math.random() * (max - min) + min;
      const isNegative = Math.random() < 0.5 ? "-" : "";
      if (includeDecimals) {
        return `${isNegative}${Math.abs(randomValue).toFixed(10)}`;
      } else {
        return `${isNegative}${Math.floor(Math.abs(randomValue))}`;
      }
    }

    updateCoordinates();
  });
</script>

<style scoped>
.logo{
    position: absolute;
    top: 0;
    left: 0;
}

.logo img{
    width: 100px;
}

.coordonnees{
    left: 120px;
    top: 100px;
    position: absolute;
    display: flex;
    flex-direction: column;
    text-align: start;
    letter-spacing: 2px;
    font-size: 10px;
}

.coordonnees span{
    white-space: nowrap;
}
</style>
