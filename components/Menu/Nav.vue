<!-- Menu/Nav.vue  === <MenuNav /> name folder and next name components -->

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const route = useRoute();

const navigation = [
  { name: "Home", href: "/", current: route.name == "index" },
  { name: "Blog", href: "/blog", current: route.name.includes("blog") },
  {
    name: "Categories",
    href: "/categories",
    current: route.name.includes("categories"),
  },
  { name: "Contact", href: "/contact", current: route.name == "contact" },
];
</script>

<template>
  <Disclosure as="nav" class="navbar-gradient" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-3 text-teal-200 hover:bg-darkGreen hover:text-teal-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightGreen"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div
            class="mx-[7.5rem] flex flex-shrink-0 items-center text-sm font-bold md:mx-2 md:text-base"
          >
            <nuxt-link to="/" class="text-brightGreen"
              ><span class="text-brightPurple">From Zero to</span> Front-End
              Hero
            </nuxt-link>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-[#156973] text-brightPurple'
                    : 'text-gray-300 hover:bg-[#156973] hover:text-white',
                  'rounded-md px-3 py-2 text-base font-semibold md:text-lg',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-lightGreen text-white'
              : 'text-brightPurple hover:bg-[#156973] hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
