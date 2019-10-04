<template>
  <transition v-if="showModal" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-top">
            <div class="modal-header">Select building</div>
            <d-svg @click.native="closeModal()" class="close-icon" icon="cancel"/>
          </div>
          <div class="modal-body w-full flex justify-around mt-12">
            <div @click="tryToBuy(building)" :class="buildingClass(building)" :key="index" v-for="(building, index) in buildings">
              <d-svg class="w-16 md:w-20" :icon="building.name"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import DSvg from './../DSvg'

export default {
  data () {
    return {
      showModal: false,
    }
  },
  components: {
    DSvg
  },
  computed: {
    buildings () {
      return this.$store.state.building.list
    },
    gold () {
      return this.$store.state.user.user.resources.gold
    },
    mapId () {
      return this.$store.state.map.map.id
    }
  },
  methods: {
    openModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    buildingClass (building) {
      return {
        'not-affordable': ! this.isAffordable(building.cost)
      }
    },
    isAffordable (cost) {
      return this.gold >= cost
    },
    tryToBuy (building) {
      if (this.gold < building.cost) {
        return
      }

      this.$store.commit('unit/setSelected', {
        id: building.id,
        type: 'building',
        cost: building.cost,
      })
      this.$bus.$emit('setPossibleToPut', building.power);
      this.closeModal()
    },
  },
  created () {
    this.$bus.$on('openBuildingModal', this.openModal)
  },
  beforeDestroy () {
    this.$bus.$off('openBuildingModal', this.openModal)
  }
}
</script>
