<template>
  <div class="min-h-screen text-white relative overflow-x-hidden bg-slate-900">
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-slate-900/90 to-slate-900"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/5 to-transparent"></div>
    </div>
    <div class="relative z-10">
      <TheHeader />
      <div class="pt-28">
        <nuxtPage class="min-h-[60vh]" />
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '~/components/global/theHeader.vue'
import TheFooter from '~/components/global/theFooter.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.175s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
nav .router-link-active {
  position: relative;
}
nav .router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: linear-gradient(to right, #d8b4fe, #f0abfc);
  box-shadow: 0 0 8px rgba(216, 180, 254, 0.5);
}
</style>
