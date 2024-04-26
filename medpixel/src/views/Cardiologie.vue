<template>
  <section class="flex flex-col md:flex-row flex-wrap gap-8">
    <Cards 
        imgUrl="cardiologie-img1.jpg"
        cardTitle="Le remodelage cardiaque"
        cardDescription="Les lymphocytes T CD4 joueraient un rôle essentiel dans le remodelage cardiaque en cas d’hyperpression..."
        cardLink="https://www.inserm.fr/actualite/systeme-immunitaire-implique-dans-remodelage-cardiaque/"
        cardDate="25/04/24"
        readTime="25 min"
    />
    <Cards 
        imgUrl="cardiologie-img2.jpg"
        cardTitle="Le remodelage cardiaque"
        cardDescription="Les lymphocytes T CD4 joueraient un rôle essentiel dans le remodelage cardiaque en cas d’hyperpression..."
        cardLink="https://www.inserm.fr/actualite/systeme-immunitaire-implique-dans-remodelage-cardiaque/"
        cardDate="25/04/24"
        readTime="25 min"
    />
    <Cards 
        imgUrl="cardiologie-img3.jpg"
        cardTitle="Le remodelage cardiaque"
        cardDescription="Les lymphocytes T CD4 joueraient un rôle essentiel dans le remodelage cardiaque en cas d’hyperpression..."
        cardLink="https://www.inserm.fr/actualite/systeme-immunitaire-implique-dans-remodelage-cardiaque/"
        cardDate="25/04/24"
        readTime="25 min"
    />

  </section>
</template>
<script setup>
import Cards from '../components/Cards.vue';
</script>