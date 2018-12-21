<template>
  <div class="g-main">
    aaaafffff
    <div class="g-main-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalMain'
}
</script>

<style lang="scss" scoped>
.g-main {
  width: 100%;
  // min-height: 100vh;
  z-index: 4;
  position: fixed;
  // min-width: 1190px;
  // display: inline-block;

  background: #fff;
  .g-main-wrapper {
    width: 80%;
    position: relative;
    margin: 0 auto;
  }
}
</style>
