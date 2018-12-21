<template>

  <div class="post">
    <div class="circle left">
      <img src="https://hacks.mozilla.org/files/2017/06/firefox-logo.png"
           style="width:45px">
    </div>

    <div class="right">

      <div class="input">
        <el-input type="textarea"
                  :rows="inputRows"
                  placeholder="有什么新鲜事儿~~~~"
                  v-model="inputText"
                  @focus="inputGetFocus"
                  :style="borderStyle">

        </el-input>

      </div>
      <div class="submit-line">
        <div v-if="clickInput"
             class="upload">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                     list-type="picture-card"
                     :on-success="handleAvatarSuccess"
                     :before-upload="beforeAvatarUpload"
                     :on-preview="handlePictureCardPreview"
                     :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible"
                     width="500px">
            <img width="100%"
                 :src="dialogImageUrl"
                 alt="">
          </el-dialog>

        </div>
        <div v-if="clickInput"
             @click="clickSubmit"
             class="submit">
          <el-button type="primary"
                     round>发布</el-button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      textarea3: '',
      currentView: 1,
      inputRows: '2',
      clickInput: false,
      inputText: '',
      borderStyle: { 'border': '2px solid #e6ecf0', 'border-radius': '5px' }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    inputGetFocus (e) {
      this.inputRows = '4'
      this.clickInput = true
      this.borderStyle = { 'border': '2px solid #abd9fb', 'border-radius': '5px' }
    },
    inputBlurFocus (e) {
      document.addEventListener('click', e => {
        if (!this.$el.contains(e.target)) {
          this.inputRows = '2'
          this.clickInput = false
          this.borderStyle = { 'border': '2px solid #e6ecf0', 'border-radius': '5px' }
        }
      })
    },
    clickSubmit () {
      console.log(this.inputText)
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/png 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  },

  components: {

  }
}
</script>

<style scope lang='scss'>
.post {
  display: inline-block;
  width: 590px;
  height: 153px;
  padding: 10px 12px;
  .left {
    position: relative;
    float: left;
    left: 30px;
    .circle {
      width: 45px;
      height: 45px;
      top: 0;

      float: left;
    }
  }

  .right {
    float: right;
    width: 500px;
    .input {
      top: 0;

      // height: 300px;
    }
    .submit-line {
      margin-top: 5px;
      .upload {
        float: left;
        left: 0;
        margin-top: 5px;
        .el-upload {
          width: 50px;
          height: 50px;
          line-height: 50px;

          .el-icon-plus {
            line-height: 50px;
          }
        }
      }
      .submit {
        position: relative;
        float: right;
        margin-top: 10px;
      }
    }
  }
}
</style>
