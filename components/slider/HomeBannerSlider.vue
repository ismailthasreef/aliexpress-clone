<template>
  <div class="lg:h-[440px] md:h-[180px] max-w-[1200px] mx-auto mt-15">
    <swiper :effect="'fade'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      pagination : true,
      slideShadows: true,
    }" :autoplay="{
  delay: 100,
  disableOnInteraction: true,
}" :modules="modules" class="mySwiper">
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <div class="swiper-image">
          <img :src="slide.img" alt="Slide Image" />
          <div class="swiper-pagination"></div>
        </div>
        <div class="flex row w-auto p-2 absolute top-40 left-10 z-10">
            <div class="banner-text flex flex-col">
              <span class="bg-red-600 px-2 py-1 text-white mb-1 text-sm">
                {{ slide.offerTitle }}
              </span>
              <span class="text-3xl font-bold uppercase mb-1 text-white">Electronics Booming offer</span>
              <span class="text-sm text-gray-400">Ultimate offer on electronics and gadgets! shop now and get more
                points</span>
            </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const slides = [
  {
    name: "Slide 1",
    img: "https://picsum.photos/1200/440?image=194",
    offerTitle: "NEW YEAR OFFER",
  },
  {
    name: "Slide 2",
    img: "https://picsum.photos/1200/440?image=195",
    offerTitle: "NEW YEAR OFFER2",
  },
  {
    name: "Slide 3",
    img: "https://picsum.photos/1200/440?image=196",
    offerTitle: "NEW YEAR OFFER3",
  },
];

</script>

<style lang="scss" scoped>
.headline {
  font-family: "poppins";
  font-weight: 800 !important;
}

.swiper-image {
  position: relative;
}

.swiper-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.777);
  z-index: 1;
  pointer-events: none;
}
</style>
