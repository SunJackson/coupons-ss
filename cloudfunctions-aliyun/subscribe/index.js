const db = uniCloud.database();

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
}

exports.main = async (event, context) => {
	
  try {
	console.log(event);
    const result = await db.collection('messages').add({
		_id: event.queryStringParameters.openid,
		data: {
			touser: event.queryStringParameters.openid, // 订阅者的openid
			page: 'pages/index/index', // 订阅消息卡片点击后会打开小程序的哪个页面
			data: event.queryStringParameters.data, // 订阅消息的数据
			templateId: event.queryStringParameters.templateId, // 订阅消息模板ID
			date: getFormatDate(24*60*60*1000), // 创建时间
      },
    });
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
};