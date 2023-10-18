<template>
  <section class="center">
    <h1>Welcome to my personal project</h1>
    <p>This is my playground for cloning classic retro games and training my developer skills</p>
    <p>Check out all the games available <RouterLink to="/games" text="here" /></p>
  </section>
</template>

<style scoped lang="scss">
@import '@assets/_variables.scss';

p {
  margin-bottom: 1rem;
}

a {
  color: $color-link;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
