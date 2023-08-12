<template>
  <div class="flex items-center gap-4 mt-8">
    <div class="bg-purple-600/20 py-5 px-7 text-2xl rounded-lg w-full">
      {{ password }}
    </div>
    <button
      class="w-24 min-h-full self-stretch px-4 transition-all rounded-lg bg-purple-600 text-center text-md"
      @click="copyToClipboard">
      {{ btnLabel }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    password: String,
  },
  data() {
    return {
      btnLabel: "Copy",
    };
  },
  methods: {
    copyToClipboard() {
      if (this.password) {
        navigator.clipboard
          .writeText(this.password)
          .then(() => {
            console.log("Password copied to clipboard!");

            // Update button label
            this.btnLabel = "Copied";

            // Reset after 3 seconds
            setTimeout(() => {
              this.btnLabel = "Copy";
            }, 3000);
          })
          .catch((err) => {
            console.error("Could not copy password: ", err);
          });
      }
    },
  },
};
</script>

<style>
/* Any related styles */
</style>
