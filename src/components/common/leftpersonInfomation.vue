<template>
  <el-card class="box-card"
           body-style="padding:0px">
    <a class="u-bgUserColor u-block"
       href="#"></a>
    <div class="lpost">
      <div class="person-header">
        <svg id="ficon"
             class="icon"
             aria-hidden="true">
          <use :xlink:href="'#favicon-default'+(person.iconId)"></use>
        </svg>
        <div class="person-name">
          <a class="person-u">@{{person.userName}}</a>
        </div>
      </div>
      <div class="person-text">
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
<style scoped lang='scss'>
.box-card {
  /*margin-bottom: 10px;*/
<<<<<<< HEAD

=======
  width:200px;
  height: 180px;
>>>>>>> 6b6a7407be1b0dfbe5ad253294e2613e8c6ada3d
  position: relative;
  .u-bgUserColor {
    background-color: #1da1f2 !important ;
  }
  .u-block {
    display: block !important;
    height: 70px;
    width: 100%;
    padding: 0;
  }
  .post {
    width: 100%;
    .person-name {
      font-weight: bold;
      font-size: 20px;
    }
    .person-content {
      font-size: 14px;
      padding-top: 25px;
      .pleft {
        position: absolute;
        left: 20px;
      }
      .pright {
        position: absolute;
        left: 95px;
      }
    }
  }
  #ficon {
    width: 78px;
    height: 78px;
    margin: -40px 0 0 0;
    float: left;
  }
}
</style>
