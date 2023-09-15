<script setup lang="ts">
const { data: posts } = await useWpApi().getPosts<any>();
</script>

<template>
  <Header title="Blog" />
  <div>strona blogowa</div>
  <section class="container">
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
  </section>
</template>
<!--      :image="post._embedded['wp:featuredmedia']?.[0]?.source_url"
['wp:featuredmedia']? -- this with ? if some post doesn't have a source url / image 
[0]? -- this if some post doesn't have id
if only one post doesn't have future images/_embedded/wp:featuredmedia then i will have error ! 
-->
