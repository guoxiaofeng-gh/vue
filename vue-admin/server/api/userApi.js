var express = require('express');
var router = express.Router();
var moment = require('moment');
/* GET users listing. */
router.get('/', function(req, res, next) {
	//数据库注册用户
  	req.getConnection((err,conn)=>{
  		//处理数据库连接失败
	  var newsql = `insert into login(username,password,create_time,uodate_time,status)
	  values('${moment().format('YYYY-MM-DD')}','${moment().format('YYYY-MM-DD')}','ture')`;
		conn.query(newsql,(err,data)=>{
			if(err){
				res.end(JSON.stringify({
				"errCode":"-3009",
				"errMsg":"服务器出错了"
			}))
	      return false;
	    }
	  })
  	});
})

module.exports = router;