import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cardiologie from '@/views/Cardiologie.vue'; 
import Neurologie from '@/views/Neurologie.vue';
import Oncologie from '@/views/Oncologie.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cardiologie',
        name: 'Cardiologie',
        component: Cardiologie,
    },
    {
        path: '/neurologie',
        name: 'Neurologie',
        component: Neurologie,
    },
    {
        path: '/oncologie',
        name: 'Oncologie',
        component: Oncologie,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
