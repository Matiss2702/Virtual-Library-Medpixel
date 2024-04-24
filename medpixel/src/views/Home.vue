<template>
    <Carousel />
</template>

<script setup>
import Carousel from '../components/Carousel.vue';

const props = defineProps(['imgUrl','imgAlt', 'cardTitle','cardDescription','cardLink'])
</script>