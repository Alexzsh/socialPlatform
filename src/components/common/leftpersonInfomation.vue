<template>
  <el-card class="box-card">
    <a class="u-bgUserColor u-block"
       href="#"></a>
    <div class="post">
      <div class="person-header">
        <svg id="ficon"
             class="icon"
             aria-hidden="true">
          <use :xlink:href="'#favicon-default'+(person.iconId)"></use>
        </svg>
      </div>
      <div class="person-text">
        <div class="person-name">
          <a class="person-u">{{person.userName}}</a>
        </div>
        <div class="person-content">
          <div class="pleft">
            <span><strong>动态</strong></span>
            <span> {{ person.contentNum }}</span>
          </div>
          <div class="pright">
            <span><strong>好友人数</strong></span>
            <span>{{person.followeeNum}}</span>
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'personInfomation.vue',
  data () {
    return {
      person:
        {
          id: '1',
          userName: 'Test',
          iconId: '8',
          contentNum: '15',
          followeeNum: '25'
        }
    }
  }
}
</script>
<style scoped>
.box-card {
  width: 420px;
  height: 280px;
  margin-bottom: 10px;
  position: relative;
}
.u-bgUserColor {
  background-color: #1da1f2 !important ;
}
.u-block {
  display: block !important;
  height: 140px;
  width: 100%;
  padding: 0;
}
.person-name {
  position: absolute;
  width: 185px;
  left: 85px;
  top: 145px;
  font-weight: bold;
  font-size: 28px;
}
.person-content {
  font-size: 20px;
  padding-top: 70px;
  padding-left: 55px;
}
.post {
  width: 398px;
}
.pleft {
  float: left;
}
#ficon {
  width: 120px;
  height: 120px;
  margin: -70px 0 0 8px;
  float: left;
}
</style>
