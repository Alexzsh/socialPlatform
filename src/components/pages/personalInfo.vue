<template>
  <div>
    <list class="friends-list"></list>
    <editor></editor>
    <stream />
    <recommend class="friends-recommand"></recommend>
  </div>
</template>

<script>
import editor from '../common/fullText'
import stream from '../common/momentStream'
import friendsList from '../common/friendsList'
import friendsRecommend from '../common/friendsRecommend'

export default {
  data () {
    return {

    }
  },
  components: {
    editor: editor,
    stream: stream,
    list: friendsList,
    recommend: friendsRecommend
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
