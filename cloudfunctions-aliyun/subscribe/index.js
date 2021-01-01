'use strict';
const db = uniCloud.database();
const response = require('response')

function getFormatDate(ms) {
    let date = new Date();
	date.setTime(date.getTime() + ms);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = '0' + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate;
    }
    let currentdate = year + '-' + month + '-' + strDate;
    return currentdate;
}

exports.main = async (event, context) => {
  
	console.log(event);
	if (event.queryStringParameters) {
		try {
			const result = await db.collection('messages').add({
				touser: event.queryStringParameters.openid, // 订阅者的openid
				page: 'pages/index/index', // 订阅消息卡片点击后会打开小程序的哪个页面
				data: event.queryStringParameters.data, // 订阅消息的数据
				templateId: event.queryStringParameters.templateId, // 订阅消息模板ID
				subscribeDate: getFormatDate(0), // 创建时间
				sendDate: '', //发送时间
				send: false
			  });
			  return result;
		} catch (err) {
			  console.log(err);
			  return response.error('订阅失败！');
		}
	
	}else{
		return response.error('未入传参数！');
	}
};
