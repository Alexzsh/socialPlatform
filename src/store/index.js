// store login status

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    islogin: false,
    name: '',
    headIcon: '22',
    friendsList: [
      {
        name: '小健8号',
        headIcon: '3',
        friendsNum: 5,
        momentsNum: 10,
        className: '1802',
        floatVisible: false
      },
      {
        name: '小健10号',
        headIcon: '5',
        friendsNum: 15,
        momentsNum: 100,
        className: '1803',
        floatVisible: false
      },
      {
        name: '大健8号',
        headIcon: '7',
        friendsNum: 51,
        momentsNum: 20,
        className: '1804',
        floatVisible: false
      }
    ],
    momentStream: [
      {
        id: '1',
        userName: 'test',
        headIcon: '1',
        floatVisible: false,
        releaseTime: '2018-12-20',
        content: 'The Democrats are trying to belittle the concept of a Wall, calling it old fashioned. The fact is there is nothing else’s that will work, and that has been true for thousands of years. It’s like the wheel, there is nothing better. I know tech better than anyone, & technology.....',
        pictureUrl: 'https://hacks.mozilla.org/files/2017/06/firefox-logo.png',
        likeList: [
          {
            name: 'test',
            headIcon: '1'
          },
          {
            name: 'test2',
            headIcon: '2'
          },
          {
            name: 'testStore',
            headIcon: '22'
          }
        ]
      },
      {
        id: '2',
        userName: 'test2',
        headIcon: '2',
        floatVisible: false,
        releaseTime: '2018-12-21',
        content: '【萌寵版交通公益廣告爆紅】近日，廣東交通頻道發布一則交通公益廣告視頻。與以往交通公益廣告不同的是，這條廣告的主角都是“萌寵”，用狗狗的視頻剪輯加上配音，來闡釋“超載、追尾、分心、超速、疲勞駕駛”，提醒大家遵守交通規則。網友：追尾那個有點慘',
        pictureUrl: '',
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
        ]
      },
      {
        id: '2',
        userName: 'test2',
        headIcon: '2',
        floatVisible: false,
        releaseTime: '2018-12-21',
        content: '【萌寵版交通公益廣告爆紅】近日，廣東交通頻道發布一則交通公益廣告視頻。與以往交通公益廣告不同的是，這條廣告的主角都是“萌寵”，用狗狗的視頻剪輯加上配音，來闡釋“超載、追尾、分心、超速、疲勞駕駛”，提醒大家遵守交通規則。網友：追尾那個有點慘',
        pictureUrl: '',
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
        ]
      },
      {
        id: '2',
        userName: 'test2',
        headIcon: '2',
        floatVisible: false,
        releaseTime: '2018-12-21',
        content: '【萌寵版交通公益廣告爆紅】近日，廣東交通頻道發布一則交通公益廣告視頻。與以往交通公益廣告不同的是，這條廣告的主角都是“萌寵”，用狗狗的視頻剪輯加上配音，來闡釋“超載、追尾、分心、超速、疲勞駕駛”，提醒大家遵守交通規則。網友：追尾那個有點慘',
        pictureUrl: '',
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
        ]
      },
      {
        id: '2',
        userName: 'test2',
        headIcon: '2',
        floatVisible: false,
        releaseTime: '2018-12-21',
        content: '【萌寵版交通公益廣告爆紅】近日，廣東交通頻道發布一則交通公益廣告視頻。與以往交通公益廣告不同的是，這條廣告的主角都是“萌寵”，用狗狗的視頻剪輯加上配音，來闡釋“超載、追尾、分心、超速、疲勞駕駛”，提醒大家遵守交通規則。網友：追尾那個有點慘',
        pictureUrl: '',
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
        ]
      },
      {
        id: '2',
        userName: 'test2',
        headIcon: '2',
        floatVisible: false,
        releaseTime: '2018-12-21',
        content: '【萌寵版交通公益廣告爆紅】近日，廣東交通頻道發布一則交通公益廣告視頻。與以往交通公益廣告不同的是，這條廣告的主角都是“萌寵”，用狗狗的視頻剪輯加上配音，來闡釋“超載、追尾、分心、超速、疲勞駕駛”，提醒大家遵守交通規則。網友：追尾那個有點慘',
        pictureUrl: '',
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
        ]
      },
      {
        id: '2',
        userName: 'test2',
        headIcon: '2',
        floatVisible: false,
        releaseTime: '2018-12-21',
        content: '【萌寵版交通公益廣告爆紅】近日，廣東交通頻道發布一則交通公益廣告視頻。與以往交通公益廣告不同的是，這條廣告的主角都是“萌寵”，用狗狗的視頻剪輯加上配音，來闡釋“超載、追尾、分心、超速、疲勞駕駛”，提醒大家遵守交通規則。網友：追尾那個有點慘',
        pictureUrl: '',
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
        ]
      }
    ]
  },
  mutations: {
    login (state) {
      state.islogin = true
    },
    logout (state) {
      state.islogin = false
    },
    changeMomentStream (state, momentStream) {
      state.momentStream = momentStream
    },
    setName (state, name) {
      state.name = name
    }
  }
})

export default store
