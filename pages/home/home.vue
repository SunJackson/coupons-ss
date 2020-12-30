<template>
	<view>
		<view class="head">
			<view class="head-picture">	<open-data type="userAvatarUrl"></open-data></view>
			<view class="nickname"><open-data type="userNickName"></open-data> </view>
		</view>
		<view class="content">
			<uni-list>
				<uni-list-item clickable v-for="item, index in navList" :key="item.id" @click="goToLink(index)" :show-extra-icon="true" :extra-icon="item.icon" :title="item.title"/>
			</uni-list>
		</view>
	</view>
</template>
<style>
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
</style>
<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	export default {
		components: {
			uniSection,
			uniList,
			uniListItem,
			uniIcons
		},
		data() {
			return {
				navList: [ 
						{
							icon :{
									color: '#f4c242',
									size: '28',
									type: 'checkbox'
								},
							title: "领券提醒",
							type : 3,
							url: '',
						},
						{
							icon :{
									color: '#f4c242',
									size: '28',
									type: 'star'
								},
							title: "赞赏作者",
							url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/4bea1360-48ee-11eb-b997-9918a5dda011.jpg",
						},
						{
							icon :{
									color: '#f4c242',
									size: '28',
									type: 'person'
								},
							title: "关注作者",
							url: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/cdc27e40-4a65-11eb-b997-9918a5dda011.jpg",
						},
						{
							icon :{
									color: '#f4c242',
									size: '28',
									type: 'more'
								},
							title: "领拼多多优惠", 
							appid: "wx5beb3dc0c3575180",
							url: "/pages/link/link",
							type: 2,  
						},				
				]		
			}
		},onShareAppMessage(res) {
			if (res.from === 'button') {// 来自页面内分享按钮
			  console.log(res.target)
			}
			var messages = [{
				title: '美团饿了么大额红包，每日可领！',
				path: '/pages/index/index'
			},{
				title: '吃了这么多年外卖，你知道这个秘密吗？',
				path: '/pages/index/index'
			},{
				title: '这样点外卖，一年省下一个亿',
				path: '/pages/index/index'
			},{
				title: '点外卖前先领券，吃霸王餐',
				path: '/pages/index/index'
			},{
				title: '美团饿了么内部优惠券，手慢无',
				path: '/pages/index/index'
			},{
				title: '点外卖不用优惠券，你就out了',
				path: '/pages/index/index'
			},{
				title: '外卖不为人知的秘密，点这解密',
				path: '/pages/index/index'
			},{
				title: '震惊！小伙点外卖竟然花了1分钱',
				path: '/pages/index/index'
			},{
				title: '从这点外卖，你也可以吃霸王餐',
				path: '/pages/index/index'
			}];
			return messages[Math.floor(Math.random()*messages.length)]
		  },
		  
		  onShareTimeline: function() {
			  var messages = [{
			  	title: '美团饿了么大额红包，每日可领！',
			  	path: '/pages/index/index'
			  },{
			  	title: '吃了这么多年外卖，你知道这个秘密吗？',
			  	path: '/pages/index/index'
			  },{
			  	title: '这样点外卖，一年省下一个亿',
			  	path: '/pages/index/index'
			  },{
			  	title: '点外卖前先领券，吃霸王餐',
			  	path: '/pages/index/index'
			  },{
			  	title: '美团饿了么内部优惠券，手慢无',
			  	path: '/pages/index/index'
			  },{
			  	title: '点外卖不用优惠券，你就out了',
			  	path: '/pages/index/index'
			  },{
			  	title: '外卖不为人知的秘密，点这解密',
			  	path: '/pages/index/index'
			  },{
			  	title: '震惊！小伙点外卖竟然花了1分钱',
			  	path: '/pages/index/index'
			  },{
			  	title: '从这点外卖，你也可以吃霸王餐',
			  	path: '/pages/index/index'
			  }];
			  return messages[Math.floor(Math.random()*messages.length)]
		  },
		methods: {
			notify: function(){
					let templateId = 'hLV31-w38lq0yq8p6GEQUtBU7brtMrCFmaCCyxbU4xI';
					let openid = getApp().globalData.openid;
					console.log('订阅开始')
					uni.requestSubscribeMessage({
					  tmplIds: [templateId],
					  success (res) {
						 console.log(res)
						 if (res[templateId] == 'reject') {
							 uni.showToast({
								icon: 'none',
								title: '您拒绝了我明天就没提醒了哦',
								duration: 3000
							  });
							 return;
						 }
						 if (res[templateId] == 'ban') {
							 uni.showToast({
								icon: 'none',
								title: '请移步到设置打开订阅功能',
								duration: 3000
							 });
						    return;
						 };
						 uni.showLoading({
						   title: '订阅中...',
						 });
						 setTimeout(function () {
						     uni.hideLoading();
						 }, 5000);
						 // 活动开始提醒 模板
						 const data = {
						 		data: '外卖领券提醒, 快来领优惠券啦！',
						 		templateId: templateId,
						 		openid: openid,
						 		  };
						 
						 console.log(data)
						 uni.request({
						   url: getApp().globalData.subscribe,
						   data: data,
						   success: (res) => {
						 	  console.log(res);
						 	  wx.showToast({
						 		title: '订阅完成',
						 		icon: 'sucess',
						 		duration: 2000,
						 	  });
						 	},
						   fail(res) {
								console.log(res)
								wx.showToast({
								  title: '订阅失败',
								  image: '../../static/error.png',
								  duration: 2000,
								});
						   }
						 });
					  },
					  fail (res) {
					  	console.log(res)			  
					  }
					})
				},
			goToLink: function(index) {
				let item = this.navList[index]
				let type = item.type
				let url = item.url
				let appid = item.appid
				console.log(item)
				if (type == 2) { 
					wx.navigateToMiniProgram({
					  appId: appid,
					  path: url,
					  success(res) {
						// 打开成功
					  }
					})
				} else if (type == 3) {
					this.notify()   //领券提醒
				}else {
					console.log(url)
					  uni.previewImage({
					            urls: [url],
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
				}
				
			}
			
		}
	}
</script>

<style>

</style>
