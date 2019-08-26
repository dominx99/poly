<template>
  <div class="auth-container">
    <div class="auth">
      <div class="auth-header">
        <router-link tag="button" :class="'btn bg-white rounded-tl'" to="/login">Login</router-link>
        <router-link tag="button" :class="'btn bg-indigo-900 text-white rounded-tr'" to="/register">Register</router-link>
      </div>
      <div class="auth-body">
        <div v-if="error.show" class="auth-error" v-text="error.message"></div>
        <div class="form-group">
          <label for="login">Email</label>
          <input type="email" v-model="auth.email">
        </div>
        <div class="form-group">
          <label for="login">Password</label>
          <input type="password" v-model="auth.password">
        </div>
      </div>
      <div class="auth-footer">
        <button @click="login()" class="btn bg-indigo-900 text-white rounded-b">Login</button>
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
      error: {
        message: '',
        show: false,
      }
    }
  },
  methods: {
    async login() {
      this.error.show = false;

      try {
        let res = await this.$store.dispatch('auth/login', {
          email: this.auth.email,
          password: this.auth.password
        })

        localStorage.setItem('token', res.data.data.token)
        this.$router.push({ name: 'lobby' })
      } catch (error) {
        this.showError(error.response.data.error)
      }
    },
    showError(message) {
      this.error.message = message;
      this.error.show = true;
    }
  }
}
</script>
