<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrer le contenu verticalement */
  align-items: center; /* Centrer le contenu horizontalement */
}
</style>
