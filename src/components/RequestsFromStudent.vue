<template>
  <div class="flex flex-row justify-between w-full">
    <CardTemplate v-for="message in requestsFromStudent" :key="message.coachName">
      <div class="text-left"><span class="font-bold text-left">from</span> - {{message.email}}</div>
      <div class="text-left"><span class="font-bold text-left">to</span> - {{message.coachName}}</div>
      <div class="text-left"><span class="font-bold text-left">message:</span> {{message.desc}} </div>
    </CardTemplate>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardTemplate from './CardsCoachList/CardTemplate.vue'

export default ({
  data () {
    return {
      tableData: this.requestsFromStudent
    }
  },
  components: {
    CardTemplate
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
