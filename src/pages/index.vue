<template>
  <div>
    <div class="container2">
      <div class="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-2 h-full xl:h-[495px] mt-[60px] ">
        <HeroCatalog />
        <SlidesWrapper />
      </div>

      <Marque />

      <IndividualMain />

      <Popup />

      <!-- <CardList /> -->
      <KatalogMain />


      <!-- <Sets/> -->

    </div>
  </div>
</template>

<script setup>


import CardList from "../components/CardList.vue";
import Sets from "../components/Sets.vue";
import Footer from "../layouts/Footer.vue";
import IndividualMain from "@/components/IndividualMain.vue";
import Marque from "@/components/Marque.vue";
import Popup from "@/components/PopupMain.vue";
import SlidesWrapper from "@/components/SlidesWrapper.vue";
import HeroCatalog from "@/components/HeroCatalog.vue";

definePageMeta({
  layout: "navscroll",
});
</script>