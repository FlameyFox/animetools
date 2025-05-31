<template>
  <div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <!-- Title Section -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
          Anime Color Palettes
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
          Explore beautiful color combinations inspired by your favorite anime series.
        </p>
      </div>

      <!-- Themes Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="theme in themes"
          :key="theme.id"
          class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30"
        >
          <nuxt-link
            :to="`/color-palettes/${theme.name}`"
            class="group block h-full"
          >
            <div class="space-y-4">
              <div class="h-24 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center">
                <span class="text-3xl">🎨</span>
              </div>
              <h3 class="text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
                {{ theme.pretty_name }}
              </h3>
            </div>
          </nuxt-link>
        </div>
      </div>

      <!-- Feature Cards -->
      <div class="space-y-12 mt-16">
        <!-- Design Impact -->
        <div class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Tell Stories Through Color 🎬
            </h2>
            <p class="text-lg text-slate-300">
              Every color palette tells a story. From the vibrant energy of shounen anime to the serene beauty of Studio Ghibli, find the perfect colors to express your vision.
            </p>
          </div>
        </div>

        <!-- Creative Inspiration -->
        <div class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Spark Creativity ✨
            </h2>
            <p class="text-lg text-slate-300">
              Break free from creative blocks with palettes that capture the essence of beloved anime worlds. Perfect for web design, illustrations, and digital art.
            </p>
          </div>
        </div>

        <!-- Easy Integration -->
        <div class="bg-slate-800/30 p-8 rounded-xl backdrop-blur-sm border border-slate-700/30">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Simple to Use 🚀
            </h2>
            <p class="text-lg text-slate-300">
              Copy color codes with a single click. Each palette comes with HEX codes ready to use in your favorite design tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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

useSeoMeta({
  title: "Anime Color Palettes | Design with Anime-Inspired Colors",
  ogTitle: "Anime Color Palettes | Design with Anime-Inspired Colors",
  description:
    "Discover beautiful color palettes inspired by your favorite anime! From Naruto to Studio Ghibli, find the perfect colors for your next design project.",
  ogDescription:
    "Discover beautiful color palettes inspired by your favorite anime! From Naruto to Studio Ghibli, find the perfect colors for your next design project.",
  twitterCard: "summary_large_image",
});
</script>
