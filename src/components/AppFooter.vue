<template>
    <div class="">
        <hr>
        <AppContainer>
            <div class="md:flex md:items-center md:justify-between text-lg py-6">
                <span class="sm:text-center">© 2023 <a href="" class="hover:underline">Amadershop</a>.
                    All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center gap-5 mt-3 font-medium  sm:mt-0">
                    <li>
                        <RouterLink to="/admin" class="hover:underline">Admin</RouterLink>
                    </li>
                    <li v-if="addLogout">
                        <button type="button" @click="handleLogout" class="hover:underline">Logout</button>
                    </li>
                </ul>
            </div>
        </AppContainer>
        <div class="w-full py-2 bg-main"></div>
    </div>
</template>

<script setup lang="ts">
import AppContainer from './AppContainer.vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { getCurrentUser } from 'vuefire'
import { logOut } from '../firebase/auth'
import { ref, watch } from 'vue'

const addLogout = ref(false)
async function checkExists() {
    await getCurrentUser().then(user => {
        const email = user?.email
        if (email) {
            addLogout.value = true
        } else {
            addLogout.value = false
        }
    })
} checkExists()

const router = useRouter()

function handleLogout() {
    logOut(() => {
        router.push('/signin')
    })
}

const route = useRoute()
watch(() => route.params, () => {
    checkExists()
})
</script>

<style scoped></style>