<!-- Vue components have three parts:
1. template
2. script tag with data, methods, etc.
3. styles scoped to this component -->

<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
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
          <v-btn class="cyan"
            @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>

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
