<template>
    <div class="lg:grid grid-cols-2 gap-2.5 my-40 hidden ">
        <div class="bg-gray-100 rounded-[20px] w-full h-[400px]"></div>
        <div class="bg-gray-100 rounded-[20px] w-full h-[400px]"></div>
        <div class="bg-gray-100 rounded-[20px] w-full h-[400px] col-span-2"></div>
        <div class="bg-gray-100 rounded-[20px] w-full h-[400px]"></div>
        <div class="bg-gray-100 rounded-[20px] w-full h-[400px]"></div>
    </div>
    <div class="block lg:hidden my-[60px]">
        <Swiper 
        :slides-per-view="1" 
        :space-between="50" 
        @swiper="onSwiper2" 
        @slideChange="onSlideChange2"
        class="w-full h-[267px]">
            <SwiperSlide class=" h-[267px] rounded-md bg-gray-200">Категория 1</SwiperSlide>
            <SwiperSlide class=" h-[267px] rounded-md bg-gray-200">Категория 2</SwiperSlide>
            <SwiperSlide class=" h-[267px] rounded-md bg-gray-200">Категория 3</SwiperSlide>


        </Swiper>

    </div>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";


const onSwiper2 = (swiper: any) => {
    console.log(swiper);
};

const onSlideChange2 = () => {
    console.log("slide change 22");
};
</script>



