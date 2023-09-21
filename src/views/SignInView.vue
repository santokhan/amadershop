<template>
    <section>
        <div class="max-w-screen-xl mx-auto px-4 pt-4 md:pt-8 pb-16 relative">
            <section class="py-12 md:py-16">
                <div class="flex flex-col items-center justify-center px-6 mx-auto lg:py-0">
                    <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-lg xl:p-0">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Sign in to your account</h1>
                            <div class="flex items-center justify-center gap-3">
                                <button data-v-cafc84d3="" type="button" @click="handleSubmit"
                                    class="border h-11 px-3 rounded-lg text-gray-900 flex items-center gap-2 hover:bg-gray-50 font-medium"><svg
                                        data-v-cafc84d3="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                        class="h-5">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"></path>
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"></path>
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"></path>
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"></path>
                                        <path d="M1 1h22v22H1z" fill="none"></path>
                                    </svg>
                                    <span data-v-cafc84d3="" class="whitespace-nowrap">Sign in with Google</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { authenticateByGoogle } from '../firebase/auth'
import validateAdmin from '../firebase/validate-admin'

const router = useRouter()

function handleSubmit(e: any) {
    e.preventDefault()
    authenticateByGoogle((email) => {
        console.log(validateAdmin(email));        
        if (validateAdmin(email)) {
            router.push("/admin")
        } else {
            router.push("/")
        }
    })
}
</script>

<style scoped></style>