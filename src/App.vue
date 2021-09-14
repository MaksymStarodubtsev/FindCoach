<template>
  <div class="Main-content">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header.vue'

export default {
  name: 'App',
  methods: {
    ...mapActions(['getCoaches']),
    getCoachList () {
      this.$store.dispatch('getCoaches')
    }
  },
  beforeMount () {
    this.getCoachList()
  },
  components: {
    Header
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .Main-content {
    height: 100vh;
  }
</style>
