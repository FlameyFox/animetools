<template>
  <div class="p-8">
    <header
      class="flex md:flex-row flex-col justify-center p-8 md:justify-between items-center shadow-2xl rounded-2xl shadow-purple-600/50">
      <div class="flex flex-col">
        <nuxt-link class="text-4xl !border-b-0" to="/">animetools.io</nuxt-link>
        <span class="text-slate-600 text-center md:text-left md:mb-0 mb-4"
          >- under development</span
        >
      </div>

      <nav
        class="flex items-center mt-4 sm:mt-0 flex-col sm:flex-row text-md gap-2 sm:gap-12 md:text-lg">
        <nuxt-link
          class="border-b pb-2 border-b-transparent transition-all"
          to="/password-generator"
          >Password Generator</nuxt-link
        >
        <nuxt-link
          class="border-b pb-2 border-b-transparent transition-all"
          to="/datasets"
          >Data sets</nuxt-link
        >
        <nuxt-link
          class="border-b pb-2 flex items-center border-b-transparent transition-all"
          to="/color-palettes"
          >Color palettes<span
            class="text-sm tracking-wide py-1 px-2 rounded-md bg-purple-500 ml-2"
            >NEW</span
          >
        </nuxt-link>
      </nav>
    </header>
  </div>
</template>
