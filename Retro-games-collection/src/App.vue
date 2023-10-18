<template>
  <NavBar />
  <div class="container">
    <RouterView />
  </div>
  <FooterCmp />
</template>

<script setup lang="ts">
import NavBar from '@ui/NavBar.vue'
import FooterCmp from '@ui/FooterCmp.vue'
</script>
