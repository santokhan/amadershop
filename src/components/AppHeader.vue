<template>
    <div class="bg-main">
        <AppContainer>
            <div class="flex justify-between items-center">
                <LogoMain />
                <ul class="flex gap-4 lg:gap-6 font-medium lg:text-lg">
                    <li>
                        <RouterLink to="/privacy" class="text-white hover:underline">Privacy Policy</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/terms" class="text-white hover:underline">Terms & Conditions</RouterLink>
                    </li>
                </ul>
            </div>
        </AppContainer>
    </div>
</template>

<script setup lang="ts">
import AppContainer from './AppContainer.vue';
import LogoMain from './LogoMain.vue';
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>