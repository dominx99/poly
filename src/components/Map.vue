<template>
  <div>
    <div class="fields">
      <Field :field="field" :key="index" v-for="(field, index) in fields"/>
    </div>
  </div>
</template>

<script>
import Field from './Field';

export default {
  components: {
    Field,
  },
  computed: {
    fields() {
      return this.$store.state.map.map.fields
    }
  },
}
</script>

<style>
.fields {
  background-color: #1f65e0;
}
</style>

