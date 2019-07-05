<template>
  <div>
    <div class="tiles">
      <Tile :tile="tile" :key="index" v-for="(tile, index) in tiles"/>
    </div>
  </div>
</template>

<script>
import Tile from './Tile';

export default {
  components: {
    Tile,
  },
  data() {
    return {
      tiles: [
        {
          type: 'factory',
          x: 0,
          y: 0,
        },
        {
          type: 'factory',
          x: 1,
          y: 0,
        },
        {
          type: 'factory',
          x: 2,
          y: 0,
        },
        {
          type: 'factory',
          x: 3,
          y: 0,
        },
        {
          type: 'factory',
          x: 0,
          y: 1,
        },
        {
          type: 'factory',
          x: 1,
          y: 1,
        },
        {
          type: 'factory',
          x: 2,
          y: 1,
        },
        {
          type: 'factory',
          x: 3,
          y: 1,
        },
        {
          type: 'factory',
          x: 0,
          y: 2,
        },
        {
          type: 'factory',
          x: 1,
          y: 2,
        },
        {
          type: 'factory',
          x: 2,
          y: 2,
        },
        {
          type: 'factory',
          x: 3,
          y: 2,
        },
      ],
    }
  },
  mounted() {
    this.$axios.get('map/generate').then(res => {
      this.tiles = res.data.fields;
    });
  }
}
</script>

