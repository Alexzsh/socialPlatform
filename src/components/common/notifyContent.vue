<template>
  <div>
    <el-button type="text"
               @click="dialogTableVisible = true">通知</el-button>
    <el-dialog title="通知信息"
               :visible.sync="dialogTableVisible"
               width="40%"
               top="10vh">
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
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'notifyContent',
  data () {
    return {
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
      }],
      dialogTableVisible: false
    }
  }
}
</script>
<style scoped>
 {
}
</style>

<!--<div v-for="notify in notifys" :key="notify.momentId">-->
<!--<el-dialog title="通知信息" :visible.sync="dialogTableVisible"-->
<!--width="40%" top="10vh">-->
<!--<el-table>-->
<!--<el-table-column  label="动态ID" width="150"></el-table-column>-->
<!--<el-table-column  label="点赞人数" width="150">{{ notify.likeList}}</el-table-column>-->
<!--<el-table-column  label="点赞好友" width="150">{{notify.nameList}}</el-table-column>-->
<!--<el-table-column  label="点赞时间" width="200">{{notify.date}}</el-table-column>-->
<!--</el-table>-->
<!--</el-dialog>-->
<!--</div>-->
