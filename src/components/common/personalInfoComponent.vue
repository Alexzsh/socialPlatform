<template>
  <div id="personal-info">
    <div class="head-icon">
      <svg class="icon head-icon" aria-hidden="true">
        <use :xlink:href="'#favicon-default' + (headIcon)"></use>
      </svg>
    </div>
    <div v-if="edit" class="content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" disabled :placeholder="userName"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age"></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="className">
          <el-input v-model="ruleForm.className"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn" type="primary" @click="submitForm('ruleForm')" :disabled="isComplete">提&nbsp;&nbsp;交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else class="content">
      <div class="name" >
        姓名：{{ ruleForm.name }}
      </div>
      <div class="age">
        年龄： {{ ruleForm.age }}
      </div>
      <div class="age">
        班级： {{ ruleForm.className }}
      </div>
      <div class="edit-btn">
        <el-button class="btn" type="primary" @click="edit = true">修&nbsp;&nbsp;改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'PersonalInfoComponent',
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
    var checkEmail = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('邮箱不能为空'))
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
      edit: false,
      userName: store.state.name,
      headIcon: store.state.headIcon,
      pwd: '',
      registDialogVisable: false,
      verificationCode: '',
      sendBtnLoading: false,
      sendBtnMsg: '发送邮箱验证码',
      ruleForm: {
        name: store.state.name,
        age: '20',
        className: '1801',
        email: '',
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
  }
}
</script>

<style lang="scss" scoped>
#personal-info {
  font-size: 18px;
  width: 590px;
  margin: auto;
}

.head-icon {
  margin-left: 0;
}

.content {
  position: relative;
  left: -50px;
}
</style>
