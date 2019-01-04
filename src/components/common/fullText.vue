/* eslint-disable no-undef */
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
          <el-upload action="postImageUrl"
                     :limit="1"
                     drag
                     list-type="picture-card"
                     :http-request="myPost"
                     :before-upload="beforeAvatarUpload"
                     :on-progress="handleUploading"
                     :on-success="handleAvatarSuccess"
                     :on-remove="handleRemove"
                     :on-exceed="handleExceed">
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
             @click="submitWholePost"
             class="submit">
          <el-button type="primary"
                     round>发布</el-button>
        </div>
      </div>
    </div>
  </div>

</template>
<script >
import api from '../../api/api'
import axioss from 'axios'

axioss.defaults.withCredentials = true
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
      pictureUrl: '',
      postImageUrl: 'https://sm.ms/api/upload',
      borderStyle: { 'border': '2px solid #e6ecf0', 'border-radius': '5px' }

    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList, this.pictureUrl)
      // for (let i = 0; i < this.pictureUrl.length; i++) {
      //   if (this.pictureUrl[i].uid === file.uid) {
      //     this.pictureUrl.delete(i)
      //   }
      // }
      this.pictureUrl = ''
    },
    handleUploadSuccess (res, file, fileList) {
      console.log(res, file, fileList)
      this.$message.success('upload success')
    },
    handleOnChange (file, fileList) {
      console.log(file, fileList)
    },
    handleUploading (event, file, fileList) {
      console.log(file, fileList, event, 'is uploading')
    },
    handleExceed (files, fileList) {
      console.log(files, fileList)
      this.$message.error('exceed the limit 2 images')
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
    myPost (file) {
      console.log('file', file)

      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      const formdata = new FormData()

      // eslint-disable-next-line no-undef

      formdata.append('smfile', file.file)
      axioss.post(this.postImageUrl, formdata, config).then(res => {
        console.log('postImageSuccess', res)
        this.pictureUrl = res.data.data.url
        this.$message.success('uploadsuccess')
      }).catch(e => {
        console.log('postImageError', e)
      })
    },
    submitWholePost () {
      api.addMoment({ name: 'zsh', moment: { 'content': this.inputText, 'pictureUrl': this.pictureUrl, 'likeList': null } }).then(re => {
        console.log('addMomentSuccess', re)
      }).catch(e => {
        console.log('addMomentError', e)
      })
    },

    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(this.imageUrl)
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
  position: relative;
  display: inline-block;
  width: 590px;

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
          .el-upload-dragger {
            width: 50px;
            height: 50px;
            line-height: 50px;
          }
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
