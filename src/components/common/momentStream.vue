<template>
  <div class="moment-stream">
    <div v-for="moment in moments" :key="moment.id" class="moment-content">
      <div class="stream-header">
        <svg class="icon head-icon" aria-hidden="true">
          <use :xlink:href="'#favicon-default' + (moment.headIcon)"></use>
        </svg>
        <div class="header-text">
          <span><strong>@{{ moment.userName }}</strong></span>
          <span> · {{ moment.releaseTime }}</span>
        </div>
      </div>
      <div class="stream-body">
        <div class="stream-body-content"><p>{{ moment.content }}</p></div>
        <img :src="moment.pictureUrl" v-if="moment.pictureUrl">
      </div>
      <div class="stream-toolbar">
        <div v-if="inArray(moment.likeList, moment.id)" class="pic">
          <img :src="require('@/assets/cc-heart.png')">
        </div>
        <div v-else class="pic">
          <img :src="require('@/assets/heart.png')">
        </div>
        <span><strong>{{ moment.likeList.length }}</strong></span>
        <div class="like-list">
          <div v-for="(likeId, index) in moment.likeList" :key="index" class="like-list-icon">
            <svg class="icon head-icon" aria-hidden="true">
              <use :xlink:href="'#favicon-default' + (likeId)"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'momentStream',
  data () {
    return {
      moments: [
        {
          id: '1',
          userName: 'test',
          headIcon: '1',
          releaseTime: '2018-12-20',
          content: 'The Democrats are trying to belittle the concept of a Wall, calling it old fashioned. The fact is there is nothing else’s that will work, and that has been true for thousands of years. It’s like the wheel, there is nothing better. I know tech better than anyone, & technology.....',
          // pictureUrl: 'https://hacks.mozilla.org/files/2017/06/firefox-logo.png',
          likeList: ['1', '3']
        },
        {
          id: '2',
          userName: 'test2',
          headIcon: '2',
          releaseTime: '2018-12-21',
          content: '【萌寵版交通公益廣告爆紅】近日，廣東交通頻道發布一則交通公益廣告視頻。與以往交通公益廣告不同的是，這條廣告的主角都是“萌寵”，用狗狗的視頻剪輯加上配音，來闡釋“超載、追尾、分心、超速、疲勞駕駛”，提醒大家遵守交通規則。網友：追尾那個有點慘',
          pictureUrl: '',
          likeList: ['1', '5', '6', '1', '5', '6', '5', '6', '1', '5', '6', '5', '6', '1', '5', '6']
        }
      ]
    }
  },
  methods: {
    inArray (arr, item) {
      let _length = arr.length
      for (let i = 0; i < _length; i++) {
        if (arr[i] === item) {
          return true
        } else {
          return false
        }
      }
    }
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

  .moment-content:hover{
    background-color: rgb(245, 245, 245)
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