<template>
  <div class="index">
    <div>
      <gloabl-header />
    </div>
    <div>
      <global-main />
    </div>
  </div>
</template>

<script>

import Header from '../global/Header'
import Main from '../global/Main'
export default {
  components: {
    GloablHeader: Header,
    GlobalMain: Main
  },
  data () {
    return {

    }
  }
}
</script>

<style>
</style>
