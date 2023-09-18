<script lang="ts" setup>
const { excerpt = "" } = defineProps<{
  title: string;
  excerpt?: string;
  image?: string;
  slug?: string;
}>();

const truncateExcerpt = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
</script>

<template>
  <NuxtLink :to="`/${slug}`">
    <div class="col-span-1 py-10 shadow-lg">
      <!-- Blog image -->
      <div v-if="image" class="relative h-[200px] w-full">
        <img :src="image" alt="" class="absolute h-full w-full object-cover" />
      </div>
      <!-- Blog conetent -->
      <div class="pb-2 pt-5">
        <h3 class="text-base font-semibold">
          {{ title }}
        </h3>
        <!-- <p v-if="excerpt" class="mb-3 text-sm">
        {{ excerpt }}
      </p> -->
        <div v-html="truncateExcerpt(excerpt, 100)"></div>
      </div>
      <span class="mx-3 flex justify-end text-base font-bold"
        >Czytaj dalej</span
      >
    </div>
  </NuxtLink>
</template>
