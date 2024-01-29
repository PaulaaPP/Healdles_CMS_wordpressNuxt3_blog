<script setup lang="ts">
const { data: posts } = await useWpApi().getPosts<any>();
</script>

<template>
  <Header>
    <div class="flex flex-col md:mx-10">
      <h1 class="text-4xl font-bold">Blog</h1>
      <p class="pt-11 md:indent-8 lg:mx-5 lg:text-base">
        I love to talk about what's just going around in my head, projects I'm
        working on that I'm working on right now, or technological innovations
        that I'm still discovering. These are my ways of expressing myself and
        sharing my passions. I always find new fascinating things that draw me
        in, and I'm happy to pleasure to share them in my texts.
      </p>
    </div>
  </Header>

  <section class="container">
    <div class="grid gap-5 sm:grid-cols-3 md:mx-5">
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
  </section>
</template>
