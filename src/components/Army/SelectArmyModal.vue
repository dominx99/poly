<template>
  <transition v-if="showModal" name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-top">
            <div class="modal-header">Select army</div>
            <d-svg @click.native="closeModal()" class="close-icon" icon="cancel"/>
          </div>
          <div class="modal-body w-full flex justify-around mt-12">
            <div @click="tryToBuy(army)" :class="armyClass(army)" :key="index" v-for="(army, index) in armies">
              <d-svg class="w-16 md:w-20" :icon="army.name"/>
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
    armies () {
      return this.$store.state.army.list
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
    armyClass (army) {
      return {
        'not-affordable': ! this.isAffordable(army.cost)
      }
    },
    isAffordable (cost) {
      return this.gold >= cost
    },
    tryToBuy (army) {
      if (this.gold < army.cost) {
        return
      }

      this.$store.commit('unit/setSelected', {
        id: army.id,
        type: 'army',
        cost: army.cost,
      })
      this.$bus.$emit('setPossibleToPut', army.power);
      this.closeModal()
    },
  },
  created () {
    this.$bus.$on('openArmyModal', this.openModal)
  },
  beforeDestroy () {
    this.$bus.$off('openArmyModal', this.openModal)
  }
}
</script>
