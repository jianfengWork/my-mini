// pages/basic/basic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    languageList: [
      { name: '有需求', sel: false },
      { name: '成交', sel: false },
      { name: '不成交', sel: true }
    ], 
    date: '2016-09-01',
    height: 20,
    focus: false,
    text: '123',
     index: 0,
    array: ['美国', '中国', '巴西', '日本'],
    rotateClass: '',
    translateClass: '',
    food: [
      { name: '苹果', price: 10, num: 2, id: 1 },
      { name: '香蕉', price: 5, num: 1, id: 2 }
    ],
    total: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.totalAll(this.data.food)
  },
  reduce(e) {
    let current = e.currentTarget.dataset.items
    let foods = this.data.food
    for (let i in foods) {
      if (foods[i].id === current.id) {
        if (foods[i].num > 1) {
          let number = 'food[' + i + '].num' // 改变数组的某一项
          let nums = --foods[i].num
          this.setData({
            [number]: nums
          })
          // console.log(this.data.food)
          this.totalAll(this.data.food)
        }
      }
    }
  },
  add(e) {
    let current = e.currentTarget.dataset.items
    let foods = this.data.food
    for (let i in foods) {
      if (foods[i].id === current.id) {
        let number = 'food[' + i + '].num' // 改变数组的某一项
        let nums = ++foods[i].num
        this.setData({
          [number]: nums
        })
        // console.log(this.data.food)
        this.totalAll(this.data.food)
      }
    }
  },
  del(e) {
    let current = e.currentTarget.dataset.items
    let foods = this.data.food
    for (let i in foods) {
      if (foods[i].id === current.id) {
        foods.splice(foods[i], 1)
        this.setData({
          food: foods
        })
        this.totalAll(this.data.food)
      }
    }
  },
  totalAll(arr) {
    let sum = 0
    for (let i in arr) {
      sum += arr[i].num * arr[i].price
    }
    this.setData({
      total: sum
    })
  },
  triggerTransition() {
    if (this.data.rotateClass == 'yuan-rotate') {
      this.setData({
        rotateClass: '',
        translateClass: ''
      })
    } else {
      this.setData({
        rotateClass: 'yuan-rotate',
        translateClass: 'chang-translate'
      })
    }
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange(e) {
    console.log(this.data.array[e.detail.value] )
    this.setData({
      index: e.detail.value
    })
  },
  select(e) {
    let val = e.currentTarget.dataset.name
    for (let item in this.data.languageList) {
      let price = 'languageList[' + item + '].sel' // 改变数组的某一项
      if (this.data.languageList[item].name === val && this.data.languageList[item].sel === false) {

        this.setData({
          [price]: true
        })
      } else if (this.data.languageList[item].name === val && this.data.languageList[item].sel === true) {
        
        this.setData({
          [price]: false
        })
      }
    }
    // console.log(this.data.languageList)
  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit(e) {
    console.log(e.detail.value.textarea)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})