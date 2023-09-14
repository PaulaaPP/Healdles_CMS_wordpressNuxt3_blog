<script lang="ts" setup>
const { data: categories } = await useWpApi().getCategories<any>();
</script>

<template>
  <Header title="Category index /home" />
  <section class="container py-10">
    <div class="flex flex-wrap">
      <NuxtLink
        v-for="category in categories"
        :key="category.id"
        :to="`/categories/${category.slug}`"
        class="m-4 block rounded bg-green-200 px-4 py-3 hover:bg-green-500"
        >#{{ category.name }}</NuxtLink
      >
    </div>
  </section>
</template>
