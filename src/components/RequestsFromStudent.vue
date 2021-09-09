<template>
  <div class="flex flex-wrap w-full">
    <div v-for="message in requestsFromStudent" :key="message.coachName" class="Border-header">
      <div class="text-left"><span class="font-bold text-left">from</span> - {{message.email}}</div>
      <div class="text-left"><span class="font-bold text-left">to</span> - {{message.coachName}}</div>
      <div class="text-left"><span class="font-bold text-left">message:</span> {{message.desc}} </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default ({
  data () {
    return {
      tableData: this.requestsFromStudent
    }
  },
  computed: {
    ...mapGetters(['requestsFromStudent'])
  },
  methods: {
    ...mapActions(['getRequests'])
  },
  beforeMount () {
    this.$store.dispatch('getRequests')
  }
})
</script>

<style scoped>
  .Border-header {
    margin: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 25px;
  }
</style>
