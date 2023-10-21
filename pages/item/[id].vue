<template>
    <Header/>
    <div class="lg:pt-[150px] md:pt-[130px] pt-[80px]">
        <div id="itemPage" class="mt-5 max-w-[1200px] mx-auto px-2">
            <div class="md:flex gap-4 justify-between mx-auto w-full">
                <div class="md:w-[40%]">
                    <img class="rounded-lg object-fill" src="https://picsum.photos/id/212/800/800">
                    <div v-if="images[0] !== ''" class="flex items-center justify-center mt-2">
                        <div v-for="image in images" :key="image">
                            <img @mouseover="currentImage = image" @click="currentImage = image" width="70"
                                class="rounded-md object-fit border-[3px] cursor-pointer"
                                :class="currentImage === image ? 'border-[#ff5353]' : ''" :src="image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import Header from "~/components/global/Header.vue";

const images = ref([
    'https://picsum.photos/id/212/800/800',
    'https://picsum.photos/id/213/800/800',
    'https://picsum.photos/id/214/800/800',
    'https://picsum.photos/id/215/800/800',
    'https://picsum.photos/id/216/800/800',
    'https://picsum.photos/id/217/800/800',
    'https://picsum.photos/id/218/800/800',
])
</script>

<style lang="scss" scoped></style>