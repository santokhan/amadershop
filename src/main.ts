import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Router, createRouter, createWebHashHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'
import { VueFire, VueFireAuth } from 'vuefire'
import { app as firebaseApp } from './firebase/firebase'
import PrimeVue from 'primevue/config';

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
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./views/AdminView.vue'),
            meta: { requiresAuth: false },
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('./views/SignInView.vue'),
            meta: { requiresAuth: false },
        }
    ]
})

router.beforeEach(async (to) => {
    const currentUser = await getCurrentUser()

    if (to.path == "/admin") {
        if (!currentUser?.email) {
            return { name: 'signin' }
        }
    }

    if (to.path == "/signin") {
        if (currentUser?.email) {
            return { name: 'admin' }
        }
    }

})


createApp(App).use(VueFire, {
    firebaseApp, modules: [
        // we will see other modules later on
        VueFireAuth(),
    ],
}).use(router).use(PrimeVue).mount('#app')
