<template>
  <div>
    <!--<lperson class="leftperson"></lperson>-->
    <list class="friends-list"></list>
    <editor></editor>
    <stream />
  </div>
</template>

<script>
import lperson from  '../common/leftpersonInfomation'
import editor from '../common/fullText'
import stream from '../common/momentStream'

export default {
  data () {
    return {
    }
  },
  components: {
    editor: editor,
    stream: stream,
    lperson:lperson
  }
}
</script>

<style lang="scss" scoped>
.leftperson{
  float: left;
  position: relative;
  top: -500px;
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
