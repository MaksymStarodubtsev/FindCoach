<template>
  <div class="center">
      <CardTemplate>
      <div class="border rounded-lg shadow-lg p-3 mt-10">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item
            prop="email"
            style="margin-left: -120px;"
            class="flex flex-col content-start text-left"
          >
              <span class="font-bold">Your E-Mail</span>
              <el-input v-model='ruleForm.email' type="email"></el-input>
          </el-form-item>
          <el-form-item
            prop="desc"
            style="margin-left: -120px;"
            class="flex flex-col content-start text-left ml-1"
          >
            <span class="font-bold">Password</span>
            <el-input
              placeholder="Please input password"
              show-password
              v-model="ruleForm.password" />
          </el-form-item>

          <el-form-item style="margin-left: -120px;">
            <el-button type="primary" mode="flat" @click="submitForm('ruleForm')">{{ submitButtonCaption }}</el-button>
            <el-button @click="switchAuthMode()">{{ switchModeButtonCation }}</el-button>
          </el-form-item>
        </el-form>
      </div>
    </CardTemplate>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardTemplate from '../../components/CardsCoachList/CardTemplate.vue'

export default ({
  components: {
    CardTemplate
  },
  data () {
    return {
      mode: 'login',
      ruleForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change']
          }
        ],
        password: [
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
    submitButtonCaption () {
      if (this.mode === 'login') {
        return 'Login'
      }
      return 'Signup'
    },
    switchModeButtonCation () {
      if (this.mode === 'login') {
        return 'Sign instead'
      }
      return 'Login instead'
    }
  },
  methods: {
    ...mapActions(['setRequests', 'signup']),
    switchAuthMode () {
      if (this.mode === 'login') {
        this.mode = 'signup'
      } else {
        this.mode = 'login'
      }
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit')
          if (this.mode === 'login') {
            //
          } else {
            this.$store.dispatch('signup', {
              email: this.ruleForm.email,
              password: this.ruleForm.password
            })
          }
          // send http request
          this.ruleForm.email = ''
          this.ruleForm.password = ''
        }
        alert('error submit!!')
        return false
      })
    }
  }

})
</script>

<style scoped>
  .center {
    width: 50%;
    margin: 0 auto;
  }
</style>
