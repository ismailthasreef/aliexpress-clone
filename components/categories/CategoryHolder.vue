<template>
  <div class="max-w-[1200px] mx-auto bg-white shadow-sm px-5 py-5 max-h-80">
    <swiper v-bind="swiperConfig" class="mySwiper">
      <swiper-slide v-for="slide in slides" :key="slide.name">
        <div class="swiper-image">
          <img class="h-[130px]" :src="slide.img" alt="Slide Image" loading="lazy" />
          <div class="swiper-lazy-preloader"></div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const swiperConfig = {
  spaceBetween: 16,
  loop: true,
  autoplay: true,
  slidesPerView: 10
};

const slides = [
  {
    name: "Slide 1",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif",
    offerTitle: "NEW YEAR OFFER",
  },
  {
    name: "Slide 2",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/48e7d146-f537-4902-97c1-b43aefacf9e3.png?format=avif",
    offerTitle: "NEW YEAR OFFER2",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/12484ac6-ad98-4fce-bd04-669477ade7ec.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/c2fa27ca-4bcf-4b17-8831-3cfc335575b5.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/fb2f6ce2-419c-40ff-b1cd-77adaabd860d.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/6a06648e-82bb-4ecf-9b25-c82a8a4720b8.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/3dc92161-bbba-4dd6-8732-ea3473a7e0a1.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/f56b3611-5b74-47e5-9261-7ef2db1ecd31.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/0ced82ed-4832-49a6-be3d-7e1001243269.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/84bdd49a-ef1a-404d-98fa-f555b249f96d.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
  {
    name: "Slide 3",
    img: "https://f.nooncdn.com/mpcms/EN0001/assets/e2dd2d4c-3f78-4b27-a909-1e1e4f77635c.png?format=avif",
    offerTitle: "NEW YEAR OFFER3",
  },
];


const onSwiper = (swiper : any) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
</script>

<style lang="scss" scoped></style>
