<template>
  <div class="flex justify-end items-center bg-blue-700">
    <div class="text-green-600 font-bold p-3 gold">$ <span v-text="gold"></span></div>
  </div>
</template>

<script>
export default {
  computed: {
    gold () {
      return this.$store.state.user.user.resources.gold
    }
  }
}
</script>

<style scoped>
.gold {
  line-height: 20px;
}
</style>
