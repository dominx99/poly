<template>
  <div class="menu-container">
    <div class="menu">
      <a @click="findWorld()" href="#">Find game</a>
      <a href="#">Check statistics</a>
      <a @click="logout()" href="#">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user.user.world_id;
    }
  },
  methods: {
    async findWorld() {
      try {
        let res = await this.$store.dispatch('world/join')
        this.$router.push({
          name: 'world',
          params: {
            world: res.data.data.world_id
          }
        })
      } catch (error) {
        alert('I fucked up something')
        console.log(error, error.response)
      }
    },
    logout() {
      localStorage.setItem('token', '')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.menu-container {
  @apply flex justify-center items-center w-full min-h-screen bg-gradient-purple-blue;

  .menu {
    @apply flex bg-indigo-800 rounded py-6 px-8 justify-center items-center flex-col;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    min-width: 300px;

    a {
      @apply bg-indigo-900 text-white rounded no-underline mb-6 w-full text-center py-3 px-4 uppercase;

      &:last-child {
        @apply mb-0;
      }
    }
  }
}
</style>
