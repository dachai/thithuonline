/**
 * Created by Dac Hai on 19/05/2017.
 */
'use strict';
let token = 'abc';
let UserModel = require('../models/userModel.js');

module.exports = class userController{
	getUser (req,res) {
		if (req.param('token') != token){
			res.json({status:"-1", error: "Token không đúng."});
		}
		else{
			UserModel.GetUser(function (err,user) {
				if(err){ 
					res.send({status:"404", error: "Không có dữ liệu."});
				}else{
					res.json(user);
				} 
			}); 
		}
	}
	postUser (req,res){
		if (req.param('token') != token){
			res.json({status:"-1", error: "Token không đúng."});
		}
		else{
			if (!req.body){
				return res.send({status: "404", error: "Dữ liệu không tồn tại!"});
			}else{
				var user = req.body;
				UserModel.AddUser(user,function (err,user) {
					if(err){
						res.send({status:"303", error: "Có lỗi xảy ra trong quá trình cập nhật."});
					}else{
						res.send({status:"1", success: "Bạn đã cập nhật thành công."});
					}
				});	
			}
		}
	}
}