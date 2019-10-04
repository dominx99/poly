<template>
  <component :is="dynamicIcon"/>
</template>

<script>
export default {
  name: 'DynamicIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  watch: {
    icon (newValue) {
      this.icon = newValue
      this.$forceUpdate
    }
  },
  computed: {
    dynamicIcon () {
      return () => import(
        /* webpackChunkName: "icons" */
        /* webpackMode: "lazy-once" */
        `./../assets/icons/${this.icon}.svg`
      )
    },
  },
}
</script>

