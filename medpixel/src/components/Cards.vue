<template>
  <article class="flex shadow-lg rounded-lg overflow-hidden bg-white sm:max-w-[30%] sm:mx-auto">
    <div class="w-4/12 bg-gray-200">
      <img :src="imgUrl" :alt="imgAlt" class="object-cover w-full h-full aspect-square" />
    </div>
    <div class="flex-1 card-body p-5 flex flex-col justify-between h-full gap-4">
        <div class="flex flex-col gap-2">
            <h3 class="card-title text-xl font-bold text-black">{{ cardTitle }}</h3>
            <span class="text-sm text-gray-600">PUBLIÉ LE {{ cardDate }}</span>
            <p class="card-description text-gray-800 leading-6">{{ cardDescription }}</p>
        </div>
        <div class="flex justify-between md:items-center gap-2 md:gap-auto">
          <div class="flex items-center gap-1">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify" viewBox="0 0 96 95.999999" height="128" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#838383" d="M 48 80 C 65.597656 80 80 65.601562 80 48 C 80 30.398438 65.597656 16 48 16 C 30.398438 16 16 30.398438 16 48 C 16 65.601562 30.398438 80 48 80 Z M 48 8 C 70 8 88 26 88 48 C 88 70 70 88 48 88 C 26 88 8 70 8 48 C 8 26 26 8 48 8 Z M 50 51.199219 L 30.800781 62.398438 L 28 56.800781 L 44 47.601562 L 44 28 L 50 28 Z M 50 51.199219 " fill-opacity="1" fill-rule="nonzero"/></svg>
            <span class="text-sm text-gray-600">Lecture : {{ readTime }}</span>
          </div>
          <a :href="cardLink" target="_blank" class="text-blue-600 hover:underline hover:decoration focus:underline focus:decoration transition duration-300">En savoir plus</a>
        </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
  cardDate: String,
  readTime: String,
  imgUrl: String,
  imgAlt: String,
  cardTitle: String,
  cardDescription: String,
  cardLink: String
});
</script>

<style scoped>
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.5rem;
}

/* Styles supplémentaires et responsive si nécessaire */
</style>
