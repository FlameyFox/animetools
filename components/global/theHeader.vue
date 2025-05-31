<template>
  <div class="fixed top-0 left-0 right-0 z-50 px-4 md:px-8">
    <header
      class="flex md:flex-row flex-col justify-center p-4 md:p-8 md:justify-between items-center bg-slate-900/80 backdrop-blur-sm border border-slate-800/30 rounded-2xl mx-auto max-w-[95vw] my-4">
      <div class="flex items-center justify-between w-full md:w-auto">
        <div class="flex flex-col items-center md:items-start">
          <a
            href="/"
            class="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text no-underline"
            >animetools.io</a
          >
          <span class="text-slate-400/70 text-xs md:text-sm"
            >v2.0 is out now ✨</span
          >
        </div>
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden bg-slate-800/50 p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
          aria-label="Toggle menu">
          <div class="w-6 h-5 relative flex flex-col justify-between">
            <span
              class="w-full h-0.5 bg-current transform transition-all duration-200"
              :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></span>
            <span
              class="w-full h-0.5 bg-current transition-all duration-200"
              :class="{ 'opacity-0': isMenuOpen }"></span>
            <span
              class="w-full h-0.5 bg-current transform transition-all duration-200"
              :class="{ '-rotate-45 -translate-y-2.5': isMenuOpen }"></span>
          </div>
        </button>
      </div>

      <nav
        :class="{ 'hidden md:block': !isMenuOpen, block: isMenuOpen }"
        class="w-full md:w-auto mt-4 md:mt-0">
        <ul class="flex flex-col md:flex-row items-center gap-6 text-slate-300">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="group relative py-2 transition-colors hover:text-white">
              {{ link.text }}
              <div
                class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-purple-300/30 to-pink-300/30 transition-all duration-200 scale-0 router-link-active:scale-100 router-link-active:from-purple-300/50 router-link-active:to-pink-300/50 md:group-hover:scale-100"></div>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false);

// Close menu when route changes
watch(
  () => useRoute().path,
  () => {
    isMenuOpen.value = false;
  }
);

const links = [
  { to: "/password-generator", text: "Password Generator" },
  { to: "/practice-japanese", text: "Practice Japanese" },
  { to: "/datasets", text: "Datasets" },
  { to: "/color-palettes", text: "Color Palettes" },
];
</script>
