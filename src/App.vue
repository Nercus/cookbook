<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $base-1;
  color: $base-content;
}
</style>
