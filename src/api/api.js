import axios from 'axios'

// axios.defaults.withCredentials = true

const server = axios.create({
  baseURL: 'http://139.199.221.89:8083/', // change to our ip
  timeout: 5000
})
const apiDes = [{
  fun: 'addMoment',
  url: 'moment/addMoment',
  method: 'post',
  params: ['moment', 'name']
}, {
  fun: 'register',
  url: 'person/addregister',
  method: 'post',
  params: ['name', 'password', 'sex', 'classNumber', 'captcha']
}, {
  fun: 'login',
  url: 'login',
  method: 'post',
  params: ['name', 'password']
}, {
  fun: 'logout',
  url: 'logout',
  method: 'post'
}, {
  fun: 'getMessages',
  url: 'message/getMessages',
  method: 'post',
  params: ['name']
}, {
  fun: 'confirmMessages',
  url: 'message/confirmMessages',
  method: 'post',
  params: ['name']
}, {
  fun: 'viewAllRepositoryMoments',
  url: 'moment/viewAllRepositoryMoments',
  method: 'get'
}, {
  fun: 'viewFriendInformation',
  url: 'person/viewFriendInformation',
  method: 'post',
  params: ['myname', 'friendname']
}, {
  fun: 'getFriendsRecommend',
  url: 'person/recommend',
  method: 'post',
  params: ['name']
}]

// 由接口描述生成接口调用函数
function ApiGenerator (des) {
  const api = {}
  for (const i in des) {
    api[des[i].fun] = function (data) {
      for (const j in des[i].params) {
        if (!(({}).hasOwnProperty.call(data, des[i].params[j]))) {
          return (
            Promise.reject(new Error("des[i].params[j] + ' not in params'"))
          )
        }
      }
      // eslint-disable-next-line
      console.log(des[i].fun, data);
      return server({
        url: des[i].url,
        method: des[i].method,
        data
      })
    }
  }
  return api
}

const api = ApiGenerator(apiDes)

export default api
