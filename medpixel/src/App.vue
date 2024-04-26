<template>
    <Navbar/>
    <main class="z-10 py-8">
      <router-view></router-view>
    </main>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>