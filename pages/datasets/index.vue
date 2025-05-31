<template>
  <div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <!-- Title Section -->
      <div class="text-center mb-12 md:mb-16">
        <h1
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
          Anime Datasets
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-4">
          Add a touch of anime magic to your projects with our curated datasets!
        </p>
        <div class="text-center mb-8">
          <p class="text-slate-400 mb-2">
            Currently each API is limited to 100 requests per 15 minutes.
            <br />
            <span class="text-sm">Subject to change.</span>
          </p>
        </div>
      </div>

      <!-- Spoiler Warning -->
      <div
        class="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 max-w-3xl mx-auto mb-12">
        <p class="text-purple-300 text-center">
          ⚠️ Warning: Some of the data might include spoilers for the given
          show.
        </p>
      </div>

      <!-- Anime Datasets Section -->
      <div
        class="bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 md:p-12 mb-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <!-- Hardcoded Anime Datasets -->
          <nuxt-link
            to="/api/naruto"
            target="_blank"
            class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 p-6 rounded-xl transition-all hover:transform hover:-translate-y-1">
            <h3
              class="text-xl font-medium mb-2 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Naruto Characters
            </h3>
            <p class="text-sm text-purple-400/70 mb-4">
              64 characters. Multiple attributes.
            </p>
            <p class="text-sm font-medium text-purple-300/70">
              Click to see dataset
            </p>
          </nuxt-link>

          <nuxt-link
            to="/api/attackOnTitan"
            target="_blank"
            class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 p-6 rounded-xl transition-all hover:transform hover:-translate-y-1">
            <h3
              class="text-xl font-medium mb-2 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Attack on Titan Characters
            </h3>
            <p class="text-sm text-purple-400/70 mb-4">
              32 characters. Multiple attributes.
            </p>
            <p class="text-sm font-medium text-purple-300/70">
              Click to see dataset
            </p>
          </nuxt-link>

          <nuxt-link
            to="/api/demonslayer"
            target="_blank"
            class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 p-6 rounded-xl transition-all hover:transform hover:-translate-y-1">
            <h3
              class="text-xl font-medium mb-2 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Demon Slayer: Kimetsu no Yaiba Characters
            </h3>
            <p class="text-sm text-purple-400/70 mb-4">
              25 characters. Multiple attributes.
            </p>
            <p class="text-sm font-medium text-purple-300/70">
              Click to see dataset
            </p>
          </nuxt-link>

          <nuxt-link
            to="/api/onepiece"
            target="_blank"
            class="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 p-6 rounded-xl transition-all hover:transform hover:-translate-y-1">
            <h3
              class="text-xl font-medium mb-2 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              One Piece
            </h3>
            <p class="text-sm text-purple-400/70 mb-4">
              12 characters. Multiple attributes.
            </p>
            <p class="text-sm font-medium text-purple-300/70">
              Click to see dataset
            </p>
          </nuxt-link>

          <!-- More to Come Card -->
          <nuxt-link
            to="https://twitter.com/flamey_fox"
            target="_blank"
            class="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/20 p-6 rounded-xl transition-all hover:transform hover:-translate-y-1">
            <h3 class="text-2xl font-medium mb-2 text-white/80">
              More to come...
            </h3>
            <p class="text-sm text-purple-400/50">
              Let me know what to add next!
            </p>
          </nuxt-link>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="space-y-12">
        <!-- Card 1: Rich Data -->
        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <h2
              class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Instant Connection ⚔️
            </h2>
            <p class="text-lg text-slate-300">
              Who wouldn't want to work with data that reminds them of their
              favorite anime binge sessions? It's like having a mini anime
              marathon, but, you know, while working.
            </p>
          </div>
        </div>

        <!-- Card 2: Variety -->
        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <h2
              class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              So Much Variety 🎭
            </h2>
            <p class="text-lg text-slate-300">
              Anime characters aren't just about cool moves and epic battles.
              They've got histories, quirks, and a ton of attributes. Perfect
              for mixing things up in your projects.
            </p>
          </div>
        </div>

        <!-- Card 3: Lighten the Mood -->
        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <h2
              class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Lighten Up the Mood ⚡
            </h2>
            <p class="text-lg text-slate-300">
              Data work can get a bit... yawn... sometimes. But throw in some
              anime characters, and suddenly it's a whole lot more interesting.
            </p>
          </div>
        </div>

        <!-- Card 4: Stay Tuned -->
        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <h2
              class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Stay Tuned for More 🌟
            </h2>
            <p class="text-lg text-slate-300">
              We're just getting started. More of your favorite characters from
              other epic series are on the way. So, keep an eye out!
            </p>
          </div>
        </div>

        <!-- Final Note -->
        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 max-w-2xl mx-auto">
          <div class="max-w-2xl mx-auto">
            <p class="text-lg text-slate-300">
              Just a heads up, though – watch out for spoilers! We wouldn't want
              to ruin the next big plot twist for you. Dive in, have fun, and
              let anime give your projects that extra spark!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Anime Datasets for Projects | Naruto, Attack on Titan & More!",
  ogTitle: "Anime Datasets for Projects | Naruto, Attack on Titan & More!",
  description:
    "Dive into our unique anime datasets! From Naruto to Attack on Titan, elevate your projects with data from your favorite characters. Perfect for anime fans looking to blend work with a touch of otaku fun. Stay tuned for more additions!",
  ogDescription:
    "Dive into our unique anime datasets! From Naruto to Attack on Titan, elevate your projects with data from your favorite characters. Perfect for anime fans looking to blend work with a touch of otaku fun. Stay tuned for more additions!",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
