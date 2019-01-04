<template>
  <div>
    <div class="main"
         style="height: 1000px;">
      <el-scrollbar style=" height: 100%;">
        <div class="all">
          <div class="firstColunm">
            <lperson class="leftperson"></lperson>
            <list class="friends-list"></list>
          </div>
          <div class="secondColunm">
            <editor></editor>
            <stream />
          </div>
          <div class="thirdColunm">
            <recommend class="friends-recommand"></recommend>
          </div>
        </div>
      </el-scrollbar>
    </div>

  </div>
</template>

<script>
import lperson from '../common/leftpersonInfomation'
import editor from '../common/fullText'
import stream from '../common/momentStream'
import list from '../common/friendsList'
import recommend from '../common/friendsRecommend'

export default {
  data () {
    return {
    }
  },
  components: {
    editor: editor,
    stream: stream,
    lperson: lperson,
    list: list,
    recommend: recommend
  }
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  .all {
    display: inline-block;
    margin-top: 10px;
    .firstColunm {
      float: left;
      // display: inline-block;
      // position: relative;
      // width: 200px;
      .leftperson {
        margin-bottom: 20px;
        // height: 180px;
        // left: 20%;
      }
      .friends-list {
        margin-bottom: 20px;
        // left: 20%;
      }
    }
    .secondColunm {
      display: inline-block;
      position: relative;
    }
    .thirdColunm {
      // display: inline-block;
      float: right;
      position: relative;
    }
  }
}
</style>
