<template>
  <Header />
  <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]">
    <slot name="banner">
      <HomeBannerSlider />
      <CategoryHolder/>
    </slot>
    <slot name="featured" />
    <slot name="hot" />
    <slot name="best" />
  </div>
  <Footer />
</template>

<!-- 2b9UnsffAxdgtlmm -->
<!-- supabase server project password -->

<script setup>
import { useUserStore } from "~/stores/user";
import HomeBannerSlider from "~/components/slider/HomeBannerSlider.vue";
import Loading from "~/components/Loading.vue";
import Header from "~/components/global/Header.vue";
import Footer from "~/components/Footer.vue";
import CategoryHolder from '~/components/categories/CategoryHolder.vue'

const userStore = useUserStore();
let isAccountMenu = ref(false);
let searchItem = ref("");
let isSearching = ref(true);
let isCartHover = ref(false);
</script>

<style lang="scss" scoped>
.border-out-1 {
  border: 1px solid red;
}

.border-out-2 {
  border: 1px solid rgb(88, 3, 180);
}
</style>
