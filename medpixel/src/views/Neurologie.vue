<template>
    <Accordion :items="panels">
        <template v-slot:panel1>
            <p>Contenu du premier panneau.</p>
        </template>
        <template v-slot:panel2>
            <p>Contenu du deuxième panneau.</p>
        </template>
        <template v-slot:panel3>
            <p>Contenu du troisième panneau.</p>
        </template>
    </Accordion>
</template>

<script setup>
import Accordion from '../components/Accordion.vue';

const panels = [
    { title: 'Panneau 1', name: 'panel1' },
    { title: 'Panneau 2', name: 'panel2' },
    { title: 'Panneau 3', name: 'panel3' }
];
</script>
  