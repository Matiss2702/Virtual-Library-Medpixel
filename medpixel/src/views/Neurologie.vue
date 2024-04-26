<template>
  <section class="flex flex-col md:flex-row flex-wrap gap-8">
    <Cards 
        imgUrl="neurologie-img1.jpg"
        cardTitle="La neuro-inflammation"
        cardDescription="la baisse progressive des taux d'Aβ40 dans le LCR et des scores des activités de la vie quotidienne (AVQ). ."
        cardLink="https://pubmed.ncbi.nlm.nih.gov/28086917/"
        cardDate="25/04/24"
        readTime="25 min"
    />
    <Cards 
        imgUrl="neurologie-img2.jpg"
        cardTitle="La neuro-inflammation"
        cardDescription="la baisse progressive des taux d'Aβ40 dans le LCR et des scores des activités de la vie quotidienne (AVQ). ."
        cardLink="https://pubmed.ncbi.nlm.nih.gov/28086917/"
        cardDate="25/04/24"
        readTime="25 min"
    />
    <Cards 
        imgUrl="neurologie-img3.jpg"
        cardTitle="La neuro-inflammation"
        cardDescription="la baisse progressive des taux d'Aβ40 dans le LCR et des scores des activités de la vie quotidienne (AVQ). ."
        cardLink="https://pubmed.ncbi.nlm.nih.gov/28086917/"
        cardDate="25/04/24"
        readTime="25 min"
    />

  </section>
</template>
<script setup>
import Cards from '../components/Cards.vue';
</script>