'use strict';
function getFormatDate(ms) {
    var date = new Date();
	date.setTime(date.getTime() + ms);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    var currentdate = year + '-' + month + '-' + strDate;
    return currentdate;
};


exports.main = async (event, context) => {
	const tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx9472d5ad54e879ed&secret=5c244*************72';
	// uniCloud.httpclient 发起请求
	const res = await uniCloud.httpclient.request(tokenUrl,
	{
		method: 'GET',
		dataType:"json"
	});
	//返回数据给客户端
	let access_token = res.data.access_token;
	const db = uniCloud.database();
	var now_date = getFormatDate(0);
	var next_date = getFormatDate(24*60*60*1000);
	console.log('access_token：' + access_token);
	  // 从云开发数据库中查询等待发送的消息列表
	const messages = await db
	.collection('messages')
	// 查询条件这里做了简化，只查找了状态为未发送的消息
	// 在真正的生产环境，可以根据开课日期等条件筛选应该发送哪些消息
	// .where({
	//   date: {"gte": now_date},
	// })
	.get();

	// 循环消息列表
	const sendPromises = messages.data.map(async message => {
	// 发送订阅消息
	const sendUrl = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=' + access_token;
	let send_data = {
			touser: message.data.touser,
			page: "pages/index/index",
			data: {
					  thing1: {
						  value: "惠吃会喝提醒你该吃饭了！",
					  },
					  thing4: {
						  value: message.data.data,
					  },
					  thing5: {
						  value: now_date,
					  } 
				  },
			template_id: message.data.templateId,
			};
	console.log(send_data);
	// uniCloud.httpclient 发起请求
	const sendres = await uniCloud.httpclient.request(sendUrl,
	{	
	data: send_data,
	method: 'POST',
	contentType: 'json',
	dataType:"json",
	},
	 function(error, response, body) {  
	    if (!error && response.statusCode == 200) {  
	        console.log(response) // 请求成功的处理逻辑
			// 发送成功后将消息的状态改为已发送
			db.collection('messages')
			.doc(message._id)
			.update({
			  data: {
				date: next_date,
			  },
			});
	    }  
	}
	);
})
};