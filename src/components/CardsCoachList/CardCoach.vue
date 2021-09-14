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
            type="primary"
            class="rounded-full button"
            plain
            @click="centerDialogVisible = true"
          >
            Details
          </el-button>

            <el-dialog title="Information about Coach" v-model="centerDialogVisible" width="30%" center>
              <ul>
                <li>Coach name - {{ name }}</li>
                <li>Coach paid per/hour - {{paid}}$</li>
                skills:
                <ol class="skill_details-list">
                  <li v-for="skill in skills" :key="skill">{{skill}} </li>
                </ol>
              </ul>
              <template #footer>
                <span class="dialog-footer">
                  <el-button @click="centerDialogVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="coachDetails(id), centerDialogVisible = false"
                    >Contact</el-button
                  >
                </span>
              </template>
            </el-dialog>

        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      centerDialogVisible: false
    }
  },
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

  .skill_details-list {
    list-style-type: decimal;
    margin-left: 8%;
  }

  .skill__cells:hover {
    cursor: pointer;
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
