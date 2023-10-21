<template>
    <div
        :class="['w-swiper-full', { 'pagination-hidden': hidePagination, 'pagination-inner': paginationInner }, `dir-${dir}`]">
        <div ref="swiper" :class="['swiper', swiperClass]">
            <div class="swiper-wrapper">
                <slot name="before" />
                <div v-for="(slide, index) in slides" :class="['swiper-slide', slideClass]" :key="index">
                    <slot :slide="slide" :index="index" />
                </div>
                <slot name="after" />
            </div>
        </div>
        <!-- Controls -->
        <template v-if="!hideControls">
            <div v-if="!hideNav" ref="prev" :class="['swiper-nav', 'swiper-nav-prev', { 'opacity-0': !isInit }, navClass]">
                <w-button :class="['p-2', { 'transform rotate-90': dir === 'vertical' }]" :color="navColor">
                    <w-icon name="arrow-right-sm" size="35" dir="left" />
                </w-button>
            </div>
            <div v-if="!hideNav" ref="next" :class="['swiper-nav', 'swiper-nav-next', { 'opacity-0': !isInit }, navClass]">
                <w-button :class="['p-2', { 'transform rotate-90': dir === 'vertical' }]" :color="navColor">
                    <w-icon name="arrow-right-sm" size="35" />
                </w-button>
            </div>
            <div v-if="!hidePagination" class="swiper-pagination-wrapper">
                <div ref="pagination" class="swiper-pagination" />
            </div>
        </template>
    </div>
</template>

<script setup>

const props = defineProps({
    slides: {
        type: Array,
        required: true
    },
    options: {
        type: Object,
        default: () => ({})
    },
    swiperClass: {
        type: String
    },
    slideClass: {
        type: String
    },
    hidePagination: {
        type: Boolean
    },
    hideNav: {
        type: Boolean
    },
    hideControls: {
        type: Boolean
    },
    navColor: {
        type: String,
        default: 'grey',
        validator: v => ['white', 'black', 'grey'].indexOf(v) !== -1
    },
    navClass: {
        type: String
    },
    paginationInner: {
        type: Boolean
    }
})


</script>

<style lang="scss" scoped></style>