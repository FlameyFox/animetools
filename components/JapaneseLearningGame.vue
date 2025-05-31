<template>
  <div class="max-w-3xl mx-auto space-y-8">
    <!-- Controls -->
    <div class="flex flex-col md:flex-row items-center justify-center gap-6">
      <!-- Type selection -->
      <div class="relative w-full md:w-auto">
        <label for="type-select" class="block text-sm text-slate-400 mb-2">Practice Type</label>
        <select
          class="w-full md:w-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          id="type-select"
          v-model="selectedType"
          @change="onTypeChange">
          <option value="all">All Types</option>
          <option value="letter">Letters</option>
          <option value="word">Words</option>
          <option value="sentence">Sentences</option>
        </select>
      </div>

      <!-- Translation mode switch -->
      <div class="relative w-full md:w-auto">
        <label for="translation-mode" class="block text-sm text-slate-400 mb-2">Practice Mode</label>
        <select
          class="w-full md:w-auto bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
          id="translation-mode"
          v-model="translationMode">
          <option value="translation">Direct Translation</option>
          <option value="romaji">Romaji</option>
        </select>
      </div>
    </div>

    <!-- Game Content -->
    <div v-if="currentItem" class="space-y-8">
      <!-- Japanese Character Display -->
      <div class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 text-center">
        <h2 class="text-4xl md:text-5xl bg-gradient-to-r from-purple-300 to-pink-300 text-transparent bg-clip-text font-bold">
          {{ currentItem.japanese }}
        </h2>
      </div>

      <!-- Input Area -->
      <div class="space-y-4">
        <input
          v-model="userInput"
          type="text"
          @keyup.enter="submitAnswer"
          :placeholder="translationMode === 'translation' ? 'Enter the meaning' : 'Enter the romaji'"
          class="w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-4 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all" />
        
        <button
          @click="submitAnswer"
          class="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium rounded-lg transition-all">
          Submit
        </button>
      </div>

      <!-- Feedback -->
      <div v-if="feedback" class="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4">
        <p class="text-lg text-center">{{ feedback }}</p>
      </div>

      <!-- Score -->
      <div class="flex justify-center gap-4">
        <div class="bg-green-500/20 backdrop-blur-sm border border-green-500/30 px-6 py-2 rounded-lg">
          <p class="text-green-400">Correct: {{ score.correct }}</p>
        </div>
        <div class="bg-red-500/20 backdrop-blur-sm border border-red-500/30 px-6 py-2 rounded-lg">
          <p class="text-red-400">Incorrect: {{ score.incorrect }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

// Initialize supabase client
const supabase = useSupabaseClient();

// Reactive data
const currentItem = ref(null);
const userInput = ref("");
const feedback = ref("");
const score = ref({ correct: 0, incorrect: 0 });
const selectedType = ref("letter"); // Default to 'letter' types
const translationMode = ref("romaji"); // Default to romaji mode (can switch to 'direct translation')

// Function to fetch a random item based on selected type
const fetchRandomItem = async () => {
  let query = supabase.from("japanese_data").select("*");

  // Filter by selected type if it's not 'all'
  if (selectedType.value !== "all") {
    query = query.eq("type", selectedType.value);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
  } else if (data && data.length > 0) {
    // Randomly select an item from the filtered data
    const randomIndex = Math.floor(Math.random() * data.length);
    currentItem.value = data[randomIndex];
    feedback.value = ""; // Clear feedback
    userInput.value = ""; // Reset input field
  }
};

// Function to handle answer submission
const submitAnswer = () => {
  let correctAnswer = "";
  if (translationMode.value === "translation") {
    correctAnswer = currentItem.value.translation.toLowerCase();
  } else {
    correctAnswer = currentItem.value.romaji.toLowerCase();
  }

  const userAnswer = userInput.value.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedback.value = "Correct! ✨";
    score.value.correct += 1;
  } else {
    feedback.value = `Incorrect! The correct answer was "${correctAnswer}".`;
    score.value.incorrect += 1;
  }

  // Show feedback for 1 second before fetching the next item
  setTimeout(() => {
    fetchRandomItem();
  }, 2000);
};

// Refresh the word when type changes
const onTypeChange = () => {
  fetchRandomItem();
};

// Fetch initial data when component is mounted
onMounted(() => {
  fetchRandomItem();
});
</script>
