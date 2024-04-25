<template>
    <div class="carousel-container">
        <button v-if="!isMobile" @click="prev" class="arrow left-arrow">⟨</button>
        <div class="carousel" :class="{ 'mobile-view': isMobile }" ref="carousel" :style="carouselStyle">
            <div v-for="item in items" :key="item.id" class="slide">
                <Card
                    :img-url="item.imgUrl"
                    :img-alt="item.imgAlt"
                    :card-title="item.cardTitle"
                    :card-description="item.cardDescription"
                    :card-link="item.cardLink"
                />
            </div>
        </div>
        <button v-if="!isMobile" @click="next" class="arrow right-arrow">⟩</button>
    </div>
</template>

<script setup lang="ts">

import { ref, computed, onMounted, onUnmounted } from 'vue';
import Card from './Cards.vue';
import cardiologieImage from '../assets/cardiologie-card.jpg';
import neurologieImage from '../assets/neurologie-card.jpg';
import oncologieImage from '../assets/oncologie-card.webp';

const items = ref([
    { id: 1, imgUrl: cardiologieImage, imgAlt: 'Cardiologie', cardTitle: 'Cardiologie', cardDescription: 'Bienvenue dans notre section dédiée à la cardiologie,un hub essentiel pour les professionnels de santé désireux de se tenir au courant des dernières avancées et pratiques dans le domaine. Ici, vous trouverez une bibliothèque riche en ressources, allant des articles de recherche aux vidéos éducatives, conçue pour soutenir le développement des connaissances et des compétences en cardiologie notamment sur les innovations en matière de diagnostic, traitement et prévention des maladies cardiovasculaires.', cardLink: '/cardiologie' },
    { id: 2, imgUrl: neurologieImage, imgAlt: 'Neurologie', cardTitle: 'Neurologie', cardDescription: 'Explorez notre bibliothèque de neurologie, où nous rassemblons les dernières recherches, études et innovations dans le domaine des neurosciences. Destinée aux neurologues, et chercheurs ,vous y trouverez des ressources et discussions sur les avancées dans le traitement des troubles neurologiques et les nouvelles techniques de diagnostic. Découvrez comment les avancées technologiques et médicales transforment la prise en charge des maladies neurodégénératives et améliorent la qualité de vie des patients.', cardLink: '/neurologie' },
    { id: 3, imgUrl: oncologieImage, imgAlt: 'Oncologie', cardTitle: 'Oncologie', cardDescription: 'Accédez à notre centre de ressources oncologiques. Cette page regroupe une multitude de ressources, y compris des articles de recherche, des études de cas et des séminaires sur les dernières thérapies et innovations en oncologie. Elle est destinée à enrichir votre compréhension et à élargir votre capacité à traiter divers types de cancer, avec un focus particulier sur les nouvelles méthodes préventives, diagnostiques et thérapeutiques.', cardLink: '/oncologie' },
]);

const currentIndex = ref(0);

// const visibleCount = 1;

// const visibleItems = computed(() => {
//     return items.value.slice(currentIndex.value, currentIndex.value + visibleCount);
// });

const carouselStyle = computed(() => {
    const offset = currentIndex.value * 100;
    return {
        transform: `translateX(-${offset}%)`,
        transition: 'transform 0.5s ease'
    };
});

const carousel = ref(null);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
};

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
};

const isMobile = ref(window.innerWidth < 768);

const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

</script>

<style>
    .carousel-container {
        position: relative;
        overflow: hidden;
        margin: 0 auto;
    }

    .carousel {
        white-space: nowrap;
        padding: 1rem;
    }

    .carousel.mobile-view {
        display: block;
        white-space: normal;
    }

    .slide {
        display: inline-block;
        width: 100%;
        margin: auto;
        padding-bottom: 100px;
    }

    .slide.mobile-view {
        display: block;
        margin-bottom: 1rem;
    }

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        padding: 10px;
        cursor: pointer;
        user-select: none;
        background-color: var(--main-clr);
        width: 20px;
        height: 20px;
        padding: 1rem;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .arrow:hover,
    .arrow:focus{
        background-color: var(--secondary-clr);
    }

    .left-arrow {
        left: 0;
        z-index: 10;
    }

    .right-arrow {
        right: 0;
        z-index: 10;
    }

    @media screen and (min-width:640px){
        .slide{
            margin: 0 1rem;
        }
    }
</style>
