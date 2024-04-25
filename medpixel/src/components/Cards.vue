<template>
  <div class="card-container">
    <div class="card-body">
        <h3 class="card-title">{{ cardTitle }}</h3>
        <div class="card-description">{{ cardDescription }}</div>
        <router-link :to="cardLink">En savoir plus</router-link>
    </div>
    <div class="card-img">
        <img :src="imgUrl" :alt="imgAlt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';

defineProps<{
  imgUrl: string;
  imgAlt: string;
  cardTitle: string;
  cardDescription: string;
  cardLink: string;
}>();
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

    @media (max-width: 767px) {
        .card-container {
            grid-template-columns: none;
            max-height: none;
        }

        .card-body {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            line-height: 130%;
            justify-content: center;
            overflow: hidden;
        }

        .card-img {
            order: -1;
            width: 100%;
            border-radius: 1rem;
            overflow: hidden;
            margin-bottom: 2rem;
        }

        .card-img img {
            width: 100%;
            height: 100%;
            aspect-ratio: 16/9;
            vertical-align: middle;
            min-width: 0;
            max-height: none;
        }

        .card-description {
            word-wrap: break-word;
            overflow: hidden;
            max-height: none;
        }
    }
    
</style>