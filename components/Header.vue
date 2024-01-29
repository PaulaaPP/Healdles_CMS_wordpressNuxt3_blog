<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="relative m-8 space-y-4">
    <!--div for glass design-->
    <div
      class="transparent absolute inset-0 rounded-lg border-2 opacity-25"
    ></div>

    <!-- Section content-->
    <section
      class="relative z-10 flex flex-col rounded-lg bg-white/30 py-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] backdrop-blur-md"
    >
      <div class="container flex items-center">
        <!--The v-if condition checks whether a title is set -->
        <h1 v-if="title" class="text-4xl font-bold">{{ title }}</h1>
        <!-- This part will be displayed if there is no other heading-->
        <slot />
      </div>
    </section>
  </div>
</template>
