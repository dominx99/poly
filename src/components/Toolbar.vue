<template>
  <div class="toolbar">
    <button class="btn bg-teal-700 shadow mx-3" @click="modal('army')">Army</button>
    <button class="btn bg-teal-700 shadow">Buildings</button>
  </div>
</template>

<script>
export default {
  methods: {
    modal () {
      this.$bus.$emit('openArmyModal');
    }
  }
}
</script>

<style lang="scss" scope>
.btn {
  transition: all .2s cubic-bezier(0.85, 0.01, 0, 1.02);
  &:hover {
    @apply bg-teal-800 shadow-lg;
  }
}
.toolbar {
  @apply py-3 bg-blue-700 text-white justify-start items-center;
  line-height: 20px;
}
</style>
