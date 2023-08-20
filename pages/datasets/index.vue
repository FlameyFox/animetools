<template>
  <div>
    <div
      class="max-w-[90vw] md:max-w-6xl mx-auto p-8 md:py-12 md:px-16 rounded-2xl bg-slate-900 mt-32 shadow-2xl shadow-purple-600/50">
      <h1 class="text-center text-3xl md:text-6xl mb-8">Data sets</h1>
      <h4 class="text-center">
        Currently each api is limited to 100 requests per 15 minutes.<br /><span
          class="text-sm"
          >Subject to change.</span
        >
      </h4>
      <h5 class="mb-16 text-center mt-4">
        <span
          class="bg-purple-300/80 px-3 py-2 rounded text-purple-900 text-sm font-medium"
          >Warning: Some of the data might include spoilers for the given
          show.</span
        >
      </h5>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <nuxt-link
          to="/api/naruto"
          target="_blank"
          class="bg-purple-600/20 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-xl">Naruto characters</h3>
          <p class="text-sm text-purple-400/70">
            64 characters. Multiple attributes.
          </p>
          <p class="text-sm font-medium text-purple-300/70 mt-4">
            Click to see dataset
          </p>
        </nuxt-link>
        <nuxt-link
          to="/api/attackOnTitan"
          target="_blank"
          class="bg-purple-600/20 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-xl">Attack on Titan characters</h3>
          <p class="text-sm text-purple-400/70">
            32 characters. Multiple attributes.
          </p>
          <p class="text-sm font-medium text-purple-300/70 mt-4">
            Click to see dataset
          </p>
        </nuxt-link>
        <nuxt-link
          to="https://twitter.com/flamey_fox"
          target="_blank"
          class="bg-purple-600/10 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-2xl text-white/80">More to come...</h3>
          <p class="text-sm text-purple-400/50">
            Let me know what to add next!
          </p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "animetools.io - Data Sets",
  ogTitle: "animetools.io - Data Sets",
  description:
    "Anime-inspired data sets: elevate your next proeject, by using your favourite anime characters as your dummy data!",
  ogDescription:
    "Anime-inspired data sets: elevate your next proeject, by using your favourite anime characters as your dummy data!",
  twitterCard: "summary_large_image",
});
</script>
