<script setup lang="ts">
const { data: posts } = await useWpApi().getPosts<any>();
</script>

<template>
  <Header class="">
    <div class="flex flex-col md:mx-10">
      <h1 class="text-4xl font-bold">Blog</h1>
      <p class="mx-5 pt-11 md:indent-8">
        Uwielbiam opowiadać o tym, co właśnie krąży mi po głowie, projekty, nad
        którymi teraz pracuję, lub nowinki technologiczne, które wciąż odkrywam.
        To moje sposobów na wyrażenie siebie i dzielenie się swoimi pasjami.
        Zawsze trafiają się nowe fascynujące rzeczy, które mnie wciągają, i z
        przyjemnością się nimi dzielę w moich tekstach.
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
<!--      :image="post._embedded['wp:featuredmedia']?.[0]?.source_url"
['wp:featuredmedia']? -- this with ? if some post doesn't have a source url / image 
[0]? -- this if some post doesn't have id
if only one post doesn't have future images/_embedded/wp:featuredmedia then i will have error ! 
-->
