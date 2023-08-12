<template>
  <div>
    <div
      class="max-w-6xl mx-auto py-12 px-16 rounded-2xl bg-slate-900 mt-32 shadow-2xl shadow-purple-600/50">
      <div class="flex gap-8">
        <div>
          <label class="flex items-center">
            <input
              class="bg-purple-600/20 mr-2 p-3 rounded-md appearance-none checked:bg-purple-600"
              type="checkbox"
              v-model="useLeet" />
            Use Leet Speak
          </label>
        </div>
        <div>
          <label class="flex items-center">
            <input
              class="bg-purple-600/20 mr-2 p-3 rounded-md appearance-none checked:bg-purple-600"
              type="checkbox"
              v-model="useEnhancements" />
            Use Enhancements
          </label>
        </div>
        <div>
          <label class="flex items-center">
            <input
              class="bg-purple-600/20 mr-2 p-3 rounded-md appearance-none checked:bg-purple-600"
              type="checkbox"
              v-model="useHyphens" />
            Use Hyphens
          </label>
        </div>
      </div>
      <div class="flex gap-8 my-4">
        <div>
          <label class="flex items-center">
            Number of Words:
            <select
              class="bg-purple-600/20 ml-2 p-3 rounded-md"
              v-model="numWords">
              <option
                v-if="wordCounts"
                v-for="count in wordCounts"
                :key="count"
                :value="count">
                {{ count }}
              </option>
            </select>
          </label>
        </div>
        <PasswordGeneratorThemeSelect
          :selectedTheme="selectedTheme"
          @update:selectedTheme="selectedTheme = $event" />
      </div>
      <p v-if="!isDataLoaded">Loading animewords....</p>
      <button
        class="ml-auto my-4 bg-purple-600 py-4 px-8 text-lg rounded-xl"
        @click="generate">
        Generate Password
      </button>
      <PasswordGeneratorPasswordDisplay :password="password" />

      <div
        v-if="password"
        class="rounded-lg p-2 mt-4 w-32 text-sm text-center bg-purple-600/20 transition-all"
        :class="['strength-meter', passwordStrengthClass]">
        {{ passwordStrengthText }}
      </div>
      <p v-if="isGenerating">Generating...</p>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
import { ref, watch, computed } from "vue";
import {
  generatePassword,
  evaluatePasswordStrength,
} from "~/utils/passwordUtils";

const isDataLoaded = ref(false);
const isGenerating = ref(false);
let words = [];

const numWords = ref(3); // Default to 3 words
const wordCounts = Array.from({ length: 8 }, (_, i) => i + 3); // This will create an array [3, 4, 5, ..., 10]

const useLeet = ref(false);
const useEnhancements = ref(false);
const useHyphens = ref(true);

const selectedTheme = ref("all"); // default to all

const fetchWordsFromSupabase = async () => {
  let query = supabase.from("phrases").select("phrase");

  if (selectedTheme.value && selectedTheme.value !== "all") {
    query = query.eq("theme", selectedTheme.value);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching words:", error);
  } else if (data) {
    words = data.map((item) => item.phrase);
    isDataLoaded.value = true;
  }
};

fetchWordsFromSupabase();

const password = ref("");

watch(selectedTheme, () => {
  fetchWordsFromSupabase();
});

const passwordStrengthClass = computed(() =>
  evaluatePasswordStrength(password.value)
);

const passwordStrengthText = computed(() => {
  switch (passwordStrengthClass.value) {
    case "very-strong":
      return "Very Strong";
    case "strong":
      return "Strong";
    case "medium":
      return "Medium";
    case "weak":
      return "Weak";
    default:
      return "Very Weak";
  }
});

const generate = async () => {
  isGenerating.value = true;

  await fetchWordsFromSupabase();

  if (isDataLoaded.value) {
    password.value = generatePassword(
      words,
      numWords.value,
      useLeet.value,
      useEnhancements.value,
      useHyphens.value
    );
  } else {
    console.warn("Data is still loading. Please wait.");
  }

  isGenerating.value = false;
};

generate();
</script>
