<!-- Menu/Nav.vue  === <MenuNav /> name folder and next name components -->

<script setup lang="ts"></script>

<template>
  <nav class="bg-gray-900 py-5 text-white">
    <div class="container flex justify-between">
      <NuxtLink href="" class="logo text-xl font-bold">
        Od Zera do Front-End Developera</NuxtLink
      >

      <ul class="inline-flex gap-3">
        <li><NuxtLink href="/">Home</NuxtLink></li>
        <li><NuxtLink href="/categories">Categories</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>
