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

<img src="https://github.com/SunJackson/coupons-ss/raw/dev/examples/index.png" width="300"/>
<img src="https://github.com/SunJackson/coupons-ss/raw/dev/examples/eatwhat.png" width="300"/>
<img src="https://github.com/SunJackson/coupons-ss/raw/dev/examples/home.png" width="300"/>


### 使用方法

源码为uniapp项目，需下载hbuilder导入项目打包，可编译成h5或小程序(跳转地址为小程序路径)

[参考文档](https://mp.weixin.qq.com/s/svrd4CSaArtP44m_8JNzNg)


### 常见问题
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

已上线案例：

<img src="[](https://github.com/SunJackson/coupons-ss/raw/dev/examples)/惠吃会喝.png" width="200"/>


如有线上案例或疑问，请提issue
