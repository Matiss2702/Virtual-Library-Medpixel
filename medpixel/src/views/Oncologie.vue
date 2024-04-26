<template>
  <section class="flex flex-col md:flex-row flex-wrap gap-8">
    <Cards 
        imgUrl="oncologie-img1.jpg"
        cardTitle="Traitement à la radiothérapie"
        cardDescription="Après une prostatectomie pour un cancer de la prostate, radiothérapie de sauvetage de la prostate (PBRT)"
        cardLink="https://pubmed.ncbi.nlm.nih.gov/35569466/"
        cardDate="25/04/24"
        readTime="25 min"
    />
    <Cards 
        imgUrl="oncologie-img2.jpg"
        cardTitle="Traitement à la radiothérapie"
        cardDescription="Après une prostatectomie pour un cancer de la prostate, radiothérapie de sauvetage de la prostate (PBRT)"
        cardLink="https://pubmed.ncbi.nlm.nih.gov/35569466/"
        cardDate="25/04/24"
        readTime="25 min"
    />
    <Cards 
        imgUrl="oncologie-img3.jpg"
        cardTitle="Traitement à la radiothérapie"
        cardDescription="Après une prostatectomie pour un cancer de la prostate, radiothérapie de sauvetage de la prostate (PBRT)"
        cardLink="https://pubmed.ncbi.nlm.nih.gov/35569466/"
        cardDate="25/04/24"
        readTime="25 min"
    />

  </section>
</template>
<script setup>
import Cards from '../components/Cards.vue';
</script>