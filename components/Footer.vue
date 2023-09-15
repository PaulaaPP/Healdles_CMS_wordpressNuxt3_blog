<script setup>
const links = [
  {
    name: "GitHub",
    href: "https://github.com/PaulaaPP?tab=repositories",
    icon: "entypo-social:github-with-circle",
  },

  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/paula-piskorz-a02139283/",
    icon: "entypo-social:linkedin-with-circle",
  },
];
</script>
<template>
  <footer class="navbar-gradient bg-slate-500">
    <section
      class="mx-auto flex max-w-7xl flex-row px-2 py-5 text-gray-300 sm:px-4 lg:py-6"
    >
      <p class="flex-1 text-xs md:text-base">
        &copy; PaulaPiskorz 2023. All Rights Reserved
      </p>
      <a
        v-for="link in links"
        :key="link.name"
        :href="link.href"
        target="_blank"
      >
        <Icon :name="link.icon" size="1.5rem" class="mx-1 text-gray-300" />
      </a>
    </section>
  </footer>
</template>
