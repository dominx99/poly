<template>
  <div v-bind:style="position()" :class="fieldClass()">
    <!-- <d-svg style="width: 75%; height: 75%;" :icon="field.type"/> -->
  </div>
</template>

<script>
import DSvg from './DSvg';

export default {
  props: ['field'],
  components: {
    DSvg,
  },
  methods: {
    position() {
      console.log(this.field)
      return {
        top: this.field.y * 50 + 'px',
        left: this.field.x * 50 + 'px',
      }
    },
    fieldClass() {
      return {
        field: true,
        busy: this.field.user_id ? true : false
      }
    }
  },
}
</script>

<style lang="scss">
.fields {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;
  z-index: 10;

  .field {
    width: 48px; height: 48px;
    background-color: #46474c;
    border: 2px solid lighten(#46474c, 3);
    color: #fefefe;
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    &.busy {
      background-color: green;
    }
  }
}
</style>

