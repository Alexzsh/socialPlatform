<template>
  <div>
    <el-button type="text" @click="getNotify">通知</el-button>
    <el-dialog title="通知信息" :visible.sync="dialogTableVisible" width="40%" top="10vh">
      <el-table :data="notifys">
        <el-table-column property="nameList.length"
                         label="点赞人数"
                         width="150"></el-table-column>
        <el-table-column property="nameList"
                         label="点赞好友"
                         width="150"></el-table-column>
        <el-table-column property="date"
                         label="点赞时间"
                         width="200"></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
import api from '../../api/api'
export default {

  name: 'notifyContent',
  data () {
    return {
      name: '',
      dialogTableVisible: false,
      notifys: [{
        momentId: '1',
        nameList: ['大健1号'],
        date: '2018-12-22 15:36:18'
      }, {
        momentId: '2',
        nameList: ['大健2号'],
        date: '2018-12-22 15:36:18'
      }, {
        momentId: '3',
        nameList: ['大健3号', '小健7号'],
        date: '2018-12-22 15:36:18'
      }, {
        momentId: '4',
        nameList: ['大健4号'],
        date: '2018-12-22 15:36:18'
      }]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {
        })
    },
    getNotify () {
      this.dialogTableVisible = true
      api.getMessages({name: this.name}).then(re => {
        console.log('agetMessagesSuccess', re)
      }).catch(e => {
        console.log('getMessagesError', e)
      })
    },
    confirmNotify () {
      api.getMessages({name: this.name}).then(re => {
        console.log('agetMessagesSuccess', re)
      }).catch(e => {
        console.log('getMessagesError', e)
      })
    }
  }
}
</script>
<style scoped>
  {

  }
</style>
// notifys: [{
//   momentId: '1',
//   nameList:["大健1号"],
//   date:'2018-12-22 15:36:18'
// }, {
//   momentId: '2',
//   nameList:["大健2号"],
//   date:'2018-12-22 15:36:18'
// }, {
//   momentId: '3',
//   nameList:["大健3号", "小健7号"],
//   date:'2018-12-22 15:36:18'
// }, {
//   momentId: '4',
//   nameList:["大健4号"],
//   date:'2018-12-22 15:36:18'
// }],36
