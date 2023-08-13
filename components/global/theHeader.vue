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

      <nav class="flex items-center text-md gap-6 md:gap-12 md:text-lg">
        <nuxt-link class="border-b border-b-transparent" to="/passwordgenerator"
          >Password Gen</nuxt-link
        >
        <nuxt-link class="border-b border-b-transparent" to="/datasets"
          >Data sets</nuxt-link
        >
      </nav>
    </header>
  </div>
</template>
