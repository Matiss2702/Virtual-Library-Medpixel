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
  
<script setup lang="ts">
import { ref, defineProps} from 'vue';

interface PanelItem {
  title: string;
  name: string;
}

defineProps<{
  items: PanelItem[]
}>();

const openedIndexes = ref<number[]>([]);

const toggle = (index: number) => {
  const position = openedIndexes.value.indexOf(index);
  if (position !== -1) {
    openedIndexes.value.splice(position, 1);
  } else {
    openedIndexes.value.push(index);
  }
};

const isOpen = (index: number) => openedIndexes.value.includes(index);
</script>

<style scoped>
    .accordion .panel .content {
        overflow: hidden;
        transition: max-height 0.2s ease-out;
    }
</style>