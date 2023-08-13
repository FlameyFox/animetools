<template>
  <div>
    <div
      class="max-w-6xl mx-auto py-12 px-16 rounded-2xl bg-slate-900 mt-32 shadow-2xl shadow-purple-600/50">
      <h2 class="text-center text-6xl mb-2">Data sets</h2>
      <h4 class="mb-8 text-center">
        Currently each limited to 100 requests per 15 minutes. Subject to
        change.
      </h4>
      <div class="grid grid-cols-3 gap-4">
        <nuxt-link
          to="/api/naruto"
          target="_blank"
          class="bg-purple-600/20 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-2xl">Naruto Characters</h3>
          <p class="text-sm text-purple-400/70">
            64 characters. Multiple attributes.
          </p>
        </nuxt-link>
        <nuxt-link
          to="https://twitter.com/flamey_fox"
          target="_blank"
          class="bg-purple-600/10 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          <h3 class="text-2xl">More to come...</h3>
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
