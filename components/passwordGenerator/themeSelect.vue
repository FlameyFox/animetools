<template>
  <div>
    <label class="flex items-center">
      Theme:
      <select class="bg-purple-600/20 ml-2 p-3 rounded-md" :value="selectedTheme" @input="updateValue">
        <option value="all">All Themes</option>
        <option value="naruto">Naruto</option>
        <option value="aot">Attack on Titan</option>
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
