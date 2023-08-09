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
    <p>{{ password }}</p>
    <p v-if="!isDataLoaded">Loading animewords....</p>
    <p v-if="isGenerating">Generating...</p>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
import { ref, watch } from "vue";

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

// Password generation functions
const leetMapping = {
  a: "4",
  e: "3",
  i: "1",
  o: "0",
  s: "$",
  t: "7",
  l: "|",
};

function toLeetSpeak(str) {
  return str
    .split("")
    .map((char) => {
      return leetMapping[char.toLowerCase()] || char;
    })
    .join("");
}

function capitalizeFirstLetter(string) {
  if (!string || typeof string !== "string") return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generatePassword(
  numWords = 3,
  useLeet = true,
  useEnhancements = false,
  useHyphens = true
) {
  let generatedPassword = "";
  let availableWords = [...words]; // Create a copy of the words array to manipulate

  for (let i = 0; i < numWords; i++) {
    if (availableWords.length === 0) {
      console.warn("No more unique words available.");
      break; // Exit the loop if no more unique words are available
    }

    const randomIndex = Math.floor(Math.random() * availableWords.length);
    let word = capitalizeFirstLetter(availableWords[randomIndex]);
    if (useLeet) {
      word = toLeetSpeak(word);
    }
    generatedPassword += word;
    if (useHyphens && i < numWords - 1) {
      generatedPassword += "-";
    }

    // Remove the selected word from the available words
    availableWords.splice(randomIndex, 1);
  }

  if (useEnhancements) {
    generatedPassword = randomUppercase(generatedPassword);
    //generatedPassword = shuffleString(generatedPassword);
    generatedPassword =
      getRandomNumber() + generatedPassword + getRandomSpecialCharacter();
  }

  return generatedPassword;
}

function getRandomSpecialCharacter() {
  const specialChars = "!@#$%^&*()_+{}[]:;<>,.?~";
  return specialChars[Math.floor(Math.random() * specialChars.length)];
}

function randomUppercase(str) {
  return str
    .split("")
    .map((char) => {
      return Math.random() > 0.5 ? char.toUpperCase() : char;
    })
    .join("");
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10).toString(); // returns a number between 0 and 9 as a string
}

function shuffleString(str) {
  const arr = str.split("");
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements
  }
  return arr.join("");
}

watch(selectedTheme, () => {
  fetchWordsFromSupabase();
});

const generate = async () => {
  isGenerating.value = true;

  await fetchWordsFromSupabase();

  if (isDataLoaded.value) {
    password.value = generatePassword(
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
