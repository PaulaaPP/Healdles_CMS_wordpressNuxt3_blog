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
    <div
      class="col-span-1 h-full rounded-lg py-10 shadow-xl transition-transform duration-300 ease-in-out hover:scale-95 hover:transform"
    >
      <!-- Blog image -->
      <div v-if="image" class="relative h-[200px] w-full">
        <img
          :src="image"
          alt=""
          class="absolute h-full w-full rounded-lg object-cover"
        />
      </div>

      <!-- Blog conetent -->
      <div class="mx-1 pb-2 pt-5">
        <h3 class="text-base font-semibold">
          {{ title }}
        </h3>
        <!-- <p v-if="excerpt" class="mb-3 text-sm">
        {{ excerpt }}
      </p> -->
        <div v-html="truncateExcerpt(excerpt, 100)"></div>
      </div>
      <span class="mx-3 flex justify-end text-base font-bold">Read more</span>
    </div>
  </NuxtLink>
</template>
