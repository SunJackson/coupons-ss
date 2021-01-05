### 更新日志 12.31
- 修改个人中心关注公众号按钮点击跳转
- 吃什么页面添加分享功能

![功能展示](https://github.com/SunJackson/coupons-ss/raw/dev/examples/7057e518bd7fbb71c3e182bf208aeeda.gif)

### 更新日志 12.30
- 添加吃什么页面

### 更新日志 12.28

- 添加首页排序功能
- 修复订阅功能无法更改发送状态
- 增加缓存openid功能
- 添加个人中心

### 更新日志 12.22

- 新增订阅功能
- 新增右上角提醒收藏

本项目基于[zwpro的外卖CPS添加功能开发](https://github.com/zwpro/coupons)，如果想要看原始代码请移步[这里](https://github.com/zwpro/coupons)


# 美团饿了吗CPS红包，别人领红包下单，你拿推广佣金

<img src="https://github.com/SunJackson/coupons-ss/raw/dev/examples/index.png" width="300"/><img src="https://github.com/SunJackson/coupons-ss/raw/dev/examples/eatwhat.png" width="300"/><img src="https://github.com/SunJackson/coupons-ss/raw/dev/examples/home.png" width="300"/>


### 使用方法

源码为uniapp项目，需下载hbuilder导入项目打包，可编译成h5或小程序(跳转地址为小程序路径)

[使用uniapp开发小程序](https://mp.weixin.qq.com/s/svrd4CSaArtP44m_8JNzNg)
[从零搭建外卖CPS平台-胶囊提示+排序](https://mp.weixin.qq.com/s/3Hu0CL4viSPp3i0PpQjz4g)
[从零搭建外卖CPS平台-添加个人中心](https://mp.weixin.qq.com/s/GfEkF-Klx-PuNP5L-88TZw)
[从零搭建外卖CPS平台-添加订阅功能](https://mp.weixin.qq.com/s/kfKSuhHQTo6ZVvwTTgisfw)
[从零搭建外卖CPS平台-添加吃什么](https://mp.weixin.qq.com/s/vFYNpbNb8wV_r4MraAwZpw)


### 常见问题
### 
1. [如何获取美团饿了吗的推广链接](https://mp.weixin.qq.com/s/9EdkRBYL_O_OetzBT2rldw)

美团联盟：https://union.meituan.com/

饿了么、双十一：https://pub.alimama.com/

​	2.如何打包成小程序

编译成小程序的话，需要配置coupons里小程序路径

比如跳转饿了么小程序：

```
minapp: {
    appid: 'wxece3a9a4c82f58c9',
    path: 'pages/sharePid/web/index?scene=https://s.click.ele.me/wR9ecuu'
}
```

2. 如何使用云函数
上传云函数前修改cloudfunctions-aliyun/common/utils/index.js
```
exports.APPID = 'wx9472d5ad54e879ed';  //这里是我的appid，需要改成你自己的
exports.SECREAT = '7fefd*************65778a';   //密钥也要改成你自己的
```
[一些关于订阅功能的常见问题](https://mp.weixin.qq.com/s/0RGdoj9iN92gKSWHK8HoVw)


已上线案例：

<img src="[](https://github.com/SunJackson/coupons-ss/raw/dev/examples)/惠吃会喝.png" width="200"/>


如有线上案例或疑问，请提issue，或者关注微信公众号【猿起缘落】
