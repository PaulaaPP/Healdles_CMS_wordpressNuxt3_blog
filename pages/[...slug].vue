<!-- sinlge post  -->
<!-- replace <any> with your own Types ! -->
<script setup lang="ts">
const { params } = useRoute();

const { data: posts } = await useWpApi().getPost<any>(params.slug as string);
const post = posts.value[0];
</script>

<template>
  <main>
    <section class="header container py-24">
      <div>
        <!-- post title -->
        <div class="post-title mb-3 text-center">
          <h1 class="text-5xl font-bold leading-normal">
            {{ post.title.rendered }}
          </h1>
        </div>
        <!-- post meta -->
        <div class="post-meta text-center">
          <span class="mx-3"
            >Napisane przez: {{ post._embedded["author"][0].name }}</span
          >
          <span>Opublikowane dnia: {{ post.date }} </span>
        </div>
        <!-- post image -->
        <div
          class="relative mx-auto mb-12 h-[250px] w-full overflow-hidden rounded shadow-xl sm:h-[500px]"
        >
          <img
            :src="post._embedded['wp:featuredmedia']?.[0]?.source_url"
            alt="post.title.rendered"
            class="absolute h-full w-full object-cover"
          />
        </div>
        <!-- post Content -->
        <div class="blog_content">
          <div>
            <div v-html="post.content.rendered" class="item-center"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
