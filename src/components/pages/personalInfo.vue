<template>
  <div>
    <list class="friends-list"></list>
    <editor></editor>
    <stream />
  </div>
</template>

<script>
import editor from '../common/fullText'
import stream from '../common/momentStream'
import friendsList from '../common/friendsList'

export default {
  data () {
    return {

    }
  },
  components: {
    editor: editor,
    stream: stream,
    list: friendsList
  }
}
</script>

<style lang="scss" scoped>
.friends-list {
  float: left;
  position: relative;
  top: 300px;
}
</style>
