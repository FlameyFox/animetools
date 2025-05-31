<template>  <div>    <div
      class="max-w-[90vw] md:max-w-6xl mx-auto p-8 md:py-12 md:px-16 mt-32">
      <div class="mb-12">
        <nuxt-link
          to="/color-palettes"
          class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          <span>Back to Palettes</span>
        </nuxt-link>
      </div>
      <h1 v-if="theme" class="text-center text-3xl md:text-6xl mb-8">
        {{ theme.pretty_name }}<br />
        Color Palettes
      </h1>
      <h4 class="text-center">
        Spice up your projects with some anime themed colors
      </h4>
      <div
        v-if="groupedColors && Object.keys(groupedColors).length"
        class="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-16">
        <div          class="p-6 rounded-xl backdrop-blur-sm bg-slate-800/20 border border-slate-700/30"
          v-for="(colorsArray, character) in groupedColors"
          :key="character">
          <div>
            <h3 class="text-2xl font-semibold mb-6 capitalize text-purple-100">
              {{ character }}
            </h3>
            <div class="flex gap-4 flex-wrap">
              <div
                v-for="color in colorsArray"
                :key="color.id"
                class="rounded-lg bg-slate-800/40 p-3 w-full backdrop-blur-sm border border-slate-700/30">
                <div
                  :style="{ backgroundColor: color.hex_color }"
                  class="w-full h-20 rounded-lg color-box"
                  @click="copyToClipboard(color)">
                  <span class="color-copy-text"
                    ><p>
                      {{ recentlyCopied === color.id ? "Copied!" : "Copy" }}
                    </p></span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 class="mt-4 bg-slate-800/40 p-4 rounded-lg text-2xl mx-auto w-fit">
          Colors coming soon!
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";

const supabase = useSupabaseClient();

const theme = ref({});
const loading = ref(false);
const groupedColors = ref({});

onMounted(async () => {
  loading.value = true;

  const route = useRoute();
  const themeName = route.params.theme; // Get the dynamic route parameter "theme"

  const { data, error } = await supabase
    .from("themes")
    .select("*")
    .eq("name", themeName)
    .single(); // Filter the themes based on the "name" column

  if (error) {
    console.error("Error fetching theme:", error);
  } else if (data) {
    theme.value = data;
  }
  if (theme.value) {
    const { data: colorsData, error: colorsError } = await supabase
      .from("colors")
      .select("*")
      .eq("theme", themeName);

    if (colorsError) {
      console.error("Error fetching colors:", colorsError);
    } else if (colorsData) {
      if (colorsData) {
        groupedColors.value = colorsData.reduce((acc, color) => {
          if (!acc[color.character]) {
            acc[color.character] = [];
          }
          acc[color.character].push(color);
          return acc;
        }, {});
      }
    }
  }

  loading.value = false;
});

const recentlyCopied = ref(null);
const copyToClipboard = (color) => {
  navigator.clipboard
    .writeText(color.hex_color)
    .then(() => {
      recentlyCopied.value = color.id; // Set the recentlyCopied to this color's id
      setTimeout(() => {
        recentlyCopied.value = null; // Reset after 2 seconds
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
};

// Watch for changes in the theme and update the SEO meta tags accordingly
watch(theme, (newTheme) => {
  if (newTheme.name) {
    useSeoMeta({
      title: `${newTheme.pretty_name} Color Palettes | Elevate Your Designs with Otaku-Inspired Palettes`,
      ogTitle: `${newTheme.name} Color Palettes | Elevate Your Designs with Otaku-Inspired Palettes`,
      description: `Discover vibrant Anime Color Themes curated for designers and anime enthusiasts alike. Bring a touch of Naruto, Attack on Titan, and more into your projects with our unique color palettes inspired by iconic anime series.`,
      ogDescription: `Discover vibrant Anime Color Themes curated for designers and anime enthusiasts alike. Bring a touch of Naruto, Attack on Titan, and more into your projects with our unique color palettes inspired by iconic anime series.`,
      twitterCard: "summary_large_image",
    });
  }
});
</script>

<style scoped>
.color-box {
  position: relative;
  transition: opacity 0.3s;
}
.color-copy-text {
  position: absolute;
  padding: 5px 10px;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s;
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
}
.color-copy-text p {
  display: block;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  padding: 8px 16px;
  border-radius: 8px;
  opacity: 0;
  transition: all 0.2s ease;
  cursor: pointer;
  z-index: 99;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.color-box:hover .color-copy-text p {
  opacity: 1;
  transform: translateY(-2px);
}
.color-box:hover .color-copy-text {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
