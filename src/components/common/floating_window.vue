<template>
  <div class="float_windows">
    <el-card class="box-card">
      <a class="fu-bgUserColor fu-block"
         href="#"></a>
      <div class="fpost">
        <div class="fperson-header">
          <svg id="ficon"
               class="icon"
               aria-hidden="true">
            <use :xlink:href="'#favicon-default'+(person.iconId)"></use>
          </svg>
          <div v-if="true">
            <el-button type="danger"
                       round
                       class="concern">已是好友</el-button>
          </div>
          <div v-else>
            <el-button type="danger"
                       round
                       class="concern">添加好友</el-button>
          </div>
        </div>
        <div class="fperson-text">
          <div class="fperson-name">
            <a class="fperson-u">@{{person.name}}</a>
          </div>
          <div class="fperson-content">
            <div class="fleft">
              <span><strong>动态</strong></span>
              <span> {{ person.momentCount }}</span>
            </div>
            <div class="fright">
              <span><strong>好友人数</strong></span>
              <span>{{person.likeList.length}}</span>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'floating_window',
  data () {
    return {
      person:
        {
          id: '2',
          name: '小健8号',
          iconId: '9',
          momentCount: '5',
          likeList: [
            {
              name: 'test1',
              headIcon: '1'
            },
            {
              name: 'test2',
              headIcon: '2'
            },
            {
              name: 'test3',
              headIcon: '1'
            }
          ],
          followeeNum: '20'
        }
    }
  },
  computed: {
    isLike () {
      return function (index) {
        return this.inArray(this.moments[index].likeList, this.name)
      }
    }
  }
}
</script>
<style scoped>
.box-card {
  width: 420px;
  height: 320px;
  margin-bottom: 10px;
  position: relative;
}
.fu-bgUserColor {
  background-color: #1da1f2 !important ;
}
.fu-block {
  display: block !important;
  height: 100px;
  width: 100%;
  padding: 0;
}
.fperson-name {
  position: absolute;
  left: 50px;
  top: 185px;
  font-weight: bold;
  font-size: 28px;
}
.fperson-content {
  font-size: 20px;
  padding-top: 85px;
  padding-left: 55px;
}
.concern {
  margin-top: 20px;
}
.fpost {
  width: 420px;
}
.fleft {
  float: left;
}
#ficon {
  width: 120px;
  height: 120px;
  margin: -45px 0 0 8px;
  float: left;
}
</style>
