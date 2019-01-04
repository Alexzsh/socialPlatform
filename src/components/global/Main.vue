<template>
  <div class="g-main">

    <div class="g-main-wrapper">
      <personalInfo />
    </div>
  </div>
</template>

<script>
import personalInfo from '../pages/personalInfo'
export default {
  name: 'GlobalMain',
  data () {
    return {
      num: 300
    }
  },
  components: {
    personalInfo: personalInfo
  }
}
</script>

<style lang="scss" scoped>
.g-main {
  width: 100%;
  // min-height: 100vh;
  z-index: 4;
  position: relative;
  // min-width: 1190px;
  display: inline-block;

  background: #fff;
  .g-main-wrapper {
    width: 100%;
    position: relative;
    margin: 0 auto;
  }
}
</style>
