<template>
<div class="Main-content">
  <Header />
  <main>
    <router-view></router-view>
  </main>
  <button @click="showInConsole">console.log</button>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header.vue'

export default {
  name: 'App',
  methods: {
    ...mapActions(['getCoaches']),
    addNew () {
      fetch('https://vue-http-demo-763e4-default-rtdb.europe-west1.firebasedatabase.app/FindCoaches/Coaches.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: 3,
          name: 'Mark Berg',
          paid: 30,
          skills: ['Front-end', 'Back-end', 'career support']
        })
      })
      console.log('send')
    },
    getCoachList () {
      this.$store.dispatch('getCoaches')
      console.log('getCoachList')
    }
    // getCoaches () {
    //   fetch('https://vue-http-demo-763e4-default-rtdb.europe-west1.firebasedatabase.app/FindCoaches/Coaches.json')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const newCoaches = data
    //       // this.coaches = newCoaches
    //       this.setInData(newCoaches)
    //       // console.log(newCoaches)
    //     })
    // },
    // setInData (dataFromServer) {
    //   const newCoach = Object.values(dataFromServer)
    //   this.coaches = newCoach
    //   console.log(dataFromServer, newCoach)
    // },
    // showInConsole () {
    //   console.log(this.coaches)
    // }
  },
  beforeMount () {
    this.getCoachList()
    console.log('mount')
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
