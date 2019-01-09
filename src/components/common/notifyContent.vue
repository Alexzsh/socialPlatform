<template>
  <div>
    <el-button type="text" @click="getNotify">通知</el-button>
    <el-dialog title="通知信息" :visible.sync="dialogTableVisible" width="25%" top="10vh">
      <el-table :data="notifys"  size="mini" stripe>
          <el-table-column prop="likeList.length" label="点赞数" width="100" ></el-table-column>
          <el-table-column label="点赞好友" width="100">
            <template slot-scope="scope">
                 <span v-for="(like,index) in scope.row.likeList" :key="index">
                   {{like.name}}<br>
                 </span>
              </template>
            </el-table-column>
          <el-table-column label="点赞时间" width="100">
            <template slot-scope="scope">
                 <span v-for="(like,index) in scope.row.likeList" :key="index">
                   {{like.time}}<br>
                 </span>
            </template>
          </el-table-column>
        </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button size="mini"  @click="dialogTableVisible = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="confirmNotify">确 定</el-button>
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
      name: '小健',
      dialogTableVisible: false,
      notifys: [
        {
          momentId: 145,
          likeList: [
            {
              name: '许康琪',
              time: '2019-01-04 '
            },
            {
              name: '任小健',
              time: '2019-01-04 '
            }
          ]
        },
        {
          momentId: 144,
          likeList: [
            {
              name: '康天豪',
              time: '2019-01-04 '
            },
            {
              name: '孙露阳',
              time: '2019-01-04 '
            }
          ]
        }
      ]
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
      api.getMessages({ name: this.name }).then(re => {
        console.log('getMessagesSuccess', re)
      }).catch(e => {
        console.log('getMessagesError', e)
      })
    },
    confirmNotify () {
      this.dialogTableVisible = false
      api.confirmMessages({ name: this.name }).then(re => {
        console.log('confirmMessagesSuccess', re)
      }).catch(e => {
        console.log('confirmMessagesError', e)
      })
    }
  }
}
</script>
<style lang="scss">
  .el-dialog__header {
    padding: 10px 10px 10px;
    background-color: #1DA1F2 !important;
  }
  .el-dialog__body{
    pading:2px 10px;
  }
  .el-dialog__body{
    padding:10px 20px 10px;
  }
</style>
