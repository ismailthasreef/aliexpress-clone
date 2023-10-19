<template>
    <div id="`ProductHolder${product.id}`"
        class="bg-white inline-block rounded hover:shadow-[0,0,10px,3px] rgba(0,0,0,0,0.5) cursor-pointer">
        <NuxtLink :to="`/item/${product.id}`">
            <img class="rounded-t" :src="product.imageUrl" :alt="product.name">
        </NuxtLink>

    </div>
</template>

<script setup>

const props = defineProps({
    product: {
        type: Object,
        default() { return [{}] },
    },
})

const priceComputed = computed(() => {
    return props.product.price / 100
})

const oldPriceComputed = computed(() => {
    let res = (product.price + (product.value.price / 20)) / 100
    return res.toFixed(2)
})


</script>

<style lang="scss" scoped></style>