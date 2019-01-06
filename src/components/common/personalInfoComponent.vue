<template>
  <div id="personal-info">
    <div class="head-icon">
      <svg class="icon head-icon"
           aria-hidden="true">
        <use :xlink:href="'#favicon-default' + (headIcon)"></use>
      </svg>
    </div>
    <div v-if="edit"
         class="content">
      <el-form :model="ruleForm"
               status-icon
               :rules="rules"
               ref="ruleForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="姓名"
                      prop="name">
          <el-input v-model="ruleForm.name"
                    disabled
                    :placeholder="userName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio class="radio"
                    v-model="ruleForm.sex"
                    label="男">男</el-radio>
          <el-radio class="radio"
                    v-model="ruleForm.sex"
                    label="女">女</el-radio>
        </el-form-item>
        <el-form-item label="班级"
                      prop="className">
          <el-input v-model="ruleForm.className"></el-input>
        </el-form-item>
        <el-form-item label="邮箱"
                      prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="btn"
                     type="primary"
                     @click="submitForm('ruleForm')"
                     :disabled="isComplete">提&nbsp;&nbsp;交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else
         class="content">
      <div class="name">
        姓名：{{ ruleForm.name }}
      </div>
      <div class="age">
        性别： {{ ruleForm.sex }}
      </div>
      <div class="age">
        班级： {{ ruleForm.className }}
      </div>
      <div class="edit-btn">
        <el-button class="btn"
                   type="primary"
                   @click="edit = true">修&nbsp;&nbsp;改</el-button>
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
    var checkClassName = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('班级不能为空'))
      } else {
        callback()
      }
    }
    var checkEmail = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('邮箱不能为空'))
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
      ruleForm: {
        name: store.state.name,
        sex: '男',
        className: '1801',
        email: ''
      },
      rules: {
        name: [
          { validator: checkName, trigger: 'blur' }
        ],
        className: [
          { validator: checkClassName, trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
          { validator: checkEmail, trigger: 'blur' }
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
