/**
 * Created by Dac Hai on 12/06/2017.
 */
'use strict';
let jwt = require('jwt-simple');
let key = require('../../../Libs/key.js');
let loginModel = require('../model/loginModel');
let Validate = require('../../../Libs/validate');
let Functions = require('../../../Libs/functions');
Functions = new Functions();
loginModel = new loginModel();
Validate = new Validate();

module.exports = class userController{
	Login(req,res){
		let data_req = req.body;
		if (!data_req) {
			res.json({status:-1,message:"Không có dữ liệu"});
		}
		if (Validate.isEmail(data_req.username) == true) {
			let query = {'email' : data_req.username};
			loginModel.getUserOne(query,function(err,data){
				if (err) {
					res.json({status:-1,message:"Có lỗi xảy ra trong quá trình kiểm tra"});
				}
				if (data) {
					
					if (data.password == Functions.encode_password(data_req.password)) {
						// Trả kết quả đăng nhập.
						let token = jwt.encode(data, key);
						res.json({status:1, token:token});
					}else{
						// Trả kết quả đăng nhập.
						res.json({status:0,message:"Mật khẩu không chính xác"});
					}
				}else{
					// Trả kết quả đăng nhập.
					res.json({status:0,message:"Email không chính xác"});
				}
			});
		}else{
			let query = {'username' : data_req.username};
			loginModel.getUserOne(query,function(err,data){
				if (err) {
					res.json({status:-1,message:"Có lỗi xảy ra trong quá trình kiểm tra"});
				}
				if (data) {
					if (data.password == Functions.encode_password(data_req.password)) {
						// Trả kết quả đăng nhập.
						let token = jwt.encode(data, key);
						res.json({status:1,token:token});
					}else{
						// Trả kết quả đăng nhập.
						res.json({status:0,message:"Mật khẩu không chính xác"});
					}
				}else{
					// Trả kết quả đăng nhập.
					res.json({status:0,message:"Tài khoản không chính xác"});
				}
			});
		}
	}
	CheckLogin(req,res){
		let token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['token'];
		if (token) {
		  	try {
		    	var decoded = jwt.decode(token, key);
				loginModel.getUserOne({ _id : decoded._id }, function(err, user) {
				  if(err){
				  	res.json({status:0,messinge: 'Có lỗi xảy ra khi kiểm tra tài khoản!'});
				  }else{
				  	if(user){
				  		res.json({status:1,messinge: 'Đã đăng nhập!'});
				  	}else{
				  		res.json({status:0,messinge: 'Token không ứng với một tài khoản bất kỳ!'});
				  	}
				  }
				})
		  	} catch (err) {
		    	res.json({status:0,messinge: 'Token không chính xác!'});
		  	}
		} else {
		 	res.json({status:0,messinge: 'Không tìm thấy Token!'});
		}
	}
	CheckLoginFacebook(req,res){
		let data = req.body;
		if(data){
			if(data.id){
				loginModel.getUserOne({facebookId : data.id},function(err,user){
					if(err){
						res.json({status: -1,message:'Có lỗi xảy ra trong quá trình kiểm tra!'});
					}else{
						if(user){
							let token = jwt.encode(user, key);
							res.json({status: 1,message:'Đã đăng nhập!', token: token});
						}else{
							res.json({status: 0,message:'Chưa tồn tại tài khoản!'});
						}
					}
				})
			}else{
				res.json({status: -1,message:'Không tìm thấy ID ứng dụng!'});
			}
		}else{
			res.json({status: -1,message:'Dữ liệu rỗng'});
		}
	}
}