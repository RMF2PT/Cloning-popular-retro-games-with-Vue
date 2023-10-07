<template>
  <div>
    <h1>This is the page for {{ game?.name }}</h1>
    <img :src="game?.image" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import sourceData from '@/games.json'

export default defineComponent({
  name: 'GameDetails',
  computed: {
    game() {
      return sourceData.games.find((game) => game.id === Number(this.$route.params.id))
    }
  }
})
</script>

<style scoped lang="scss">
@import '@/assets/_variables.scss';
</style>
