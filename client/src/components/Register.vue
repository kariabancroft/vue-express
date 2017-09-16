<template>
  <div>
    <h1>Cool! Register!</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email" />
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password" />
    <br>
    <button
      @click="register">Register</button>
  </div>
</template>

<!-- This is the controller -->
<!-- Can bind to attributes -->
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    // two way binding
    return {
      email: 'abc',
      password: '123'
    }
  },
  methods: {
    // async & register used instead of promises
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      // console.log('register button was clicked', this.email, this.password)
      console.log(response.data)
    }
  }
}
</script>

<style scoped>
</style>
