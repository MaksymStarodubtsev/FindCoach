<template>
  <div class="border border-indigo-600 rounded-md mb-8">
    <slot>
      <div class="flex flex-col gap-8 p-5">
        <div class="flex flex-col items-start gap-y-1">
          <h3 class="text-2xl">{{ name }}</h3>
          <h5 class="text-xl">{{ paid }}/hour</h5>
          <div class="flex gap-4">
            <span
              class="rounded-full py-3 px-6 bg-green-300 skill__cells"
              v-for="skill in skills"
              :key="skill"
            >
              {{ skill }}
            </span>
          </div>
        </div>
        <div class="flex flex-row justify-end gap-9">
          <el-button
            type="warning"
            class="rounded-full button"
            plain
            @click="coachDetails(id)"
          >
            Contact
          </el-button>
          <el-button
            type="danger"
            plain
            class="rounded-full button"
          >
            Details
          </el-button>
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

<style scoped>
  .skill__cells {
    transition: transform ease-in-out 0.3s;
  }

  .skill__cells:hover {
    transform: scale(1.1);
  }

  @media (max-width: 499px) {
    .button {
      font-size: 12px;
      width: 80px;
    }

    .skill__cells {
      font-size: 8px;
      width: 60px;
    }

    .py-3 {
      padding: 5px 2px;
    }
  }
</style>
