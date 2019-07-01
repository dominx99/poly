<template>
  <div v-bind:style="position()" class="tile">
    <d-svg style="width: 75%; height: 75%;" :icon="tile.type"/>
  </div>
</template>

<script>
import DSvg from './DSvg';

export default {
  props: ['tile'],
  components: {
    DSvg,
  },
  methods: {
    position() {
      return {
        top: this.tile.y * 50 + 'px',
        left: this.tile.x * 50 + 'px',
      }
    },
  },
}
</script>

<style lang="scss">
.tiles {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;
  z-index: 10;

  .tile {
    width: 48px; height: 48px;
    background-color: #149926;
    border: 2px solid black;
    color: #fefefe;
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

