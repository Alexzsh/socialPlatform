<template>
  <div id="login-component">
    <el-input class="input"
              v-model="userName"
              placeholder="请输入用户名"></el-input>
    <br>
    <el-input class="input"
              type="password"
              v-model="pwd"
              placeholder="请输入密码"></el-input>
    <br>
    <el-button class="input"
               type="primary"
               @click="login">登&nbsp;&nbsp;录</el-button>
    <p @click="registDialogVisable = true">&nbsp;&nbsp;还没有账号？</p>

    <el-dialog title="注  册"
               :visible.sync="registDialogVisable"
               width="40%"
               :before-close="handleClose">
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="性别">
          <el-radio class="radio" v-model="ruleForm.sex" label="男">男</el-radio>
          <el-radio class="radio" v-model="ruleForm.sex" label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="姓名"
                      prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="班级"
                      prop="className">
          <el-input v-model="ruleForm.className"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="pass">
          <el-input type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="verificationCode">
          <el-input v-model="verificationCode"
                    class="veri-code-input"></el-input>
          <el-button type="primary"
                     class="veri-code-sendbtn"
                     @click="sendVeriCode"
                     :loading="sendBtnLoading">{{ sendBtnMsg }}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="regist-input"
                     type="primary"
                     @click="submitForm('ruleForm')"
                     :disabled="isComplete">注&nbsp;&nbsp;册</el-button>
          <br>
          <el-button class="regist-input"
                     @click="resetForm('ruleForm')">重&nbsp;&nbsp;置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import api from '../../api/api'

export default {
  name: 'LoginComponent',
  data () {
    var checkName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('姓名不能为空'))
      } else {
        if (this.ruleForm.name !== '') {
          this.$refs.ruleForm.validateField('checkName')
        }
        callback()
      }
    }
    var checkSex = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('性别不能为空'))
      } else {
        if (this.ruleForm.sex !== '') {
          this.$refs.ruleForm.validateField('checkSex')
        }
        callback()
      }
    }
    var checkClassName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('班级不能为空'))
      } else {
        if (this.ruleForm.className !== '') {
          this.$refs.ruleForm.validateField('checkClassName')
        }
        callback()
      }
    }
    var checkEmail = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('邮箱不能为空'))
      } else {
        if (this.ruleForm.email !== '') {
          this.$refs.ruleForm.validateField('checkClassName')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.pass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      userName: '',
      pwd: '',
      registDialogVisable: false,
      verificationCode: '',
      sendBtnLoading: false,
      sendBtnMsg: '发送邮箱验证码',
      ruleForm: {
        name: '',
        sex: '',
        className: '',
        email: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        sex: [
          { validator: checkSex, trigger: 'blur' }
        ],
        className: [
          { validator: checkClassName, trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
          { validator: checkEmail, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认取消注册？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.register({
            name: this.ruleForm.name,
            password: this.ruleForm.pass,
            sex: this.ruleForm.sex,
            classNumber: this.ruleForm.className,
            captha: this.verificationCode
          }).then(re => {
            console.log('success', re)
          }).catch(e => {
            console.log('loginError', e)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    login () {
      api.login({ name: this.userName, password: this.pwd }).then(re => {
        let userData = re.data
        if (userData.code === 0) {
          this.$store.commit('setName', this.userName)
          this.$store.commit('login')
          this.$router.push('/index')
        } else if (userData.code === 1) {
          this.$message.error('账号或密码错误！')
        }
      }).catch(e => {
        console.log('loginError', e)
      })
    },
    sendVeriCode (e) {
      let self = this
      let i = 30
      self.sendBtnLoading = true
      self.sendBtnMsg = '请30秒后再试'
      let number = setInterval(function () {
        i--
        self.sendBtnMsg = '请' + i + '秒后再试'
      }, 1000)
      setTimeout(function () {
        clearInterval(number)
        self.sendBtnLoading = false
        self.sendBtnMsg = '发送邮箱验证码'
      }, 30000)
    }
  },
  computed: {
    isComplete: function () {
      if (this.verificationCode && this.ruleForm.name && this.ruleForm.age && this.ruleForm.className && this.ruleForm.email &&
        this.ruleForm.pass && this.ruleForm.checkPass) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#login-component {
  width: 400px;
  display: block;
  margin: auto;
}

.input {
  width: 300px;
  margin: 20px auto;
  border-radius: 2em;
}

p {
  margin: -10px auto;
  text-align: center;
  cursor: pointer;
}

p:hover {
  text-decoration: underline;
}

.regist-input {
  width: 300px;
  margin: 10px;
  margin-left: -100px;
  border-radius: 2em;
}

.veri-code-input {
  width: 200px;
  float: left;
}

.radio {
  width: 150px;
}
</style>
