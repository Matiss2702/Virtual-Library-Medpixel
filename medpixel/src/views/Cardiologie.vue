<template>
    <section class="items-section">
        <div class="items-container" v-for="item in items" :key="item.id">
            <div class="text-heading">
                <h2>{{ item.title }}</h2>
                <p>{{ item.description }}</p>
            </div>
            <div class="text-container" v-for="textItem in item.text" :key="textItem.id">
                <h3>{{ textItem.title }}</h3>
                <p>{{ textItem.paragraph }}</p>
            </div>
        </div>
    </section>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  let i = 0

  const items = ref([
    {
      id: 1,
      title: "Cardiologie",
      description: "Bienvenue dans notre section dédiée à la cardiologie,un hub essentiel pour les professionnels de santé désireux de se tenir au courant des dernières avancées et pratiques dans le domaine. Ici, vous trouverez une bibliothèque riche en ressources, allant des articles de recherche aux vidéos éducatives, conçue pour soutenir le développement des connaissances et des compétences en cardiologie notamment sur les innovations en matière de diagnostic, traitement et prévention des maladies cardiovasculaires.",
      text: [
        {
            id: i++,
            title: "lorem " + i,
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit optio perspiciatis similique repellat alias minima aliquam dolorum dignissimos. Quidem dignissimos placeat corporis enim? Optio cum eveniet, natus earum dolore rem nam nisi iste deserunt doloremque fuga, alias esse autem nostrum ipsam omnis facere totam beatae quam adipisci eligendi ipsa."
        },
        {
            id: i++,
            title: "lorem " + i,
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit optio perspiciatis similique repellat alias minima aliquam dolorum dignissimos. Quidem dignissimos placeat corporis enim? Optio cum eveniet, natus earum dolore rem nam nisi iste deserunt doloremque fuga, alias esse autem nostrum ipsam omnis facere totam beatae quam adipisci eligendi ipsa."
        },
        {
            id: i++,
            title: "lorem " + i,
            paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta impedit optio perspiciatis similique repellat alias minima aliquam dolorum dignissimos. Quidem dignissimos placeat corporis enim? Optio cum eveniet, natus earum dolore rem nam nisi iste deserunt doloremque fuga, alias esse autem nostrum ipsam omnis facere totam beatae quam adipisci eligendi ipsa."
        }
      ]
    }
  ]);
</script>
  
<style>
    .items-section{
        margin-top: 2.5rem;
        line-height: 150%;
    }
    
    .items-container{
        display: grid;
        gap:2rem;
    }

    .text-heading h2{
        padding-bottom: .5rem;
    }

    .text-container h3{
        padding-bottom: .5rem;
    }
</style>