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
$main: #6729ce;

.menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #e4e4ed;

  .menu {
    background-color: $main;
    border-radius: .5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    padding: 1.5rem 2rem;
    min-width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      color: #fefefe;
      border-radius: .5rem;
      text-decoration: none;
      margin-bottom: 1.5rem;
      background-color: darken($main, 5);
      width: 100%;
      text-align: center;
      padding: .75rem 1rem;
      text-transform: uppercase;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
