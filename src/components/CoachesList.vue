<template>
  <main class='flex h-5/6 justify-center container'>
    <div class='w-3/4'>
      <CardTemplate>
        <CardHeaderTeamplate header='Find your Coach' />
      </CardTemplate>
      <CardTemplate header='Coach'>
        <div class='flex justify-start mb-12'>
          <el-button round class='Main__button'>
            Refresh
          </el-button>
        </div>
        <router-view></router-view>
        <div class="mt-12">
            <CardCoach
              v-for='coach in coachList'
              :key='coach.name'
              :id="coach.id"
              :name='coach.name'
              :paid='coach.paid'
              :skills='coach.skills'
            />
        </div>
      </CardTemplate>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CardTemplate from './CardsCoachList/CardTemplate.vue'
import CardHeaderTeamplate from './CardsCoachList/CardHeaderTeamplate.vue'
import CardCoach from './CardsCoachList/CardCoach.vue'

export default {
  components: {
    CardTemplate,
    CardHeaderTeamplate,
    CardCoach
  },
  computed: {
    ...mapGetters({ coachList: 'coachesList' })
  },
  methods: {
    ...mapActions(['getCoaches'])
  }
}
</script>

<style scoped>
.Main__button {
  left: 0px;
}
.container {
  margin: 0 auto;
  padding: 0 140px;
}
@media (max-width: 700px) {
  .container {
    padding: 0px;
  }
}
</style>
