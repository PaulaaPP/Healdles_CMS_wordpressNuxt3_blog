<script setup></script>

<template>
  <main>
    <section class="hero bg-gray-200 py-10">
      <div class="container flex items-center">
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
            Jako samouk programowania i mocno wierzę, że zaangażowanie, wysiłek
            i determinacja pozwalają osiągnąć sukces w każdej dziedzinie. <br />
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
      </div>
    </section>
  </main>
</template>

<style scoped></style>
