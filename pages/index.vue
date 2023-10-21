<template>
    <MainLayout>
       <template #featured>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
          <div class="text-2xl font-semibold mb-5">FATURED PRODUCTS</div>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 text-center"> 
                <div v-if="products" v-for="product in products" :key="product.id">
                    <ProductHolder :product="product"/>
                </div>
            </div>
        </div>
       </template>

       <template #hot>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
          <div class="text-2xl font-semibold mb-5">HOT PRODUCTS</div>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 text-center"> 
                <div v-if="products" v-for="product in products" :key="product.id">
                    <ProductHolder :product="product"/>
                </div>
            </div>
        </div>
       </template>

       <template #best>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
          <div class="text-2xl font-semibold mb-5">BEST SELLING</div>
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 text-center"> 
                <div v-if="products" v-for="product in products" :key="product.id">
                    <ProductHolder :product="product"/>
                </div>
            </div>
        </div>
       </template>

       <template #banner>
        
       </template>
    </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';
import ProductHolder from '~/components/products/ProductHolder.vue';
import type {Product} from '~/types/index'
import HomeBannerSlider from '~/components/slider/HomeBannerSlider.vue';

useHead({
  title: 'Ali Express | Online E-COmmerce',
  meta: [
    { name: 'description', content: 'Ali Express | Online E-COmmerce' }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
})

useSeoMeta({
  title: 'Ali Express | Online E-COmmerce',
  ogTitle: 'Ali Express',
  description: 'for over 111 million quality deals on Fashion, Accessories, Computer Electronics, Toys, Tools,Home Improvement, Home Appliances, Home & Garden and more!',
  ogImage: 'https://ae01.alicdn.com/kf/Sa0202ec8a96a4085962acfc27e9ffd04F/1080x1080.jpg',
  twitterCard: 'summary_large_image',
  keywords : 'AliExpress, Online shopping, Automotive, Phones, Accessories, Computers, Electronics, Fashion, Beauty, Health, Home, Garden, Toys, Sports, Weddings,AliExpres'
})

const products : Product[] = [
  {
    id: 1,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM',
    description: 'This is the first product description.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/800/800?image=1',
  },
  {
    id: 2,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 2',
    description: 'A second product with its own description.',
    price: 29.99,
    imageUrl: 'https://picsum.photos/800/800?image=2',
  },
  {
    id: 3,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 3',
    description: 'Description for the third product.',
    price: 14.99,
    imageUrl: 'https://picsum.photos/800/800?image=3',
  },
  {
    id: 4,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 4',
    description: 'Product number four with a detailed description.',
    price: 39.99,
    imageUrl: 'https://picsum.photos/800/800?image=4',
  },
  {
    id: 5,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 5',
    description: 'The fifth product has its own description here.',
    price: 24.99,
    imageUrl: 'https://picsum.photos/800/800?image=5',
  },
  {
    id: 6,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 6',
    description: 'Description for the sixth product.',
    price: 9.99,
    imageUrl: 'https://picsum.photos/800/800?image=6',
  },
  {
    id: 7,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 7',
    description: 'Seventh product with a unique description.',
    price: 34.99,
    imageUrl: 'https://picsum.photos/800/800?image=7',
  },
  {
    id: 8,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 8',
    description: 'Eighth product with its own story.',
    price: 27.99,
    imageUrl: 'https://picsum.photos/800/800?image=8',
  },
  {
    id: 9,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 9',
    description: 'Product nine description goes here.',
    price: 11.99,
    imageUrl: 'https://picsum.photos/800/800?image=9',
  },
  {
    id: 10,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 10',
    description: 'The tenth product with its description.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/800/800?image=10',
  },
  {
    id: 6,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 6',
    description: 'Description for the sixth product.',
    price: 9.99,
    imageUrl: 'https://picsum.photos/800/800?image=6',
  },
  {
    id: 7,
    name: 'HP Laptop Macrosis new 2023 HDD 518/24GB RAM 7',
    description: 'Seventh product with a unique description.',
    price: 34.99,
    imageUrl: 'https://picsum.photos/800/800?image=7',
  },
  
  
];
</script>

<style lang="scss" scoped>



</style>