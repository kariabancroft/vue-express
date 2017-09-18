<template>
  <div id="app">
    <v-app>
      <page-header /> <!--from the loaded vue component we created! -->
      <!-- maybe magic naming conventions? -->
      <main> <!--this is some vuetify magic to give extra spacing a nd goodness-->
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>

    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader  // Header might be a reserved Vue word
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
