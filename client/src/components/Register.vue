<!-- Vue components have three parts:
1. template
2. script tag with data, methods, etc.
3. styles scoped to this component -->

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
    <div class="error" v-html="error"/>
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
      password: '123',
      error: null // have to add error here if you want it to be returned
    }
  },
  methods: {
    // async & register used instead of promises
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        // What is returned from axios and error should be
        // what we defined in the back end
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
