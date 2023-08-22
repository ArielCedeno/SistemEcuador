<template>
  <HeaderComponent></HeaderComponent>
  <div>
    <QuienesSomosComponent></QuienesSomosComponent>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import QuienesSomosComponent from '@/components/QuienesSomosComponent.vue';
</script>

<style scoped>
nav{
  background-color: var(--color-04);
} 
</style>