<template>
  <div>
    <div class="main"
         style="height: 1000px;">
      <el-scrollbar style=" height: 100%;">
        <div class="firstColunm">
          <lperson class="leftperson"></lperson>
          <list class="friends-list"></list>
        </div>
        <editor></editor>
        <stream />

        <recommend class="friends-recommand"></recommend>

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
  .firstColunm {
  }
}
.leftperson {
  float: left;
  position: relative;
  top: 0px;
}
.friends-list {
  float: left;
  position: absolute;
  top: 300px;
}

.friends-recommand {
  float: right;
  position: relative;
  top: -500px;
}
</style>
