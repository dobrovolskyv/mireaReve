  <script setup >
  import { navItems, navItemsMobile } from "@/data";
  import { ref, onMounted, onUnmounted } from "vue";
  import SearchHeader from "@/components/SearchHeader.vue";
  import { useSearchStore } from "@/stores/search";
  import Footer from "./Footer.vue";

  const showNav = ref(false);
  const isMenuOpen = ref(false)
  const searchStore = useSearchStore()


  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

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
      `bg-white fixed top-0 w-full transition-all duration-500 z-50 py-[28px] hidden lg:block`,
      showNav ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`,
    ]">
      <div class="container2 py-4 flex items-center justify-between">
        <div class="flex items-center justify-content gap-6">
          <NuxtLink to="/">
            <img src="@/assets/img/icons/logo_mini.png" alt="" class="w-[180px]">
          </NuxtLink>
          <button @click="searchStore.toggleSearch()">
            <img src="@/assets/img/icons/search.png" alt="search">
          </button>
        </div>

        <SearchHeader v-if="searchStore.isSearchOpen" />

        <div class="flex items-center gap-2.5">
          <NuxtLink to="/katalog" class="bg-black rounded-full text-white px-7 py-2.5 font-bold">
            Каталог
          </NuxtLink>
          <NuxtLink to="/novinki" class="bg-black rounded-full text-white px-7 py-2.5 font-bold">
            Новинки
          </NuxtLink>
        </div>

        <nav>
          <ul class="flex items-center gap-4 uppercase">
            <li v-for="item in navItems" :key="item.id">
              <NuxtLink :to="item.link" class=" text-black text-md">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex items-center gap-2.5">
          <NuxtLink to="cart">
            <img src="@/assets/img/icons/cart.png" alt="">
          </NuxtLink>
          <NuxtLink to="/favorites">
            <img src="@/assets/img/icons/heart.png" alt="">
          </NuxtLink>
        </div>
      </div>
    </div>

    <div :class="[
      `header__mobile bg-white fixed top-0 w-full transition-all duration-500 z-50 pt-[48px] pb-3 block lg:hidden`,
      showNav ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`,
    ]">
      <div class="container2 py-4 flex items-center justify-between">


        <div class="flex items-center justify-content gap-4">
          <div class="burger" @click="toggleMenu">
            <span :class="{ 'open': isMenuOpen }"></span>
            <span :class="{ 'open': isMenuOpen }"></span>
            <span :class="{ 'open': isMenuOpen }"></span>
          </div>
          <button @click="searchStore.toggleSearch()">
            <img src="@/assets/img/icons/search.png" alt="search">
          </button>
        </div>

        <SearchHeader v-if="searchStore.isSearchOpen" />

        <NuxtLink to="/">
          <img src="@/assets/img/icons/logo_mini.png" alt="" class="w-[180px]">
        </NuxtLink>

        <div class="flex items-center gap-4">
          <NuxtLink to="cart">
            <img src="@/assets/img/icons/cart.png" alt="">
          </NuxtLink>
          <NuxtLink to="/favorites">
            <img src="@/assets/img/icons/heart.png" alt="">
          </NuxtLink>
        </div>
      </div>
      <div v-if="isMenuOpen" class="mb-[-12px]">
        <div  class="mobile-menu bg-white w-full h-auto px-4 py-6 mt-[50px]">
          <ul class="flex flex-col gap-4">
            <li v-for="item in navItemsMobile" :key="item.id">
              <NuxtLink :to="item.link"
                class="text-black text-lg flex items-center justify-between border-b pb-2.5 border-black uppercase font-bold">
                <span>{{ item.title }}</span>
                <img src="@/assets/img/icons/arrow.png" alt="">
              </NuxtLink>
            </li>
          </ul>
          <img src="@/assets/img/icons/logo.png" alt="" class="w-full mt-10">
        </div>
        <div class="bg-[#5C5C5C] px-4 py-3 flex flex-col items-start gap-3 text-white">
          <span>Меню</span>
          <span>О нас</span>
          <span>Поддрежка</span>
        </div>
      </div>

    </div>
  </header>
  <main>
    <div class="bg-red-500 text-white text-center py-1 h-2 text-[2px]">NAVSCROLL ACTIVE</div>
    <slot />
  </main>
  <Footer />
</template>

<style scoped>
.burger {
  cursor: pointer;
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.burger span {
  background: #000;
  height: 2px;
  width: 24px;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.3s;
}

/* Анимация крестика */
.burger span:nth-child(1).open {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger span:nth-child(2).open {
  opacity: 0;
}

.burger span:nth-child(3).open {
  transform: rotate(-45deg) translate(5px, -7px);
}
</style>