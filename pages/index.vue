<script lang="ts" setup>
// const { data: posts } = await useFetch<any>(
//   "http://myblognuxt.local/wp-json/wp/v2/posts?_embed",
// );
// // console.log(data);

const { data: posts } = await useWpApi().getPosts<any>();
</script>

<template>
  <main>
    <Header>
      <!-- image -->
      <div
        class="relative mr-8 h-[200px] w-[500px] overflow-hidden rounded shadow-lg"
      >
        <img
          src="~/assets/img/myfoto3D.png"
          class="absolute h-full w-full object-cover"
          alt="myimage"
        />
      </div>

      <!-- text -->
      <div>
        <h1 class="mb-2 text-4xl font-bold">Paula</h1>
        <p>
          Jako samouk programowania i mocno wierzę, że zaangażowanie, wysiłek i
          determinacja pozwalają osiągnąć sukces w każdej dziedzinie. <br />
          Na moim blogu skupiam się głównie na technologiach webowych, ale
          również będę dzielić się osobistymi doświadczeniami oraz historią
          mojej własnej drogi w nauce programowania. Chcę stworzyć miejsce,
          które będzie wspierać początkujących, pomagając im pokonać trudności
          na fascynującej ścieżce nauki programowania.
        </p>
        <button class="border border-green-900 bg-green-500">
          jakieś linki
        </button>
      </div>
    </Header>
    <!-- Blog Section -->
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
  </main>
</template>

<!--      :image="post._embedded['wp:featuredmedia']?.[0]?.source_url"
['wp:featuredmedia']? -- this with ? if some post doesn't have a source url / image 
[0]? -- this if some post doesn't have id
if only one post doesn't have future images/_embedded/wp:featuredmedia then i will have error ! 
-->
