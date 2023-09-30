import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppPortfolio from './pages/AppPortfolio.vue';
import AppProject from './pages/AppProject.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
    {
    path: '/',
    name: 'home',
    component: AppHome
    },
    {
    path: '/portfolio',
    name: 'portfolio',
    component: AppPortfolio
    },
    {
        path: '/project/:id',
        name: 'project',
        component: AppProject
    },
]
});
export { router };