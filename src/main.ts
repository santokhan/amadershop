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
            meta: { requiresAuth: true },
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('./views/SignInView.vue'),
        },
        {
            path: '/terms',
            name: 'terms',
            component: () => import('./views/TermsView.vue'),
        },
        {
            path: '/privacy',
            name: 'privacy',
            component: () => import('./views/PrivacyView.vue'),
        }
    ]
})

router.beforeEach(async (to) => {

    // if meta.requiresAuth == true
    if (to.meta.requiresAuth) {
        const currentUser = await getCurrentUser()
        // if enter to the requiresAuth route
        if (to.name == "admin") {
            // if user does not exists redirect to signin
            if (!currentUser?.email) {
                return { name: 'signin' }
            }
        }
    }

    if (to.name == "signin") {
        const currentUser = await getCurrentUser()
        if (currentUser?.email) {
            return { name: 'admin' }
        }
    }
})

createApp(App).use(router).use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
}).use(PrimeVue).mount('#app')
