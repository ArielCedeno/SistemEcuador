<template>
  <HeaderComponent></HeaderComponent>
    <div>
    <main>
      <ContactoComponent></ContactoComponent>
    </main>
  </div>
</template>

<script lang="ts" setup>
import ContactoComponent from '@/components/ContactoComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
</script>

<style scoped>
    nav{
        background-color: var(--color-04);
    }
</style>