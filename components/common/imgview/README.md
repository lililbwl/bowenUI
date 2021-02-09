# ImgView
	
图片预览

maintainers：秋呈

------

外部依赖：无

## 引用示例

```minipro
.wxml
<ImgView bindtap="bind" wx:if="{{imgviewshow}}" src="https://www.hmbstudio.cn/images/gzh.jpg" mode="aspectFit" bgcolor="red" ></ImgView>

.js
data: {
    imgviewshow:true
},
bindimgviewshow:function(){
  this.setData({
    imgviewshow:!this.data.imgviewshow
  })
}
```


## 接口定义


### 属性定义
    
| 属性名称| 类型 | 默认值|说明 |
|------|-----|------|------|
|src|string|空|图片链接|
|mode|string|aspectFit|图片裁剪、缩放的模式｜
|bgcolor｜string｜rgba(235,235,235,0.5)、red｜背景色|

### 事件定义
| 事件名称|参数|说明 |
|------|-----------|------|

