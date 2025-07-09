<script setup lang="ts">
// Import Swiper Vue.js components
import Card from "./UI/Card.vue";

import { Swiper, SwiperSlide } from "swiper/vue";


const onSwiper = (swiper:any) => {
  console.log(swiper);
};

const onSlideChange = () => {
    console.log("slide change");
};
</script>


<template>

    <Swiper
      :slides-per-view="1"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      loop
      class="w-[314px]"
    >
      <Swiper-Slide>
        <Card label="Silken Sateen" price="10200rub" description="Комплект постельного" />
      </Swiper-Slide>
      <Swiper-Slide>
        <Card label="Silken Sateen2" price="10200rub" description="Комплект постельного" />
      </Swiper-Slide>
      <Swiper-Slide>
        <Card  label="Silken Sateen3" price="10200rub" description="Комплект постельного" />
      </Swiper-Slide>
    </Swiper>
  
</template>

