<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="hero flex flex-col bg-gray-200 py-10">
    <div class="container flex items-center">
      <!-- v-if is for not showing empty tag -->
      <h1 v-if="title" class="text-4xl font-bold">{{ title }}</h1>

      <!-- this is header form index.vue and will be displayed if there is no other header-->
      <slot />
    </div>
  </section>
</template>
