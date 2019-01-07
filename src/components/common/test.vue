<template>

  <iframe id="iframe-container"
          height="1000px"
          width="800px"
          src='static/index1.html'></iframe>
  <!-- <index /> -->

</template>

<script>
// import index from '../../static/index.html'
export default {
  components: {
    // index: index
  },
  data () {
    return {
      // src: require('../../static/index.html'),
      days: [
        '一', '二', '三', '四', '五', '六', '七'
      ],
      tableData3: [{
        date: '2016-05-03',
        name: '王小虎',
        dayList: [0, 1, 2, 3, 4, 5, 6]
      }]
    }
  },
  methods: {
    dayFormatter (row, column) {
      var dayList = row.dayList
      var ix = this.days.indexOf(column.label)
      if (ix === -1 || ix >= dayList.length) return
      return row.dayList[ix]
    }
  }
  // mounted () {
  //   let a = document.createElement('iframe-container')

  //   a.src = ('static/index1.html')
  //   // a.src = 'https://www.baidu.com'
  // }
}
</script>
