<template>
  <div class="w-3/6 center">
    <CardTemplate>
      <div class="flex justify-start gap 4">
          <ContactCoach />
      </div>
    </CardTemplate>
    <CardTemplate>
      <FormCoach />
    </CardTemplate>
  </div>
</template>

<script>
import ContactCoach from './ContactWithCoach/ContactsCoach.vue'
import CardTemplate from './CardsCoachList/CardTemplate.vue'
import FormCoach from './ContactWithCoach/FormCoach.vue'

export default ({
  components: {
    ContactCoach,
    CardTemplate,
    FormCoach
  }
})
</script>

<style scoped>
  .center {
    margin: 0 auto;
  }
</style>
