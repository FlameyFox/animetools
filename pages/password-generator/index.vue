<template>
  <div>
    <div
      class="max-w-[90vw] md:max-w-6xl mx-auto p-8 md:py-12 md:px-16 rounded-2xl bg-slate-900 mt-20 md:mt-32 shadow-2xl shadow-purple-600/50">
      <h1 class="text-center text-3xl md:text-6xl mb-8">
        Anime Password Generator
      </h1>
      <div class="flex md:flex-row flex-col gap-4 md:gap-8">
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
      <div class="flex md:flex-row flex-col gap-4 md:gap-8 my-4">
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
      <div class="min-h-[30px] mt-1">
        <p v-if="!isDataLoaded" class="text-purple-300 text-lg">
          Loading animewords....
        </p>
      </div>
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
    </div>
    <div
      class="mt-24 md:mt-32 max-w-[90vw] md:ax-w-7xl mx-auto bg-slate-800/40 mb-32 p-12 rounded-lg">
      <h2 class="text-4xl mb-4">Merging Anime Magic with Cybersecurity ✨</h2>
      <p>
        Hello anime enthusiast! If you've ever been vexed by forgettable
        passwords, we've got a solution that's not just robust but also
        resonates with your love for anime.
      </p>
      <h3 class="text-2xl mt-8 mb-2">Why Choose Anime-Inspired Passwords?</h3>
      <strong>1. Distinctive & Dynamic:</strong>
      <p>
        With the vast universe of anime characters, iconic phrases, and
        unforgettable moves, these passwords stand out, making them hard for
        intruders to guess.
      </p>
      <strong class="mt-2 block">2. Easier to Recall:</strong>
      <p>
        Rather than deciphering cryptic combinations, imagine a password
        inspired by your favorite anime moment. Memorable, right?
      </p>
      <strong class="mt-2 block">3. A Personal Touch:</strong>
      <p>
        Secure your digital spaces with passwords that hold a special place in
        your heart, blending utility with a touch of nostalgia.
      </p>
      <h3 class="text-2xl mt-8 mb-2">Here's How to Dive In</h3>
      <p>
        Simply choose a specific anime or opt for a mix of all of them. The
        generator will work its magic, blending elements from selected themes to
        craft the perfect password. Whether you're a "One Piece" fanatic or have
        a soft spot for "My Neighbor Totoro", there's something for everyone.
      </p>
      <h3 class="text-2xl mt-8 mb-2">
        Level Up Your Cybersecurity with Anime Panache
      </h3>
      <p>
        In today's digital era, a strong password is non-negotiable. But who
        said it can't be fun and personalized? With this generator, not only do
        you strengthen your online barriers, but you also do so with a touch of
        anime elegance.
      </p>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "animetools.io - Password Generator",
  ogTitle: "animetools.io - Password Generator",
  description:
    "Anime-inspired password generator: Combine your favorite anime names and phrases to create strong, memorable passwords. Elevate your online security with a unique anime twist!",
  ogDescription:
    "Anime-inspired password generator: Combine your favorite anime names and phrases to create strong, memorable passwords. Elevate your online security with a unique anime twist!",
  twitterCard: "summary_large_image",
});

const supabase = useSupabaseClient();
import { ref, watch, computed } from "vue";
import {
  generatePassword,
  evaluatePasswordStrength,
} from "~/utils/passwordUtils";

const isDataLoaded = ref(false);
let words = [];

const numWords = ref(3); // Default to 3 words
const wordCounts = Array.from({ length: 8 }, (_, i) => i + 3); // This will create an array [3, 4, 5, ..., 10]

const useLeet = ref(false);
const useEnhancements = ref(false);
const useHyphens = ref(true);

const selectedTheme = ref("all"); // default to all

const fetchWordsFromSupabase = async () => {
  isDataLoaded.value = false;
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

const password = ref("");

await fetchWordsFromSupabase();

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
  if (!words) {
    await fetchWordsFromSupabase();
  }

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
};

generate();
</script>
