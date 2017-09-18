<!-- Vue components have three parts:
1. template
2. script tag with data, methods, etc.
3. styles scoped to this component -->

<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title dark>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
             name="email"
             label="Email"
             id="email"
             v-model="email"
           ></v-text-field>
          <br>
          <v-text-field
            type="password"
            label="Password"
            name="password"
            v-model="password" >
          </v-text-field>
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn class="cyan"
            @click="login" dark>Login</v-btn>
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
      email: '',
      password: '',
      error: null // have to add error here if you want it to be returned
    }
  },
  methods: {
    // async & register used instead of promises
    async login () {
      try {
        await AuthenticationService.login({
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
