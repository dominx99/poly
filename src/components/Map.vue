<template>
  <div>
    <ArmyModal/>
    <div class="fields w-full bg-blue-700 relative overflow-auto z-10">
      <Field :field="field" :key="index" v-for="(field, index) in fields"/>
    </div>
  </div>
</template>

<script>
import Field from './Field';
import ArmyModal from './Army/SelectArmyModal'
import fields from './../queries/fields'

export default {
  components: {
    Field,
    ArmyModal,
  },
  computed: {
    fields() {
      return this.$store.state.map.map.fields
    },
    userId () {
      return this.$store.state.user.user.id
    }
  },
  methods: {
    setPossibleToPut (power) {
      fields.getPossibleToPut(this.fields, this.userId, power).forEach(field => {
        this.$set(
          this.fields,
          this.fields.indexOf(field),
          Object.assign({}, field, { possible: true })
        )
      })
    },
    clearPossibleToPut () {
      this.fields.forEach(field => {
        if (! field.possible) {
          return
        }

        this.$set(
          this.fields,
          this.fields.indexOf(field),
          Object.assign({}, field, { possible: false })
        )
      })
    }
  },
  created () {
    this.$bus.$on('setPossibleToPut', this.setPossibleToPut)
    this.$bus.$on('clearPossibleToPut', this.clearPossibleToPut)
  },
  beforeDestroy () {
    this.$bus.$off('setPossibleToPut', this.setPossibleToPut)
    this.$bus.$off('clearPossibleToPut', this.clearPossibleToPut)
  }
}
</script>

<style lang="scss">
.fields {
  height: calc(100vh - 40px - 4.5rem);

  @media (min-width: theme('screens.md')) {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: theme('colors.gray.600');
    }

    &::-webkit-scrollbar-thumb {
      background-color: theme('colors.gray.800');

      &:hover {
        background-color: theme('colors.gray.900');
      }
    }
  }
}
</style>
