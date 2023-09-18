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
        class="bg-lightGreen hover:bg-emeraldGreen m-4 block rounded px-4 py-3 font-bold text-white"
        >#{{ category.name }}</NuxtLink
      >
    </div>
  </section>
</template>
