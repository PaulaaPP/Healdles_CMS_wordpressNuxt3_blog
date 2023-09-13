<script lang="ts" setup>
defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();
</script>

<template>
  <div class="col-span-1 py-12 shadow-lg">
    <!-- Blog image -->
    <div v-if="image" class="relative h-[200px] w-full">
      <img :src="image" alt="" class="absolute h-full w-full object-cover" />
    </div>
    <!-- Blog conetent -->
    <div class="p-5">
      <h3 class="text-xl font-semibold">
        {{ title }}
      </h3>
      <p v-if="excerpt" class="mb-3 text-sm">
        {{ excerpt }}
      </p>
      <NuxtLink :to="`/${slug}`">Red more</NuxtLink>
    </div>
  </div>
</template>
