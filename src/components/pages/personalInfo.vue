<template>
  <div>
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

<style>
</style>
