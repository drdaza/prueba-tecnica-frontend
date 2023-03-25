<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <header>
      <nav>
        <RouterLink to="/"><h1>Podcaster</h1></RouterLink>
      </nav>
  </header>
</template>
<style lang="scss">
    header{
        height: 10vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2vh;
    }
</style>