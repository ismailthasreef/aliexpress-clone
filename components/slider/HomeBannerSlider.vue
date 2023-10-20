<template>
  <div class="h-[440px] max-w-[1200px] mx-auto border-4 -mt-5">
    <swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="1"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <swiper-slide v-for="slide in 2" :key="slide">
            <img src="https://picsum.photos/1200/440?image=193" :alt="slide.slide" size="440" class="object-fill">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>
