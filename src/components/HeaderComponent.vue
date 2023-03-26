<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const element = ref('')

const emits = defineEmits(['searchEmit'])



const shotKey = ()=>{ 
  emits('searchEmit', element.value)
}
</script>
<template>
  <header>
    <nav>
      <RouterLink to="/">
        <h1>Podcaster</h1>
      </RouterLink>
    </nav>
    <div class="search-wrapper">

        <v-text-field v-model="element" density="compact" variant="solo" label="Search podcast"
          append-inner-icon="mdi-magnify" single-line hide-details @update:model-value="shotKey()" @keypress="shotKey()" ></v-text-field>

    </div>
  </header>
</template>
<style lang="scss">
header {
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vh;
  .search-wrapper{
    width: 50%;
  }
}
</style>