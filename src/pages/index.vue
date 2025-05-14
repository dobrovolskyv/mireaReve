<script setup>
import Button from "../components/UI/Button.vue"
import Slides from "../components/Slides.vue";
import CardList from "../components/CardList.vue";
import Sets from "../components/Sets.vue";
import Footer from "../layouts/Footer.vue";
import IndividualMain from "@/components/IndividualMain.vue";
import Marque from "@/components/Marque.vue";
import Popup from "@/components/PopupMain.vue";


</script>

<template>
  <div class="container">
    <div class="flex items-center justify-between w-full gap-2 h-[495px] mt-[60px] ">
      <div class="w-full h-full bg-gray-300 rounded-[20px] p-10 text-center flex flex-col justify-between items-center">
        <span></span>
        <div>

          <h2 class="text-5xl">Мягкость</h2>
          <p class="text-2xl">которую хочется ощущать</p>
        </div>

        <NuxtLink to="/katalog">
          <Button label="Каталог товаров" bgColor="transparent"/>
        </NuxtLink>
      </div>
      <div class="w-full h-full bg-[url('@/assets/img/bg-slides.jpg')] rounded-[20px]  flex flex-col justify-between items-center ">

        <Slides/>
        <img class="mt-14" src="@/assets/img/icons/logo.png" alt="logo"/>
      </div>
    </div>

    <Marque/>

    <IndividualMain/>

    <Popup/>


    <!-- <CardList/> -->
     <KatalogMain/>




    <!-- <Sets/> -->

  </div>
  <Footer/>
</template>