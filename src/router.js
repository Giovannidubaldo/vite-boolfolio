import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppProject from './pages/AppProject.vue';
import AppNotFound from './pages/AppNotFound.vue';
import SingleCard from './pages/SingleCard.vue';
import AppContactUs from './pages/AppContactUs.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/project',
            name: 'project',
            component: AppProject
        },
        {
            path: '/project/:slug',
            name: 'single-card',
            component: SingleCard
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContactUs
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: AppNotFound
        }
    ]
});

export { router }