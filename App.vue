<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
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
			subscribe: 'https://a5e34042-88d6-4543-9150-b009f8d79d2d.bspapp.com/http/subscribe',
		},
		openid: ''
	}

};
</script>

<style>

</style>
