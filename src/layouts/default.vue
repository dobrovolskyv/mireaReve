  <script setup >
  import { navItems } from "@/data";
  import { ref, onMounted, onUnmounted } from "vue";
  import SearchHeader from "@/components/SearchHeader.vue";
  import { useSearchStore } from "@/stores/search";
  import Footer from "./Footer.vue";

  const showNav = ref(false);
  const searchStore = useSearchStore()




  const handleScroll = () => {
    showNav.value = window.scrollY > 100;

    // if(showNav.value = window.scrollY > 500){
    //   searchStore.closeSearch()
    // }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);

  });
</script>

<template >
  <header class="">
    <div :class="[
      `bg-white fixed top-0 w-full transition-all duration-500 z-50`,
      showNav ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`,
    ]">
      <div class="container py-4 flex items-center justify-between">
        <div class="flex items-center justify-content gap-4">
          <NuxtLink to="/">
            <img src="@/assets/img/icons/logo_mini.png" alt="" class="w-full">
          </NuxtLink>
          <button @click="searchStore.toggleSearch()">
            <img src="@/assets/img/icons/search.png" alt="search">
          </button>
        </div>

        <SearchHeader v-if="searchStore.isSearchOpen" />

        <nav>
          <ul class="flex items-center gap-4 uppercase">
            <li v-for="item in navItems" :key="item.id">
              <NuxtLink :to="item.link" class=" text-black text-md">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink to="cart">
          <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 902.86 902.86"
            xml:space="preserve" stroke="#000000">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path
                    d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z">
                  </path>
                  <path
                    d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z">
                  </path>
                </g>
              </g>
            </g>
          </svg>
        </NuxtLink>
        <NuxtLink to="/favorites">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
            <path
              d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
          </svg>
        </NuxtLink>

      </div>
    </div>
  </header>
  <main >
    <slot />
  </main>
  <Footer />
</template>

