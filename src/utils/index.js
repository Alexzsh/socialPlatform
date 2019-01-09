// this is for utils functions
let Person = [
  {
    name: '康天豪',
    headIcon: '1',
    className: 1801,
    momentsNumber: 3,
    friendsNumer: 6
  },
  {
    name: '任小健',
    headIcon: '2',
    className: 1802,
    momentsNumber: 1,
    friendsNumer: 9
  },
  {
    name: '王鹏程',
    headIcon: '3',
    className: 1803,
    momentsNumber: 3,
    friendsNumer: 6
  },
  {
    name: '孙露阳',
    headIcon: '4',
    className: 1801,
    momentsNumber: 0,
    friendsNumer: 3
  },
  {
    name: '闫豪',
    headIcon: '5',
    className: 1803,
    momentsNumber: 2,
    friendsNumer: 3
  },
  {
    name: '许康琪',
    headIcon: '6',
    className: 1804,
    momentsNumber: 2,
    friendsNumer: 3
  },
  {
    name: '施泰龙',
    headIcon: '7',
    className: 1806,
    momentsNumber: 2,
    friendsNumer: 5
  },
  {
    name: '黄健雄',
    headIcon: '8',
    className: 1801,
    momentsNumber: 1,
    friendsNumer: 2
  },
  {
    name: '肖文君',
    headIcon: '9',
    className: 1807,
    momentsNumber: 3,
    friendsNumer: 3
  },
  {
    name: '黄东东',
    headIcon: '10',
    className: 1801,
    momentsNumber: 2,
    friendsNumer: 8
  }
]

export default {
  getIconId: function (name) {
    for (let i = 0; i < Person.length; i++) {
      if (name === Person[i].name) {
        return Person[i].headIcon
      }
    }
  },
  getClassNumber: function (name) {
    return Person[Person.indexOf(name)].className
  },
  getLikeList: function (list) {
    let likeList = []
    list.forEach(item => {
      likeList.push({
        'name': item,
        'headIcon': this.getIconId(item)
      })
    })
    return likeList
  },
  getLikeList2: function (items) {
    let likeList = []
    items.forEach(item => {
      likeList.push({
        'name': item.name,
        'headIcon': this.getIconId(item.name)
      })
    })
    return likeList
  },
  getMomentsNumber: function (name) {
    for (let i = 0; i < Person.length; i++) {
      if (name === Person[i].name) {
        return Person[i].momentsNumber
      }
    }
  },
  getFriendsNumber: function (name) {
    for (let i = 0; i < Person.length; i++) {
      if (name === Person[i].name) {
        return Person[i].friendsNumer
      }
    }
  }
}
