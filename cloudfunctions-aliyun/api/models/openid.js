// 后台获取openid
async function getOpenId(jsCode){
	let appid = 'wx9472d5ad54e879ed'; //这里是我的appid，需要改成你自己的
	let secret = '5c2449c4***********ea2d572'; //密钥也要改成你自己的
	var url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + jsCode + '&grant_type=authorization_code';
	console.log(url)
	const sendres = await uniCloud.httpclient.request(url,
	{	
	data: {},
	method: 'GET',
	contentType: 'json',
	dataType:"json",
	}
	);
	console.log(sendres.data.openid);
	return sendres.data.openid;
};

module.exports = getOpenId;