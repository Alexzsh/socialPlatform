<template>
  <div class="moment-stream">
    <div v-for="(moment, index) in moments"
         :key="index"
         class="moment-content">
      <div class="stream-header">
        <el-popover
          placement="left-start"
          trigger="hover"
          v-model="moment.floatVisible">
          <floatwindow></floatwindow>
          <div slot="reference" @mouseover="requestUserMsg(index)" @mouseleave="closeFloat(index)">
            <svg class="icon head-icon" aria-hidden="true">
              <use :xlink:href="'#favicon-default' + (moment.headIcon)"></use>
            </svg>
          </div>
        </el-popover>
        <div class="header-text">
          <span><strong>@{{ moment.userName }}</strong></span>
          <span> · {{ moment.releaseTime }}</span>
        </div>
      </div>
      <div class="stream-body">
        <div class="stream-body-content">
          <p>{{ moment.content }}</p>
        </div>
        <img :src="moment.pictureUrl"
             v-if="moment.pictureUrl">
      </div>
      <div class="stream-toolbar">
        <div v-if="isLike(index)"
             class="pic"
             @click="addLike(index)">
          <img :src="require('@/assets/cc-heart.png')">
        </div>
        <div v-else
             class="pic"
             @click="addLike(index)">
          <img :src="require('@/assets/heart.png')">
        </div>
        <span><strong>{{ moment.likeList.length }}</strong></span>
        <div class="like-list">
          <div v-for="(like, index1) in moment.likeList"
               :key="index1"
               class="like-list-icon">
            <svg class="icon head-icon"
                 aria-hidden="true">
              <use :xlink:href="'#favicon-default' + (like.headIcon)"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import floatWindow from './floating_window'
import store from '../../store'

export default {
  name: 'momentStream',
  data () {
    return {
      // name: this.$store.state.name,
      // headIcon: this.$store.state.headIcon,
      // moments: this.$store.state.momentStream
    }
  },
  components: {
    floatwindow: floatWindow
  },
  methods: {
    inArray: function (arr, item) {
      let _length = arr.length
      for (let i = 0; i < _length; i++) {
        if (arr[i].name === item) {
          return true
        }
      }
      return false
    },
    removeItem: function (arr, item) {
      let _length = arr.length
      for (let i = 0; i < _length; i++) {
        if (arr[i].name === item) {
          arr.splice(i, 1)
        }
      }
    },
    addLike: function (index) {
      if (this.inArray(this.moments[index].likeList, this.name)) {
        this.removeItem(this.moments[index].likeList, this.name)
      } else {
        this.moments[index].likeList.push({ 'name': this.name, 'headIcon': this.headIcon })
      }
    },
    requestUserMsg: function (index) {
      this.moments[index].floatVisible = true
    },
    closeFloat: function (index) {
      this.moments[index].floatVisible = false
    }
  },
  computed: {
    isLike () {
      return function (index) {
        return this.inArray(this.moments[index].likeList, this.name)
      }
    },
    name: () => { return store.state.name },
    headIcon: () => { return store.state.headIcon },
    moments: () => { return store.state.momentStream }
  }
}
</script>

<style lang="scss" scoped>
.moment-stream {
  display: block;
  width: 590px;
  min-height: 50px;
  padding: 10px;
  margin: 10px auto;
  border-bottom: 1px black;

  .moment-content:hover {
    background-color: rgb(245, 245, 245);
  }
  .stream-header {
    width: 100%;
    height: 30px;
    vertical-align: top;

    .head-icon {
      float: left;
      position: relative;
      left: 25px;
    }
    .header-text {
      position: relative;
      float: left;
      top: 5px;
      left: 20px;

      span {
        display: inline-block;
        width: 80px;
      }
    }
  }
  .stream-body {
    .stream-body-content {
      clear: both;
      position: relative;
      left: 50px;
      top: -30px;
      margin: 5px 50px;
      text-align: left;
    }
    img {
      margin: auto;
      max-width: 500px;
      max-height: 500px;
    }
  }
  .stream-toolbar {
    position: relative;
    left: 100px;
    margin: 5px auto;
    height: 30px;

    span {
      position: relative;
      left: -260px;
      top: -20px;
    }
    .pic {
      height: 20px;
      width: 20px;

      &:hover {
        cursor: pointer;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .like-list {
      position: relative;
      top: -44px;
      left: 50px;
      height: 30px;
      width: 400px;
      overflow: hidden;

      .like-list-icon {
        float: left;
        width: 30px;
        height: 30px;
        svg {
          height: 2em;
          width: 2em;
        }
      }
    }
  }
}
</style>
