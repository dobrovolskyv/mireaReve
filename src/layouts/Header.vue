<script setup >
import { navItems } from "@/data";
import { ref, onMounted, onUnmounted } from "vue";

const showNav = ref(false);

const handleScroll = () => {
  showNav.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template >
  <header>
    <div :class="[`bg-white container fixed top-0 w-full transition-all duration-500 z-50`,
   showNav ? `opacity-100 translate-y-0` : `opacity-0 -translate-y-10`

   ]">
      <div class="py-4 flex items-center justify-between">
        <div class="flex items-center justify-content gap-4">
          <NuxtLink to="/">Mirea Reve</NuxtLink>
          <NuxtLink to="/">search</NuxtLink>
        </div>

        <nav>
          <ul class="flex items-center gap-4 uppercase">
            <li v-for="item in navItems" :key="item.id">
              <NuxtLink
                :to="item.link"
                class="bg-black rounded-full text-white px-2 py-1"
                >{{ item.title }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
        <NuxtLink to="favorites">favorites</NuxtLink>
      </div>
    </div>
    <slot />
  </header>
</template>

