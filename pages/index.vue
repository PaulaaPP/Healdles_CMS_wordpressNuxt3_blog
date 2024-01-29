<script lang="ts" setup>
import { ref } from "vue";
// const { data: posts } = await useWpApi().getPosts<any>();
const response = await useWpApi().getPosts<any>();
const posts = ref(response.data || []);
const lastThreePosts = ref(posts.value.slice(0, 3));
</script>

<template>
  <Header>
    <div class="flex-wrap">
      <!-- Image -->
      <img
        class="mx-auto w-5/12 rounded-[2.5rem] opacity-70 md:float-left md:w-1/6 md:px-5"
        src="../assets/img/myfoto3dsmall.png"
      />
      <!-- Text -->
      <h2 class="mt-10 text-center text-3xl italic md:text-start">
        Hello, I'm Paula!
      </h2>
      <p class="p-2 text-base italic text-gray-900 sm:text-xs">
        I am a novice front-end developer
      </p>
      <div class="text-sm lg:text-lg">
        <p class="py-2 text-lg">
          As a self-taught programmer and a firm believer that commitment,
          effort and determination make it possible to achieve success in any
          field.
        </p>
        <p class="py-2 text-lg">
          On my blog, I mainly focus on web technologies, but I will also share
          personal experiences and the story of of my own journey in learning
          programming. I want to create a place, that will support beginners,
          helping them overcome difficulties on the fascinating path of learning
          programming.
        </p>
      </div>
    </div>
  </Header>
  <!-- Newest posts -->
  <section class="container my-16">
    <h2 class="mt-8 text-3xl font-bold">Recent posts</h2>
    <div class="grid gap-10 pt-8 md:mx-5 md:grid-cols-3">
      <Card
        v-for="(post, index) in lastThreePosts"
        :key="index"
        :title="post.title.rendered"
        :excerpt="post.excerpt.rendered"
        :image="post._embedded['wp:featuredmedia']?.[0]?.source_url"
        :slug="post.slug"
      >
      </Card>
    </div>
  </section>
</template>
