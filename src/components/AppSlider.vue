<template>
    <swiper class="mySwiper">
        <swiper-slide>
            <img src="/hair-oil-1.png" alt="slider" class="w-full aspect-square object-contain rounded-2xl">
        </swiper-slide>
        <swiper-slide>
            <img src="/hair-oil-2.png" alt="slider" class="w-full aspect-square object-contain rounded-2xl">
        </swiper-slide>
    </swiper>
</template>

<script lang="ts" setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// import SlideImage from './slider/SliderImage.vue'

// Import Swiper styles
import 'swiper/css';

import '../assets/swiper.css';
</script>
  