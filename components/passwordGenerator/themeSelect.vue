<template>
  <div>
    <label class="flex items-center">
      Select anime:
      <select class="bg-purple-600/20 ml-2 p-3 rounded-md" :value="selectedTheme" @input="updateValue">
        <option value="all">All Animes</option>
        <option value="naruto">Naruto</option>
        <option value="aot">Attack on Titan</option>
        <option value="jujutsukaisen">Jujutsu Kaisen</option>
        <option value="dragonball">Dragon Ball</option>
        <!-- Add more themes as needed -->
      </select>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    selectedTheme: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("update:selectedTheme", event.target.value);
    },
  },
};
</script>
