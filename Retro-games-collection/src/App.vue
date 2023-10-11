<template>
  <nav-bar></nav-bar>
  <div class="container">
    <router-view></router-view>
  </div>
  <footer-cmp></footer-cmp>
</template>

<script setup lang="ts">
import NavBar from '@ui/NavBar.vue'
import FooterCmp from '@ui/FooterCmp.vue'
</script>

<!-- <script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@ui/NavBar.vue'
import FooterCmp from '@ui/FooterCmp.vue'

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
    FooterCmp
  }
})
</script> -->
