<template>
  <div class="world-status" v-text="worldStatus"></div>
</template>

<script>
export default {
  computed: {
    worldStatus() {
      return this.$store.state.world.world.status;
    }
  },
}
</script>

<style lang="scss">
$main: #6729ce;

.world-status {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
  color: #fefefe;
  background-color: $main;
}
</style>
