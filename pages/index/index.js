// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    show:true
  },
  onLoad() {
  },
  bind:function(){
    this.setData({
      show:!this.data.show
    })
  }
})
