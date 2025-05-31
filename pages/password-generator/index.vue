<template>
  <div class="min-h-screen bg-slate-900">
    <!-- Background gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-slate-900 to-slate-900 pointer-events-none"></div>

    <!-- Content -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      <!-- Title Section -->
      <div class="text-center mb-12 md:mb-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
          Anime Password Generator
        </h1>
        <p class="text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
          Create secure passwords with an anime twist. Generate unique passwords inspired by anime characters and themes.
        </p>
      </div>

      <!-- Main Content -->
      <div class="max-w-2xl mx-auto">
        <div class="space-y-6 md:space-y-8">
          <!-- Theme Selection -->
          <div>
            <h2 class="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Choose Theme
            </h2>
            <ThemeSelect 
              :selected-theme="selectedTheme"
              @update:selected-theme="handleThemeChange" 
            />
          </div>

          <!-- Password Display -->
          <div>
            <PasswordDisplay 
              :words="words"
              :is-loading="!isDataLoaded"
              :error="errorMessage"
            />
          </div>

          <!-- Tips Section -->
          <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 md:p-6">
            <h3 class="text-xl font-semibold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text">
              Password Tips 🔐
            </h3>
            <ul class="grid md:grid-cols-2 gap-4 text-slate-300">
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">•</span>
                <span>Your password includes references to anime characters and terms</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">•</span>
                <span>All passwords are generated client-side for security</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">•</span>
                <span>Use the theme selector to get passwords from your favorite series</span>
              </li>
              <li class="flex items-start">
                <span class="text-purple-400 mr-2">•</span>
                <span>Perfect for creating memorable yet secure passwords!</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSupabaseClient } from '#imports';
import ThemeSelect from '~/components/passwordGenerator/themeSelect.vue'
import PasswordDisplay from '~/components/passwordGenerator/passwordDisplay.vue'

useSeoMeta({
  title: "Anime-Themed Password Generator | Create Secure, Fun Passwords",
  ogTitle: "Anime-Themed Password Generator | Create Secure, Fun Passwords",
  description: "Generate secure passwords with an anime twist! Our unique password generator combines strong security with your favorite anime references. Perfect for otaku who want both security and style.",
  ogDescription: "Generate secure passwords with an anime twist! Our unique password generator combines strong security with your favorite anime references. Perfect for otaku who want both security and style.",
  keywords: "anime password generator, secure password creator, otaku password tool, anime themed passwords, Naruto password generator, Attack on Titan passwords",
  twitterCard: "summary_large_image",
  ogType: "website",
  robots: "index, follow",
});

// State
const supabase = useSupabaseClient();
const isDataLoaded = ref(false);
const errorMessage = ref('');
const words = ref([]);
const selectedTheme = ref('all');

// Methods
const handleThemeChange = async (newTheme) => {
  selectedTheme.value = newTheme;
  await fetchWordsFromSupabase();
};

const fetchWordsFromSupabase = async () => {
  isDataLoaded.value = false;
  errorMessage.value = '';
  
  try {
    let query = supabase.from("phrases").select("phrase");

    if (selectedTheme.value && selectedTheme.value !== "all") {
      query = query.eq("theme", selectedTheme.value);
    }

    const { data, error } = await query;

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      words.value = data.map((item) => item.phrase);
    } else {
      throw new Error('No words found for the selected theme');
    }
  } catch (error) {
    console.error("Error fetching words:", error);
    errorMessage.value = error.message || 'Failed to load anime words';
    words.value = [];
  } finally {
    isDataLoaded.value = true;
  }
};

// Initial fetch
await fetchWordsFromSupabase();
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
