<template>
  <div v-bind:style="position()" :class="fieldClass()" @click="put">
    <d-svg v-if="fieldHasMapObject(field)" style="width: 75%; height: 75%;" :icon="mapObjectUnitName"/>
  </div>
</template>

<script>
import DSvg from './DSvg';

export default {
  props: ['field'],
  components: {
    DSvg,
  },
  computed: {
    mapObjects () {
      return this.$store.state.map.map.map_objects
    },
    mapObjectUnitName () {
      return this.mapObjects.find(mapObject => {
        return mapObject.field_id === this.field.id
      }).unit_name
    }
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
      this.$store.dispatch('map/put', { fieldId: this.field.id });
      this.$bus.$emit('clearPossibleToPut')
    },
    fieldHasMapObject () {
      return this.mapObjects.some(mapObject => {
        return mapObject.field_id === this.field.id
      })
    }
  }
}
</script>

<style lang="scss">
.fields {
  .field {
    width: 50px; height: 50px;
    @apply flex justify-center items-center border border-solid bg-gray-700 text-white absolute z-20;
    border-color: lighten(#4a5568, 2);

    &.busy {
      @apply bg-green-600 border-green-700;
    }

    &.possible {
      background-color: theme('colors.yellow.400') !important;
      border-color: theme('colors.yellow.500') !important;
    }
  }
}
</style>

