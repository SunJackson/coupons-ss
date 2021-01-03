<template>
	<view class="container">
		<view class="head">
			<view class="head-picture">	<open-data type="userAvatarUrl"></open-data></view>
			<view class="nickname"><open-data type="userNickName"></open-data> </view>
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
				<image class="icon" src="/static/pdd.png"></image>
				<button class="content share" @click="goToMini('pdd')">
					<view>领优惠券</view>
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
			userInfo: ''
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
		goToMini: function(mini){
			if (mini === 'pdd'){
				wx.navigateToMiniProgram({
				  appId: "wx5beb3dc0c3575180",
				  path: "pages/index/index",
				  success(res) {
					// 打开成功
					console.log('打开成功')
				  }
				})
			}
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