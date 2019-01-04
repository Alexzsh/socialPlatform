<template>
  <div>
    <!--<lperson class="leftperson"></lperson>-->
    <list class="friends-list"></list>
    <editor></editor>
    <stream />
    <recommend class="friends-recommand"></recommend>
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
