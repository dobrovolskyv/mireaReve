<template>
  <div class="w-full min-h-[200px] bg-white absolute top-0 left-0 rounded-b-main z-20">
    <div class="container">
      <div class="mt-10 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
            <img src="@/assets/img/icons/search.png" alt="search">
             <input class="max-w-[215px] border-b border-[#D0D5DD] focus:outline-none" type="text" placeholder="Поиск" >
        </div>
        <div class="flex items-center gap-10">
          <span class="font-semibold">ОЧИСТИТЬ</span>
          <img @click="searchStore.closeSearch()"
          class="cursor-pointer"
          src="@/assets/img/icons/close.svg" alt="close">
         
        </div>
      </div>


    </div>

  </div>
</template>

<script setup >
import { ref } from "vue"
import { useSearchStore } from "~/stores/search";

const searchStore = useSearchStore()


const showSearch = ref(false)

</script>

<style scoped></style>


