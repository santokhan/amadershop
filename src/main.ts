import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Router, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

export const router: Router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: () => import('./views/LandingView.vue'),
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('./views/CartView.vue'),
        }
    ]
})

createApp(App).use(router).mount('#app')
