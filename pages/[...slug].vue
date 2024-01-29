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
        <div class="post-title my-10 text-center">
          <h1 class="text-3xl font-bold leading-normal md:text-5xl">
            {{ post.title.rendered }}
          </h1>
        </div>
        <!-- post meta -->
        <div class="post-meta text-center">
          <span class="mx-3"
            >Written by: {{ post._embedded["author"][0].name }}</span
          >
          <p>Published on: {{ new Date(post.date).toLocaleDateString() }}</p>
        </div>
        <!-- post image -->
        <div
          class="post_img relative mx-auto mb-12 h-[250px] w-full overflow-hidden rounded shadow-xl sm:h-[500px]"
        >
          <img
            :src="post._embedded['wp:featuredmedia']?.[0]?.source_url"
            alt="post.title.rendered"
            class="absolute h-full w-full object-cover"
          />
        </div>
        <!-- post Content -->
        <div class="blog_content mx-3">
          <div>
            <div v-html="post.content.rendered" class="item-center"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.post-meta {
  font-weight: bold;
  margin: 5px 0;
}

.blog_content h2 {
  font-size: 25px;
  font-weight: 900;
  margin: 18px 0;

  @media (max-width: 768px) {
    font-size: 15px;
    margin: 12px 0;
  }
}
.blog_content h3 {
  font-size: 20px;
  font-weight: 700;
  margin: 18px 0;
}
.blog_content p {
  margin: 7px 0;
}

.blog_content figure img {
  margin: 25px 0;
  height: 100%;
  width: 88%;
}
figure {
  justify-content: center;
  display: flex;
}

.blog_content ol {
  list-style-type: decimal;
  margin: 0 7px;
}
.blog_content li {
  margin: 7px 0;
  padding: 10px;
}
</style>
