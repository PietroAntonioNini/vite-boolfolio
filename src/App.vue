<script>
import { store } from './store.js';

import HomePage from './pages/HomePage.vue';
import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  data() {
    return {
      store,

      isSkip: 1,
    }
  },

  components: {
    AppNav,
    AppMain,
    AppFooter,
    HomePage,
  },

  mounted() {


  },

  methods: {
    goToProjects() {
      // Imposta isSkip a 0 per mostrare la pagina sottostante
      this.isSkip = 0;
    }
  }
}

</script>

<template>
  
  <HomePage class="home" v-if="isSkip===1" :go-to-projects="goToProjects"></HomePage>

  <div v-else>
    <AppNav></AppNav>
  
    <div class="container py-5 pb-0 ">
  
      <router-view></router-view>
  
    </div>
    <AppFooter></AppFooter>
  </div>

</template>

<style lang="scss" scoped>
</style>