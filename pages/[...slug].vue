<!-- sinlge post  -->
<script setup lang="ts">
const { params } = useRoute();
</script>

<template>
  <main>
    <section class="header conitainer py-24">
      <div>
        <!-- post title -->
        <div class="post-title mb-3 text-center">
          <h1 class="text-5xl font-bold leading-normal">
            To jest titlył przykładowy
          </h1>
        </div>
        <!-- post meta -->
        <div class="post-meta text-center">
          <span class="mx-3">napisane by Paula</span>
          <span>opublikowane dnia 12/2/33 </span>
        </div>
        <!-- post image -->
        <div
          class="relative mb-12 h-[250px] w-full overflow-hidden rounded shadow-xl sm:h-[500px]"
        >
          <img
            src="~/assets/img/robotohand.jpg"
            alt="post.title.rendered"
            class="absolute h-full w-full object-cover"
          />
        </div>
        <!-- post Content -->
        <div class="blog__content">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque sint
            officiis esse dignissimos dolores dicta, provident reiciendis
            officia dolore deserunt cupiditate iusto aut architecto sit
            obcaecati eum. Reiciendis, facilis laudantium!
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
