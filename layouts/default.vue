<template>
  <div class="bg-slate-900 text-gray-200">
    <theHeader />
    <nuxtPage class="min-h-screen" />
    <theFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.35s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
