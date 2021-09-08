<template>
<div>
  <div class="text-left">
    <h2 class="mb-7 font-bold text-3xl">Interested? Reach out now!</h2>
    <span class="rounded-full py-3 px-6 bg-green-300">Contact with {{ coachNameToContact }}</span>
  </div>
  <div class="border rounded-lg shadow-lg p-3 mt-10">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item
        prop="name"
        style="margin-left: -120px;"
        class="flex flex-col content-start text-left"
      >
          <span class="font-bold">Your E-Mail</span>
          <el-input v-model='ruleForm.name' pattern=".+@globex\.com"></el-input>
      </el-form-item>
      <el-form-item
        prop="desc"
        style="margin-left: -120px;"
        class="flex flex-col content-start text-left ml-1"
      >
        <span class="font-bold">Message</span>
        <el-input type="textarea" rows="4" v-model="ruleForm.desc"></el-input>
      </el-form-item>

      <el-form-item style="margin-left: -120px;">
        <el-button type="primary" @click="submitForm('ruleForm')">Create</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        desc: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input Your E-Mail',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 20,
            message: 'Email should contain min. 6 letter',
            trigger: 'blur'
          }
        ],
        desc: [
          {
            required: true,
            message: 'Please input Message',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    coachNameToContact () {
      return this.$route.params.coacheId
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          return alert('submit!')
        }
        console.log('error submit!!')
        return false
      })
    }
  }
}
</script>
