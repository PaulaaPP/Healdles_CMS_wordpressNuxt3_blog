<script lang="ts" setup></script>

<template>
  <Header title="Category index /home" />
  <section class="container py-10">
    <div class="flex flex-wrap">
      <NuxtLink
        v-for="i in 25"
        :key="i"
        to="/categories/123"
        class="m-4 block rounded bg-green-200 px-4 py-3 hover:bg-green-500"
        >#Kategorie{{ i }}</NuxtLink
      >
    </div>
  </section>
</template>
