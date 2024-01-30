<template>
  <div class="flex min-h-screen flex-col">
    <MenuNav />

    <main class="backround-color w-full grow items-start">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<style>
/* dark {
  background-color: #1a202c;
  color: white;
} */
</style>

<!-- <script setup>
import { ref } from "vue";

const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  console.log("Dark mode toggled. New value:", darkMode.value);
};
</script> -->
