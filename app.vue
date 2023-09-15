<template>
  <div class="flex min-h-screen flex-col">
    <MenuNav />
    <main class="w-full grow items-start">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<style>
.container {
  @apply mx-auto max-w-5xl px-10 sm:px-0;
}
</style>
