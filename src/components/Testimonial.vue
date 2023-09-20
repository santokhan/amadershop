<template>
    <section class="bg-white" id="testimonial">
        <div class="max-w-screen-xl px-4 mt-16 mx-auto text-center lg:mt-24 lg:px-6 space-y-12">
            <h2 class="text-3xl lg:text-4xl font-semibold text-main text-center">আমাদের গ্রাহকরা কি বলে</h2>
            <figure class="max-w-screen-md mx-auto">
                <svg class="h-12 mx-auto mb-3 text-main" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor" />
                </svg>
                <blockquote>
                    <p class="lg:text-xl font-medium text-gray-900 !leading-[2]">
                        নলার্জড পোরস মিনিমাইজ করবো কেন? আমি চাই পোরস একদম ভ্যানিশ হয়ে যাক!’ অদ্ভুত শোনাচ্ছে? পোরস সম্পর্কে
                        সঠিক নলেজ না থাকার কারণে এই কথাটা অনেকেই বলেন। তবে সত্যিটা হচ্ছে পোরস কখনোই ভ্যানিশ করা সম্ভব নয়?
                    </p>
                </blockquote>
                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                    <img class="w-6 h-6 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                        alt="profile picture">
                    <div class="flex items-center divide-x-2 divide-gray-500">
                        <div class="pr-3 font-medium text-gray-900">Mishat</div>
                        <div class="pl-3 text-sm font-light text-gray-500">CEO at Amadershop</div>
                    </div>
                </figcaption>
            </figure>
        </div>
    </section>
    <PageReviews />
</template>

<script setup lang="ts">
import PageReviews from './PageReviews.vue';
</script>

<style scoped></style>