<template>
  <div class="auth-container">
    <div class="auth">
      <div class="auth-header">
        <router-link tag="button" :class="'btn bg-indigo-900 text-white rounded-tl'" to="/login" class="active">Login</router-link>
        <router-link tag="button" :class="'btn bg-white rounded-tr'" to="/register">Register</router-link>
      </div>
      <div class="auth-body">
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" v-model="auth.email">
          <span class="error-message" v-text="errors.email ? errors.email[0] : ''"></span>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="auth.password">
          <span class="error-message" v-text="errors.password ? errors.password[0] : ''"></span>
        </div>
      </div>
      <div class="auth-footer">
        <button @click="register()" class="btn bg-indigo-900 text-white rounded-b">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: {
        email: '',
        password: ''
      },
      errors: {
        email: [],
        password: []
      },
    }
  },
  methods: {
    async register() {
      try {
        let res = await this.$store.dispatch('auth/register', {
          email: this.auth.email,
          password: this.auth.password
        })

        localStorage.setItem('token', res.data.data.token)
        this.$router.push({ name: 'lobby' })
      } catch (error) {
        console.error(error.response)
        this.errors = error.response.data.errors
      }
    },
  }
}
</script>

<style lang="scss">
.auth {
  .error-message {
    font-size: 90%;
    color: red;
  }
}
</style>

