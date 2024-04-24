<template>
  <div class="card-container">
    <div class="card-body">
      <h3 class="card-title">{{ cardTitle }}</h3>
      <div class="card-description">{{ cardDescription }}</div>
      <router-link :to="cardLink">Link</router-link>
    </div>
    <div class="card-img">
      <img :src="imgUrl" :alt="imgAlt" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgUrl: String,
  imgAlt: String,
  cardTitle: String,
  cardDescription: String,
  cardLink: String
});
</script>

<style>
    .card-container{
        overflow: hidden;
        width: 90%;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        max-height: 450px;
        margin: 0 auto;
        gap: 4rem;
    }

    .card-body{
        width: 100%;
    }

    .card-img{
        width: 100%;
        border-radius: 1rem;
        overflow: hidden;
    }

    .card-img img{
        width: 100%;
        height: 100%;
        min-width: 450px;
        max-height: 350px;
        aspect-ratio: 16/9;
        vertical-align: middle;
    }
    
    .card-body{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        line-height: 130%;
        justify-content: center;
        overflow: hidden;
    }

    .card-description{
      word-wrap: break-word;
      text-wrap: wrap;
      max-height: 103px;
      overflow: hidden;
    }

    .card-description::after {
        content: "";
        display: block;
        width: 100%;
        height: 1.2em;
    }

    .card-container a{
        display: inline-block;
        width: 100%;
        padding : .3rem .6rem;
        color : white;
        background-color: var(--main-clr);
        text-decoration: none;
        border-radius: .4rem;
    }

    .card-container a:hover,
    .card-container a:focus{
        background-color: var(--secondary-clr);
    }
</style>