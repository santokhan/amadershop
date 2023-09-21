<template>
    <div class="">
        <hr>
        <AppContainer>
            <div class="md:flex md:items-center md:justify-between text-lg py-6">
                <span class="sm:text-center">© 2023 <a href="" class="hover:underline">Amadershop</a>.
                    All Rights Reserved.
                </span>
                <ul class="flex flex-wrap items-center mt-3 font-medium  sm:mt-0">
                    <li>
                        <RouterLink to="/admin" class="hover:underline">Admin</RouterLink>
                    </li>
                </ul>
            </div>
        </AppContainer>
        <div class="w-full py-2 bg-main"></div>
    </div>
</template>

<script setup lang="ts">
import AppContainer from './AppContainer.vue';
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>