<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4" >
      <span
        class="home"
        @click="navigateTo({name: 'root'})">
        Tab Tracker
      </span>
    </v-toolbar-title>

    <!-- TODO: Implement browse functionality! -->
    <!-- <v-toolbar-items>
      <v-btn flat dark>
        Browse
      </v-btn>
    </v-toolbar-items> -->

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark
        @click="navigateTo({name: 'login'})">
        Login
      </v-btn>
      <!--<router-link to="register">  looks in the router for something that has exactly the same name -->
        <v-btn flat dark
          @click="navigateTo({name: 'register'})">
          Sign Up
        </v-btn>
    <!-- </router-link> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      // each object has access to the router
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: gray;
}
</style>
