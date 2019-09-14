<template>
  <div v-bind:style="position()" :class="fieldClass()" @click="put">
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
      return {
        top: this.field.y * 50 + 'px',
        left: this.field.x * 50 + 'px',
      }
    },
    fieldClass() {
      return {
        field: true,
        busy: this.field.user_id ? true : false,
        possible: this.field.possible
      }
    },
    put () {
      this.$bus.$emit('clearPossibleToPut')
    }
  },
}
</script>

<style lang="scss">
.fields {
  .field {
    width: 50px; height: 50px;
    @apply flex justify-center items-center border border-solid bg-gray-700 text-white absolute z-20;
    border-color: lighten(#4a5568, 2);

    &.busy {
      @apply bg-green-600;
    }

    &.possible {
      background-color: theme('colors.yellow.500') !important;
    }
  }
}
</style>

