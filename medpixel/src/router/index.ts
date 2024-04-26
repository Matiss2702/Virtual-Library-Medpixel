import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cardiologie from '@/views/Cardiologie.vue'; 
import Neurologie from '@/views/Neurologie.vue';
import Oncologie from '@/views/Oncologie.vue';


const routes = [
    {
        path: '/Virtual-Library-Medpixel/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Virtual-Library-Medpixel/cardiologie',
        name: 'Cardiologie',
        component: Cardiologie,
    },
    {
        path: '/Virtual-Library-Medpixel/neurologie',
        name: 'Neurologie',
        component: Neurologie,
    },
    {
        path: '/Virtual-Library-Medpixel/oncologie',
        name: 'Oncologie',
        component: Oncologie,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
