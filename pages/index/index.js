// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgviewshow:false
  },
  onLoad() {
  },
  bind:function(){
    this.setData({
      imgviewshow:!this.data.imgviewshow
    })
  }
})
