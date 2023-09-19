<script lang="ts" setup>
const { data: categories } = await useWpApi().getCategories<any>();
</script>

<template>
  <Header title="Kategorie" />
  <section class="container py-10">
    <div class="flex flex-wrap">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="`/categories/${category.slug}`"
        class="m-4 block rounded bg-lightGreen px-4 py-3 font-bold text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:transform hover:bg-emeraldGreen"
        >#{{ category.name }}</NuxtLink
      >
    </div>
  </section>
</template>
