<template>
  <div>
    <h2>{{ header }}</h2>
    <el-checkbox-group v-model="checkList" class="flex">
      <el-checkbox label="Front-end">Front-end</el-checkbox>
      <el-checkbox label="Back-end">Beck-end</el-checkbox>
      <el-checkbox label="career support">Career support</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    header: {
      type: String
    }
  },
  data () {
    return {
      checkList: []
    }
  },
  watch: {
    checkList (newValue, oldValue) {
      if (newValue !== oldValue) {
        console.log(this.checkList)
        this.$store.dispatch('toSortCoaches', this.checkList)
      }
    }
  },
  methods: {
    ...mapActions(['toSortCoaches'])
  }
}
</script>

<style scoped>
  .flex {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 700px) {
    .flex {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      padding: 0 20px;
    }
  }
</style>
