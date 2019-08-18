<template>
  <div class="auth-container">
    <div class="auth">
      <div class="auth-header">
        <router-link tag="button" to="/login">Login</router-link>
        <router-link tag="button" to="/register" class="active">Register</router-link>
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
        <button @click="login()" class="active">Login</button>
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
        console.log('set token')
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

<style lang="scss">
$main: #6729ce;

button {
  font-family: 'Russo One', sans-serif;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: .75rem 1rem;
  background-color: #fefefe;

  &.active {
    background-color: darken($main, 5);
    color: #fefefe;
  }
}

.auth-container {
  font-family: 'Russo One', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: $main;

  .auth {
    background-color: #fefefe;
    border-radius: .1rem;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.07);

    .auth-header {
      display: flex;
      justify-content: around;

      button {
        width: 100%;
      }
    }

    .auth-body {
      padding: 2rem 1rem;

      .auth-error {
        margin-bottom: 1rem;
        padding: .75rem 1rem;
        background-color: #ad3e3e;
        color: #fefefe;
      }

      .form-group {
        width: 100%;
        margin-bottom: 1.5rem;

        &:last-of-type {
          margin-bottom: 0;
        }

        label {
          display: block;
          margin-bottom: .3rem;
        }

        input {
          width: calc(100% - 1rem - 2px);
          padding: .75rem .5rem;
          outline: 0;
          border: 1px solid rgba(0,0,0,.2);
          border-radius: .5rem;
        }
      }
    }

    .auth-footer {
      width: 100%;
      button {
        width: 100%;
      }
    }
  }
}
</style>
