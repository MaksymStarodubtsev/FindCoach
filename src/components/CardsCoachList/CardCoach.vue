<template>
  <div class="border border-indigo-600 rounded-md mb-8">
    <slot>
      <div class="flex flex-col gap-8 p-5">
        <div class="flex flex-col items-start gap-y-1">
          <h3 class="text-2xl">{{ name }}</h3>
          <h5 class="text-xl">{{ paid }}/hour</h5>
          <div class="flex gap-4">
            <span
              class="rounded-full py-3 px-6 bg-green-300"
              v-for="skill in skills"
              :key="skill"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="flex flex-row justify-end gap-9">
          <button
            class="rounded-full py-3 px-6 bg-yellow-300"
            @click="coachDetails(id)"
          >
            Contact
          </button>
          <button class="rounded-full py-3 px-6 bg-pink-300">View Details</button>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'paid', 'skills'],
  methods: {
    coachDetails (coachId) {
      this.$router.push(`/coaches/${this.name}`)
      console.log(coachId)
    }
  }
}
</script>
