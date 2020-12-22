<template>
	<view><button type="primary" @click="getOpenId()">获取OpeId</button></view>
</template>

<script>
export default {
	name: 'GetOpenId',
	data() {
		return {
			appid: 'wxb2b8c0fee6171509', //这里是我的appid，需要改成你自己的
			secret: 'badbe16ea8f2f53f6dfe58fb2db30487' //密钥也要改成你自己的
		};
	},
	methods: {
		getOpenId() {
			const self = this;
			uni.login({
				success: function(res) {
					if (res.code) {
						uni.getUserInfo({
							success: function(res) {
								console.log('存在code');
							}
						});
						var appid = self.appid; //这里是我的appid，需要改成你自己的
						var secret = self.secret; //密钥也要改成你自己的
						var openid = '';
						var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code';
						uni.request({
							url: url,
							data: {},
							method: 'GET',
							success: function(res) {
								var obj = {};
								obj.openid = res.data.openid;
								console.log('openid: ' + res.data.openid);
								obj.expires_in = Date.now() + res.data.expires_in;
							}
						});
					} else {
						console.log('获取用户登录态失败！' + res.errMsg);
					}
				}
			});
		}
	}
};
</script>

<style></style>
