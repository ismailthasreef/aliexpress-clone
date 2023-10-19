<template>
    <div id="`ProductHolder${product.id}`"
        class="bg-white inline-block rounded hover:shadow-[0,0,10px,3px] rgba(0,0,0,0,0.5) cursor-pointer ">
        <NuxtLink :to="`/item/${product.id}`">
            <img class="rounded-t" :src="product.imageUrl" :alt="product.name">
            <div id="ProductDetails" class="mb-2">
                <span class="flex  justify-between gap-3 px-1 pt-1">
                    <span class="text-[#FF6674] font-semibold ">${{ priceComputed }}</span>
                    <span class="text-gray-500 text-sm-text line-through">${{ oldPriceComputed }}</span>
                </span>

                <span class="relative px-1 -top-1.5 text-[#FF6674] text-xs font-semibold">
                    Extra 15% OFF
                </span>

                <div class="flex items-center gap-1 px-1 relative -top-1">
                    <span class="bg-[#fd374f] text-white text-[9px] font-semibold rounded-sm">
                        Welcome Deal
                    </span>
                    <span class="bg-[#f5f5f5] border text-[#c08562] text-[9px] font-semibold rounded-sm">Top Selling</span>
                </div>
                <p class="flex items-center px-1 pt-0.5 text-xs text-[#8b6d36]">
                    5,000+ sold
                    <Icon name="material-symbols:star-rate" color="#757575" class="ml-1.5" /> 4.7
                </p>

                <p class="px-1 flex items-start pt-0.5 text-xs text-start mb-2 text-[#252525]">
                    {{ product.name.substring(0, 60) }}
                </p>

                <p class="px-1 pb-1 flex items-start">
                    <span class="text-[#009a66] text-xs font-semibold">Free Shipping</span>
                </p>

            </div>
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
    let res = props.product.price
    return res.toFixed(2)
})

const oldPriceComputed = computed(() => {
    let res = (props.product.price + (props.product.price))
    return res.toFixed(2)
})


</script>

<style lang="scss" scoped></style>