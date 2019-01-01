<template>
  <div>
    <list class="friends-list"></list>
    <editor></editor>
    <stream />
    <recommand class="friends-recommand"></recommand>
  </div>
</template>

<script>
import editor from '../common/fullText'
import stream from '../common/momentStream'
import friendsList from '../common/friendsList'
import friendsRecommand from '../common/friendsRecommand'

export default {
  data () {
    return {

    }
  },
  components: {
    editor: editor,
    stream: stream,
    list: friendsList,
    recommand: friendsRecommand
  }
}
</script>

<style lang="scss" scoped>
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
