<template></template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { getCurrentUser } from 'vuefire'
import validateAdmin from '../firebase/validate-admin';
import { useRouter } from 'vue-router';

onBeforeMount(async () => {
    await getCurrentUser().catch(err => { throw err }).then(user => {
        const email = user?.email
        if (email) {
            const isAdmin = validateAdmin(email)
            if (!isAdmin) {
                useRouter().push("/")
            }
        }
    })
})
</script>

<style scoped></style>