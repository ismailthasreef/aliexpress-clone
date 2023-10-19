<template>
    <MainLayout>
        <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
            <div class="grid xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 text-center"> 
                <div v-if="products" v-for="items in products" :key="items.id">
                    <ProductHolder :products="items"/>
                </div>
            </div>
        </div>
    </MainLayout>
    
</template>

<script setup lang="ts">
import MainLayout from '~/layouts/MainLayout.vue';
import ProductHolder from '~/components/ProductHolder.vue';
import type {Product} from '~/types/index'

const products : Product[] = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the first product description.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/800/800?image=1',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'A second product with its own description.',
    price: 29.99,
    imageUrl: 'https://picsum.photos/800/800?image=2',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for the third product.',
    price: 14.99,
    imageUrl: 'https://picsum.photos/800/800?image=3',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Product number four with a detailed description.',
    price: 39.99,
    imageUrl: 'https://picsum.photos/800/800?image=4',
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'The fifth product has its own description here.',
    price: 24.99,
    imageUrl: 'https://picsum.photos/800/800?image=5',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description for the sixth product.',
    price: 9.99,
    imageUrl: 'https://picsum.photos/800/800?image=6',
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Seventh product with a unique description.',
    price: 34.99,
    imageUrl: 'https://picsum.photos/800/800?image=7',
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'Eighth product with its own story.',
    price: 27.99,
    imageUrl: 'https://picsum.photos/800/800?image=8',
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'Product nine description goes here.',
    price: 11.99,
    imageUrl: 'https://picsum.photos/800/800?image=9',
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'The tenth product with its description.',
    price: 19.99,
    imageUrl: 'https://picsum.photos/800/800?image=10',
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'Description for the sixth product.',
    price: 9.99,
    imageUrl: 'https://picsum.photos/800/800?image=6',
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'Seventh product with a unique description.',
    price: 34.99,
    imageUrl: 'https://picsum.photos/800/800?image=7',
  },
  
  
];
</script>

<style lang="scss" scoped>



</style>