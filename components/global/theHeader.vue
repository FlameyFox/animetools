<template>
  <div class="p-8">
    <header
      class="flex p-8 justify-between items-center shadow-2xl rounded-2xl shadow-purple-600/50">
      <div class="flex flex-col">
        <nuxt-link class="text-4xl !border-b-0" to="/">animetools</nuxt-link>
        <span class="text-slate-600">- under development</span>
      </div>

      <nav class="flex items-center gap-12 text-lg">
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
