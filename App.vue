<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		const userInfo = uni.getStorageSync('userInfo');
		if(userInfo){
			this.globalData.userInfo = userInfo
		};
	
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		api: {
			home: 'https://a5e34042-88d6-4543-9150-b009f8d79d2d.bspapp.com/http/api/home',
			openid: 'https://a5e34042-88d6-4543-9150-b009f8d79d2d.bspapp.com/http/api/openid',
		},
		subscribe: 'https://a5e34042-88d6-4543-9150-b009f8d79d2d.bspapp.com/http/subscribe',
		openid: '',
		userInfo: '',
	},
	methods: {
			shareConfig(){
				var messages = [
					{   "title": "美团饿了么大额红包，每日可领！",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png",
					}
					,{
						"title": "吃了这么多年外卖，你知道这个秘密吗？",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					},{
						"title": "这样点外卖，一年省下一个亿",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					},{
						"title": "点外卖前先领券，吃霸王餐",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					},{
						"title": "美团饿了么内部优惠券，手慢无",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					},{
						"title": "点外卖不用优惠券，你就out了",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					},{
						"title": "外卖不为人知的秘密，点这解密",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					},{
						"title": "震惊！小伙点外卖竟然花了1分钱",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					},
					{
						"title": "从这点外卖，你也可以吃霸王餐",
						"path": "/pages/index/index",
						"imageUrl" : "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-17414whos6vp2f68cb/7ea058d0-4d8c-11eb-a16f-5b3e54966275.png"
					}
				];
				return messages[Math.floor(Math.random()*messages.length)];
			},
			onSubscribe(){
				let templateId = 'hLV31-w38lq0yq8p6GEQUtBU7brtMrCFmaCCyxbU4xI';
				let openid = this.globalData.openid;
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
			}
		}
};
</script>

<style>

</style>
