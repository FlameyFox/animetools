<template>
  <div>
    <h1>Naruto Characters</h1>
    <ul>
      <li v-for="character in characters" :key="character.id">
        {{ character }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const characters = ref([]);
const error = ref("");

onMounted(async () => {
  try {
    const response = await fetch("/api/naruto");
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const data = await response.json();
    characters.value = data.characters;
    console.log(characters.value); // Log to ensure data is set
  } catch (err) {
    error.value = err.message;
  }
});
</script>
