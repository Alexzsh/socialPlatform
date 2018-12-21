<template>
  <div id="loginComponent">
    <el-input class="input" v-model="userName" placeholder="请输入用户名"></el-input>
    <br>
    <el-input class="input" type="password" v-model="pwd" placeholder="请输入密码"></el-input>
    <br>
    <el-button class="input" type="primary">登&nbsp;&nbsp;录</el-button>
    <p @click="registDialogVisable = true">还没有账号？</p>

    <el-dialog
      title="注&nbsp;&nbsp;册"
      :visible.sync="registDialogVisable"
      width="40%"
      :before-close="handleClose">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="className">
          <el-input v-model="ruleForm.className"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="regist-input" type="primary" @click="submitForm('ruleForm')">注&nbsp;&nbsp;册</el-button>
          <br>
          <el-button class="regist-input" @click="resetForm('ruleForm')">重&nbsp;&nbsp;置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data () {
    var checkName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('姓名不能为空'))
      } else {
        if (this.ruleForm.checkName !== '') {
          this.$refs.ruleForm.validateField('checkName')
        }
      }
    }
    var checkAge = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value <= 0 || value >= 100) {
            callback(new Error('是不是皮？'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var checkClassName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('班级不能为空'))
      } else {
        if (this.ruleForm.checkName !== '') {
          this.$refs.ruleForm.validateField('checkClassName')
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
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
      ruleForm: {
        name: '',
        age: '',
        className: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ],
        className: [
          { validator: checkClassName, trigger: 'blur' }
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
        .catch(_ => {})
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  width: 300px;
  margin: 20px;
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

</style>
