<template>
    <div>
      <div>
        <label>
          <input type="checkbox" v-model="useLeet" /> Use Leet Speak
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="useEnhancements" /> Use Enhancements
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="useHyphens" /> Use Hyphens
        </label>
      </div>
      <div>
        <label>
          Number of Words:
          <select v-model="numWords">
            <option v-for="count in wordCounts" :key="count" :value="count">
              {{ count }}
            </option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Theme:
          <select v-model="selectedTheme">
            <option value="" selected>All Themes</option>
            <option value="naruto">Naruto</option>
            <option value="aot">Attack on Titan</option>
            <!-- Add more themes as needed -->
          </select>
        </label>
      </div>
    <button @click="generate">Generate Password</button>
    <PasswordGeneratorPasswordDisplay :password="password" />
    <p v-if="!isDataLoaded">Loading animewords....</p>
    <p v-if="isGenerating">Generating...</p>
    <div
      v-if="!isGenerating && password"
      :class="['strength-meter', passwordStrengthClass]">
      {{ passwordStrengthText }}
    </div>
    <button @click="copyToClipboard">Copy to Clipboard</button>
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

const selectedTheme = ref("");

const fetchWordsFromSupabase = async () => {
  let query = supabase.from("phrases").select("phrase");

  if (selectedTheme.value) {
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

const copyToClipboard = () => {
  navigator.clipboard
    .writeText(password.value)
    .then(() => {
      console.log("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Could not copy password: ", err);
    });
};

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
</script>

<style scoped>
.strength-meter {
  height: 20px;
  width: 200px;
  border: 1px solid #000;
  text-align: center;
  color: #fff;
}

.strength-meter.very-weak {
  background-color: red;
}

.strength-meter.weak {
  background-color: orange;
}

.strength-meter.medium {
  background-color: yellow;
  color: #000; /* Text color changed for better visibility */
}

.strength-meter.strong {
  background-color: lightgreen;
  color: #000; /* Text color changed for better visibility */
}

.strength-meter.very-strong {
  background-color: green;
}
</style>
