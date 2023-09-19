<!-- blog=== categories -->

<script setup lang="ts">
const route = useRoute();

// Get Categfory ID
const { data: categories } = await useWpApi().get<any>(
  `categories?slug=${route.params.slug}`,
);
//  Get Post Related to category ID
const { data: posts } = await useWpApi().getPosts<any>(categories.value[0].id);
</script>

<template>
  <!-- dynamically displays the category name-->
  <Header :title="` ${categories[0].name}`" />
  <section class="container py-10 md:mx-10">
    <div class="grid gap-5 sm:grid-cols-3">
      <Card
        v-for="post in posts"
        :key="post.id"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :image="post._embedded['wp:featuredmedia']?.[0]?.source_url"
        :slug="post.slug"
      >
      </Card>
    </div>
    <button class="text-1xl my-20 rounded-md bg-lightGreen p-5 font-semibold">
      <NuxtLink to="/categories">Powrót</NuxtLink>
    </button>
  </section>
</template>
