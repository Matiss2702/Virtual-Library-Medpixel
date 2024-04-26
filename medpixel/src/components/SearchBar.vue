<template>
  <div class="search-bar-container">
    <input
      v-model="searchQuery"
      @keyup.enter="onSearch"
      type="search"
      placeholder="Études sur la tachycardie..."
      class="search-input bg-white text-black pl-4 py-2"
    />
    <button @click="onSearch" class="search-button bg-[#E1E1E1] hover:bg-[#CFCFCF] group">
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 96 95.999999" preserveAspectRatio="xMidYMid meet" version="1.0"><path class="fill-[#838383] group-hover:fill-[#616161]" d="M 38 12 C 44.894531 12 51.507812 14.738281 56.386719 19.617188 C 61.261719 24.492188 64 31.105469 64 38 C 64 44.441406 61.640625 50.359375 57.761719 54.921875 L 58.839844 56 L 62 56 L 82 76 L 76 82 L 56 62 L 56 58.839844 L 54.921875 57.761719 C 50.359375 61.640625 44.441406 64 38 64 C 31.105469 64 24.492188 61.261719 19.617188 56.386719 C 14.738281 51.507812 12 44.894531 12 38 C 12 31.105469 14.738281 24.492188 19.617188 19.617188 C 24.492188 14.738281 31.105469 12 38 12 Z M 38 20 C 28 20 20 28 20 38 C 20 48 28 56 38 56 C 48 56 56 48 56 38 C 56 28 48 20 38 20 Z M 38 20 " fill-opacity="1" fill-rule="nonzero"/></svg>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');

function onSearch() {
  console.log('Recherche pour:', searchQuery.value);
}
</script>

<style scoped>
.search-bar-container {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    max-width: 500px;
    width: 100%;
}

.search-input {
    flex-grow: 1;
    border: none;
    outline: none;
    background-color: white;
    margin-right: 0.5rem;
}

.search-button {
    padding: 0.5rem;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
}

.search-icon {
    width: 1.5em;
    height: 1.5em;
    color: white;
}
</style>
