<script lang="ts" setup>
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="relative m-8 space-y-4">
    <section class="hero flex flex-col rounded-lg bg-gray-200 py-10">
      <div class="container flex items-center">
        <!-- colored blur lights  start-->
        <div>
          <div
            class="animation-delay-4000 absolute -left-4 top-0 h-24 w-24 animate-lights rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter lg:h-52 lg:w-52"
          ></div>
          <div
            class="animation-delay-3000 absolute -left-20 bottom-[10px] h-24 w-24 animate-lights rounded-full bg-[#87b5bc] opacity-70 mix-blend-multiply blur-xl filter lg:h-52 lg:w-52"
          ></div>
          <div
            class="animation-delay-2000 absolute -right-4 top-0 h-24 w-24 animate-lights rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter lg:h-44 lg:w-44"
          ></div>
          <div
            class="animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-24 w-24 rounded-full bg-[#e2b7df] opacity-70 mix-blend-multiply blur-xl filter lg:h-36 lg:w-36"
          ></div>
        </div>
        <!-- colored blur lights  start-->

        <!-- v-if is for not showing empty tag -->
        <h1 v-if="title" class="text-4xl font-bold">{{ title }}</h1>

        <!-- this is header form index.vue and will be displayed if there is no other header-->
        <slot />
      </div>
    </section>
  </div>
</template>
