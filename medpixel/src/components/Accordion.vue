<template>
    <div class="accordion">
      <div v-for="(item, index) in items" :key="index" class="panel">
        <button @click="toggle(index)">{{ item.title }}</button>
        <div v-if="isOpen(index)" class="content">
          <slot :name="item.name"></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
  const props = defineProps({
    items: Array
  });
  
  const state = reactive({
    openedIndexes: []
  });
  
  const toggle = (index) => {
    const position = state.openedIndexes.indexOf(index);
    if (position !== -1) {
      state.openedIndexes.splice(position, 1);
    } else {
      state.openedIndexes.push(index);
    }
  };
  
  const isOpen = (index) => state.openedIndexes.includes(index);
  </script>
  
  <style scoped>
  .accordion .panel .content {
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }
  </style>