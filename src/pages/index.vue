<script setup >
import Button from "../components/UI/Button.vue";
import Slides from "../components/Slides.vue";
import CardList from "../components/CardList.vue";
import Sets from "../components/Sets.vue";
import Footer from "../layouts/Footer.vue";



</script>

<template>
  <div class="container">
    <div class="flex items-center justify-between w-full gap-2 h-[495px] mb-[60px]">
      <div class="w-full h-full bg-gray-300 rounded-lg p-10 text-center">
        <h2>Мягкость</h2>
        <p>которую хочется ощущать</p>
 
      <NuxtLink to="katalog">
        <Button label="Каталог товаров"/>
      </NuxtLink>
      </div>
      <div class="w-full h-full bg-gray-300 rounded-lg p-10">

        <Slides/>
      </div>
    </div>

    <Individual />

   <Marque/>
   <Popup/>


    <CardList />



    <!-- <Card
    bgColor="bg-red-100"
      :imgSrc="pillow"
      label="SILKEN STATEEN 2"
      price="102 999rub"
      type="best seller2"
      descr="Комплект постельного2"
    /> -->
    <!-- <div
      class="relative bg-gray-50 w-[340px] h-[300px] border-red-100 rounded-lg p-4 flex flex-col justify-between"
    >
      <img
        src="@/assets/img/pillow.jpg"
        class="w-1/2 absolute top-1/2 left-1/2 transfrom -translate-x-1/2 -translate-y-1/2 z-1"
      />
      <NuxtImg src="/pillow.jpg" width="300" height="300" />
      <div class="flex items-center justify-between z-10">
        <span
          class="border-full px-2 py-1 border border-black rounded-full uppercase"
          >best seller</span
        >
        <span>fav</span>
      </div>

      <div class="z-10">
        <div class="flex items-center justify-between">
          <p>SILKEN STATEEN</p>
          <p>10 999rub</p>
        </div>
        <div class="flex items-center justify-between">
          <p>Комплект постельного</p>
        </div>
      </div>
    </div> -->

    <Sets />
    
    <Footer />
  </div>
</template>