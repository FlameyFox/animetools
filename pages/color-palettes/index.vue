<template>
  <div>
    <div
      class="max-w-[90vw] md:max-w-6xl mx-auto p-8 md:py-12 md:px-16 rounded-2xl bg-slate-900 mt-32 shadow-2xl shadow-purple-600/50">
      <h1 class="text-center text-3xl md:text-6xl mb-8">Anime Color Themes</h1>
      <h3 class="text-center">
        Spice up your projects with some anime themed palettes
      </h3>
      <h5 class="mb-16 text-center mt-4">
        <span
          class="bg-purple-300/80 px-3 py-2 rounded text-purple-900 text-sm font-medium"
          >Start by selecting a show or movie</span
        >
      </h5>
      <div class="text-center w-100 p-4" v-if="loading">
        Loading themes ✨...
      </div>
      <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <nuxt-link
          v-for="theme in themes"
          :key="theme.id"
          :to="`/color-palettes/${theme.name}`"
          class="bg-purple-600/20 py-4 px-6 rounded-lg transition-all translate-y-0 hover:-translate-y-1">
          {{ theme.pretty_name }}
        </nuxt-link>
      </div>
    </div>
    <div
      class="mt-24 md:mt-32 max-w-[90vw] md:ax-w-7xl mx-auto bg-slate-800/10 mb-32 p-12 rounded-lg">
      <h2 class="text-4xl mb-4">
        Anime Color Palettes: Bringing Stories to Life through Design ✨
      </h2>
      <p>
        Hello, Anime Enthusiast!<br />Breathe life into your projects with
        vibrant color palettes inspired by your favorite anime.<br />
        From Naruto's fiery spirit to the soothing tones of My Neighbor Totoro,
        discover the hues of the anime world.
      </p>

      <h3 class="text-2xl mt-8 mb-2">Why Opt for Anime-Inspired Themes?</h3>
      <strong>1. Unique & Captivating:</strong>
      <p>
        Each anime carries its aura, its emotion. By adopting these themes, your
        designs embody these feelings, ensuring they stand out and captivate.
      </p>
      <strong class="mt-2 block">2. Dive into Nostalgia:</strong>
      <p>
        Remember the excitement of watching an anime episode for the first time?
        Recapture that emotion with color palettes reminiscent of those iconic
        moments.
      </p>
      <strong class="mt-2 block">3. Endless Inspirations:</strong>
      <p>
        With a plethora of anime series and genres, the possibilities are
        endless. Each theme holds a unique blend of colors ready to inspire.
      </p>
      <h3 class="text-2xl mt-8 mb-2">How to Use These Themes?</h3>
      <p>
        Explore our grid of anime themes. Once you find a palette that
        resonates, dive deeper to discover the full spectrum of colors. Whether
        you're designing a serene landscape inspired by "Studio Ghibli" or a
        dynamic poster of "One Piece", we've got you covered.
      </p>
      <h3 class="text-2xl mt-8 mb-2">
        Enhance Your Design Narrative with Anime Elegance
      </h3>
      <p>
        In the world of design, narratives matter. And what better narrative
        than tales that have enthralled millions? By infusing anime-inspired
        palettes into your projects, not only do you elevate its aesthetics, but
        you also weave a story waiting to be told.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title:
    "Anime Color Palettes | Elevate Your Designs with Otaku-Inspired Palettes",
  ogTitle:
    "Anime Color Palettes | Elevate Your Designs with Otaku-Inspired Palettes",
  description:
    "Discover vibrant Anime Color Palettes curated for designers and anime enthusiasts alike. Bring a touch of Naruto, Attack on Titan, and more into your projects with our unique color palettes inspired by iconic anime series.",
  ogDescription:
    "Discover vibrant Anime Color Palettes curated for designers and anime enthusiasts alike. Bring a touch of Naruto, Attack on Titan, and more into your projects with our unique color palettes inspired by iconic anime series.",
  twitterCard: "summary_large_image",
});

import { ref, onMounted } from "vue";

const supabase = useSupabaseClient();

const themes = ref([]);
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  const { data, error } = await supabase.from("themes").select("*");

  if (error) {
    console.error("Error fetching themes:", error);
  } else if (data) {
    themes.value = data;
  }
  loading.value = false;
});
</script>
