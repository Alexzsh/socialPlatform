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

export default {
  data () {
    return {
    }
  },
  components: {
    editor: editor,
    stream: stream
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
