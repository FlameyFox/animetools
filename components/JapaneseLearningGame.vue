<template>
  <div class="game-container text-center max-w-3xl mx-auto">
    <h1 class="text-4xl mb-8">Japanese Learning Game</h1>

    <div class="flex items-center justify-center gap-8 mt-8">
      <!-- Type selection dropdown -->
      <div class="type-filter mb-8">
        <label for="type-select" class="mr-2">Choose what to practice:</label>
        <select
          class="bg-purple-600/20 p-3 rounded-md"
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
      <div class="translation-mode-switch mb-8">
        <label for="translation-mode" class="mr-2">Practice:</label>
        <select
          class="bg-purple-600/20 p-3 rounded-md"
          id="translation-mode"
          v-model="translationMode">
          <option value="translation">Direct Translation</option>
          <option value="romaji">Romaji</option>
        </select>
      </div>
    </div>

    <!-- Display current Japanese character/word -->
    <div v-if="currentItem" class="mt-5 game-box">
      <h2 class="text-3xl px-6 py-4 rounded-lg bg-purple-500/50 w-max mx-auto">
        {{ currentItem.japanese }}
      </h2>

      <div class="flex items-center gap-4 mt-8">
        <!-- Input field for user to guess the translation -->
        <input
          v-model="userInput"
          type="text"
          @keyup.enter="submitAnswer"
          :placeholder="
            translationMode === 'translation'
              ? 'Enter the meaning'
              : 'Enter the romaji'
          "
          class="bg-purple-600/20 p-5 text-md md:text-xl rounded-lg w-full" />
        <button
          @click="submitAnswer"
          class="ml-auto my-4 bg-purple-600 py-4 px-8 text-lg rounded-xl">
          Submit
        </button>
      </div>
    </div>

    <!-- Feedback to the user -->
    <div v-if="feedback" class="feedback mt-4">
      <p>{{ feedback }}</p>
    </div>

    <!-- Score tracking -->
    <div class="score flex gap-2 max-auto justify-center mt-8">
      <p class="bg-teal-500/30 py-1 px-2 rounded">
        Correct: {{ score.correct }}
      </p>
      <p class="bg-pink-500/30 py-1 px-2 rounded">
        Incorrect: {{ score.incorrect }}
      </p>
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
