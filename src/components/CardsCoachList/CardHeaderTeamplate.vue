<template>
  <div>
    <h2>{{ header }}</h2>
    <el-checkbox-group v-model="checkList">
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
