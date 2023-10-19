<template>
    <button @click="userStore.isMenuOverlay = true" class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:bg-gray-200">
        <Icon name="radix-icons:hamburger-menu" size="33" />
    </button>
</template>

<script setup>
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()
</script>

<style lang="scss" scoped></style>