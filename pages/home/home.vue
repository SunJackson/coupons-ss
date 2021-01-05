<template>
	<view class="container">
		<view class="head">
			<view class="head-picture">	<open-data type="userAvatarUrl"></open-data></view>
			<view class="nickname"><open-data type="userNickName"></open-data> </view>
		</view>
		<view class="section">
		  <view class="section-top">
		    <text class="section-text">有趣小程序</text>
		  </view>
		  <view class="section-bottom">
		    <view v-for="(item, index) in otherMiniPrograms" :key="index" class="section-bottom-item" @tap="toOtherMiniPrograms" :data-index="index">
		      <image :src="item.icon" mode="aspectFit"></image>
		      <text>{{item.name}}</text>
		    </view>
		  </view>
		</view>

		<view class="others">
			<view class="item">
				<image class="icon" src="/static/subscribe.png"></image>
				<button class="content share"  @click="onSubscribe()">
					<view>订阅提醒</view>
					<image class="right" src="/static/right_h.png"></image>
				</button>
			</view>
			<view class="item">
				<image class="icon" src="/static/user_share.png"></image>
				<button class="content share" open-type="share">
					<view>分享好友</view>
					<image class="right" src="/static/right_h.png"></image>
				</button>
			</view>
			<view class="item">
				<image class="icon" src="/static/user_hezuo.png"></image>
				<button class="content share" @click="goToImage('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/320ec300-4b05-11eb-8a36-ebb87efcf8c0.jpg')">
					<view>赞赏作者</view>
					<image class="right" src="/static/right_h.png"></image>
				</button>
			</view>
			<view class="item">
				<image class="icon" src="/static/user_kefu.png"></image>
				<button class="content share" open-type="contact">
					<view>在线客服</view>
					<image class="right" src="/static/right_h.png"></image>
				</button>
			</view>
		</view>
		<view class="version">
			v1.0
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: '',
			otherMiniPrograms: [{
			icon: "../../static/waimai.png",
			name: "购物领券",
			appId: "wx5beb3dc0c3575180",
			path: "/pages/index/index"
			  }],
			};
	},
	onLoad() {
		this.userInfo = getApp().globalData.userInfo
	},
	onShareAppMessage(res) {
		return getApp().shareConfig();
	},
	methods: {
		/*登录 */
		onGotUserInfo(e) {
			this.userInfo = e.detail.userInfo
			uni.setStorageSync('userInfo', e.detail.userInfo);
		},
		goToImage: function(imagePath){
			uni.previewImage({
				urls: [imagePath],
				longPressActions: {
					itemList: ['发送给朋友', '保存图片', '收藏'],
					success: function(data) {
						console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
					},
					fail: function(err) {
						console.log(err.errMsg);
					}
				}
			});
		},
		toOtherMiniPrograms: function (e) {
		  const index = e.currentTarget.dataset.index;
		  uni.navigateToMiniProgram({
		    appId: this.otherMiniPrograms[index].appId,
		    path: this.otherMiniPrograms[index].path
		  });
		},
		onSubscribe: function(){
			getApp().onSubscribe();
		},
		
	}
};
</script>

<style lang="scss">
page {
	background: #f8f8f8;
}
.container {
	padding-bottom: 20rpx;
}

.head{
	background-color: #FFFFFF;
	padding: 40upx;
	margin-bottom: 30upx;
	display: flex;
	flex-direction: row;
	align-items: center
}
.head-picture{
	width: 100upx;
	height: 100upx;
	background: #fff;
	border: 5upx solid #fff;
	border-radius: 50%;
	overflow: hidden;
}
.nickname{
	margin-left: 30upx;
	font-size: 36upx;
	font-weight: 500;
	text-align: left;
}

.section {
  width: 100vw;
  background-color: white;
  margin-top: 20rpx;
}
.section-top {
  width: 100vw;
  display: flex;
  align-items: center;
  height: 60rpx;
}
.section-text {
  font-size: 30rpx;
  font-weight: bold;
  margin-left: 20rpx;
}
.section-bottom {
  width: calc(100vw - 60rpx);
  padding: 30rpx;
  display: flex;
}
.section-bottom-item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.section-bottom-item image {
  width: 10vw;
  height: 10vw;
}
.section-bottom-item text {
  color: #707070;
  font-size: 24rpx;
  text-align: center;
}
.others {
	margin: 20rpx 0;
	background: #fff;
}
.others .item {
	display: flex;
	align-items: center;
	width: 690rpx;
	padding: 0 30rpx;
	border-bottom: 1px solid #ededf0;
}
.others .item:last-child {
	border-bottom: none;
}
.others .item .icon {
	width: 50rpx;
	height: 50rpx;
	margin-right: 30rpx;
}
.others .item .content {
	width: 620rpx;
	padding: 30rpx 0;
	display: flex;
	align-items: center;
	font-size: 34rpx;
	color: #333;
}
.others .item .content.share {
	background: none;
	text-align: left;
	border: none;
	line-height: normal;
}
.others .item .content.share::after {
	border: none;
}
.others .item .content .right {
	width: 25rpx;
	height: 25rpx;
	margin-left: auto;
}
.version{
	position: fixed;
	bottom: 20rpx;
	display: block;
	width: 100%;
	text-align: center;
	font-size: 28rpx;
	color: #666;
}
</style>