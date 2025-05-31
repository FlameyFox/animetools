<template>
  <div>
    <!-- Hero Section -->
    <div
      class="min-h-[55vh] flex items-center justify-center relative overflow-hidden">
      <div class="absolute inset-0 backdrop-blur-sm"></div>
      <div class="relative z-10 text-center max-w-[90vw]">
        <h1
          class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
          Your Hub for Anime Tools 🌸
        </h1>
        <p class="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
          Discover a unique collection of tools inspired by your favorite anime
          series. From password generators to datasets, we've got something
          special for every otaku!
        </p>
      </div>
    </div>

    <!-- Anime Sections -->
    <div
      class="max-w-[95vw] w-[1440px] mx-auto bg-slate-900/90 mb-16 p-6 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm border border-slate-800/50">
      <AnimeSection />
    </div>

    <!-- Features Section -->
    <div class="mt-24 max-w-[95vw] w-[1440px] mx-auto">
      <div class="text-center mb-16">
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text inline-block">
          Why animetools.io? ✨
        </h2>
        <p class="text-lg text-slate-300 max-w-2xl mx-auto">
          More than just another tool website - it's your go-to hub for
          anime-inspired utilities!
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/30 transition-colors">
          <div class="text-3xl mb-4">🎭</div>
          <h3 class="text-xl font-bold mb-3">Anime-Themed Tools</h3>
          <p class="text-slate-300">
            From Naruto-inspired password generators to datasets featuring your
            favorite Attack on Titan characters, our tools blend utility with
            anime flair.
          </p>
        </div>

        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/30 transition-colors">
          <div class="text-3xl mb-4">🚀</div>
          <h3 class="text-xl font-bold mb-3">Regular Updates</h3>
          <p class="text-slate-300">
            Stay tuned for new features and tools inspired by the latest anime
            trends. We're constantly evolving to bring you more amazing
            utilities!
          </p>
        </div>

        <div
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30 hover:border-purple-500/30 transition-colors">
          <div class="text-3xl mb-4">🤝</div>
          <h3 class="text-xl font-bold mb-3">Community Driven</h3>
          <p class="text-slate-300">
            Your feedback shapes our future. Suggest new tools or to help us
            grow!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimeSection from "~/components/AnimeSection.vue";

useSeoMeta({
  title:
    "AnimeTools.io | Your Ultimate Hub for Anime-Inspired Tools & Utilities",
  ogTitle:
    "AnimeTools.io | Your Ultimate Hub for Anime-Inspired Tools & Utilities",
  description:
    "Discover AnimeTools.io - your one-stop destination for anime-inspired utilities! From Naruto-themed password generators to My Hero Academia datasets, explore our unique collection of tools designed specifically for anime enthusiasts. Created by FlameyFox and powered by the community.",
  ogDescription:
    "Discover AnimeTools.io - your one-stop destination for anime-inspired utilities! From Naruto-themed password generators to My Hero Academia datasets, explore our unique collection of tools designed specifically for anime enthusiasts. Created by FlameyFox and powered by the community.",
  twitterCard: "summary_large_image",
});
</script>
