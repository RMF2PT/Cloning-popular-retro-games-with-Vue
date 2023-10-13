<template>
  <ButtonCmp @click="$router.back" text="Go back" />
</template>

<script setup lang="ts">
import ButtonCmp from '@ui/ButtonCmp.vue'
</script>

<!-- <script lang="ts">
import { defineComponent } from 'vue'
import buttonCmp from '@ui/ButtonCmp.vue'

export default defineComponent({
  name: 'GoBack',
  components: {
    buttonCmp
  }
})
</> -->
