import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Router, createRouter, createWebHashHistory } from 'vue-router'

export const router: Router = createRouter({
    history: createWebHashHistory(),
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
