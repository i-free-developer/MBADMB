Page({

  data: {
    location: { latitude: "31.232711", longitude: "121.47575499999994" },
    scale: '10',
    markers: []
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  onLoad: function () {
    var page = this
    const endpoint = 'https://easy-mock.com/mock/5a641f8a0ea0400cac5a91df/tesla/stores'

    wx.request({
      url: endpoint,
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log('success!' + res.statusCode);
        console.log(res)
        page.setData({ markers: res.data.stores })
      },
      fail: function (res) {

      },
      complete: function(res) {

      }
    })

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})
