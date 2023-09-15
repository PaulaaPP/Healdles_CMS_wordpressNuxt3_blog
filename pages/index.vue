<script lang="ts" setup>
import { ref } from "vue";
// const { data: posts } = await useWpApi().getPosts<any>();
const response = await useWpApi().getPosts<any>();
const posts = ref(response.data || []); // Zawrzyj dane w Ref
const lastThreePosts = ref(posts.value.slice(0, 3));
</script>

<template>
  <Header>
    <div class="flex-wrap md:mx-10">
      <!-- Image -->
      <img
        class="float-left w-5/12 rounded-[2.5rem] p-5 opacity-70 md:w-1/6"
        src="../assets/img/myfoto3dsmall.png"
      />
      <!-- Text -->
      <h2 class="mt-10 text-center text-3xl italic md:text-start">
        👋🏻 Witaj, jestem Paula!
      </h2>
      <p class="p-2 text-base italic text-gray-900 sm:text-xs">
        Jestem początkującym frontem developerem
      </p>
      <p class="py-2 text-lg">
        Jako samouk programowania i mocno wierzę, że zaangażowanie, wysiłek i
        determinacja pozwalają osiągnąć sukces w każdej dziedzinie.
      </p>
      <p class="py-2 text-lg">
        Na moim blogu skupiam się głównie na technologiach webowych, ale również
        będę dzielić się osobistymi doświadczeniami oraz historią mojej własnej
        drogi w nauce programowania. Chcę stworzyć miejsce, które będzie
        wspierać początkujących, pomagając im pokonać trudności na fascynującej
        ścieżce nauki programowania.
      </p>

      <h4 class="mt-5 text-gray-700">
        <Icon name="circle-flags:en" class="text-xl"></Icon>
        Do you prefer the English language ? No problem ! I always publish my
        articles on platforms such as DEV.to and on my LinkedIn profile.
      </h4>
    </div>
  </Header>
  <!-- Newest posts -->
  <section class="container my-16">
    <h2 class="mt-8 text-3xl font-bold">Ostanio dodane posty</h2>
    <div class="grid gap-10 pt-8 md:grid-cols-3">
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
