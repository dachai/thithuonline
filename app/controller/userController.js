/**
 * Created by Dac Hai on 19/05/2017.
 */
'use strict';
let token = 'abc';
let userModel = require('../models/userModel.js');
let Validate = require('../../libs/validate.js');
let FUNCION = require('../libs/function');
FUNCION = new FUNCION();
userModel = new userModel();
Validate = new Validate();
module.exports = class userController{
	getUser (req,res) {
		if (req.param('token') != token){
			res.json({status:"-1", error: "Token không đúng."});
		}
		else{
			userModel.getUser(function (err,user) {
				if(err){ 
					res.send({status:"404", error: "Không có dữ liệu."});
				}else{
					res.json(user);
				} 
			}); 
		}
	}
	addUser (req,res){
		if (req.param('token') != token){
			res.json({status:"-1", error: "Token không đúng."});
		}
		else{
			if (!req.body){
				return res.send({status: "404", error: "Dữ liệu không tồn tại!"});
			}else{
				let user = req.body;
				// VALIDATE 
				let value = [
					user.fistname,
					user.lastname,
					user.username,
					user.password,
					user.email,
					user.more.job,
					user.level,
					user.status
				];
				let data = [
					{
						'required':'Bạn chưa nhập tên',
						'undefined':'Biến không tồn tại',
					},
					{
						'required':'Bạn chưa nhập họ',
						'undefined':'Biến không tồn tại',
					},
					{
						'required':'Bạn chưa nhập tài khoản',
						'undefined':'Biến không tồn tại',
						'username':'Tài khoản chưa ký tự không hợp lệ',
						'min':{
							'long':'6',
							'msg':'Tài khoản không được ngắn hơn 6 ký tự'
						},
						'max':{
							'long':'100',
							'msg':'Tài khoản không được dài hơn 100 ký tự'
						}
					},
					{
						'required':'Bạn chưa nhập mật khẩu',
						'undefined':'Biến không tồn tại',
						'min':{
							'long':'6',
							'msg':'Mật khẩu không được ngắn hơn 6 ký tự'
						},
						'max':{
							'long':'100',
							'msg':'Mật khẩu không được dài hơn 100 ký tự'
						}
					},
					{
						'required':'Bạn chưa nhập mật khẩu',
						'undefined':'Biến không tồn tại',
						'email':'Email bạn nhập không hợp lệ'
					},
					{
						'required':'Bạn chưa xác nhận đối tượng',
						'undefined':'Biến không tồn tại',
						'username':'Lỗi',
					},
					{
						'required':'Lỗi',
						'undefined':'Biến không tồn tại',
						'username':'Lỗi',
					},
					{
						'required':'Bạn chưa nhập trạng thái',
						'undefined':'Biến không tồn tại',
					}
				];
				if (user.old_password) {
					value.push(
						user.old_password
					);
					data.push(
						{
							'required':'Chưa có mật khẩu cũ',
							'undefined':'Biến không tồn tại',
							'min':{
								'long':'6',
								'msg':'Mật khẩu cũ không được ngắn hơn 6 ký tự'
							},
							'max':{
								'long':'100',
								'msg':'Mật khẩu cũ không được dài hơn 100 ký tự'
							}
						}
					);
				};
				if (user.more.avatar) {
					value.push(
						user.more.avatar
					);
					data.push(
						{
							'required':'Chưa có ảnh đại diện',
							'undefined':'Biến không tồn tại',
						}
					);
				};
				if (user.more.birthday) {
					value.push(
						user.more.birthday
					);
					data.push(
						{
							'date':'Không đúng định dạng ngày sinh'
						}
					);
				};
				if (user.more.task_number) {
					value.push(
						user.more.task_number
					);
					data.push(
						{
							'required':'Chưa có thông tin số bài làm',
							'undefined':'Biến không tồn tại',
							'number':'không phải định dạng số'
						}
					);
				};
				if (user.more.error_number) {
					value.push(
						user.more.error_number
					);
					data.push(
						{
							'required':'Chưa có thông tin số lần phạm quy',
							'undefined':'Biến không tồn tại',
							'number':'không phải định dạng số'
						}
					);
				};
				if (user.more.post_number) {
					value.push(
						user.more.post_number
					);
					data.push(
						{
							'required':'Chưa có thông tin số bài đã đăng',
							'undefined':'Biến không tồn tại',
							'number':'không phải định dạng số'
						}
					);
				};
				if (user.more.score.math) {
					value.push(
						user.more.score.math
					);
					data.push(
						{
							'required':'Chưa có thông tin số điểm môn toán',
							'undefined':'Biến không tồn tại',
							'number':'không phải định dạng số'
						}
					);
				};
				if (user.more.score.physical) {
					value.push(
						user.more.score.physical
					);
					data.push(
						{
							'required':'Chưa có thông tin số điểm môn lý',
							'undefined':'Biến không tồn tại',
							'number':'không phải định dạng số'
						}
					);
				};
				if (user.more.score.chemistry) {
					value.push(
						user.more.score.chemistry
					);
					data.push(
						{
							'required':'Chưa có thông tin số điểm môn hóa',
							'undefined':'Biến không tồn tại',
							'number':'không phải định dạng số'
						}
					);
				};
				if (user.more.score.disciple) {
					value.push(
						user.more.score.disciple
					);
					data.push(
						{
							'required':'Chưa có thông tin số điểm môn sinh',
							'undefined':'Biến không tồn tại',
							'number':'không phải định dạng số'
						}
					);
				};
				let errors = Validate.check(value,data);
				if (errors == true) {
					userModel.addUser(user,function (err,user) {
						if(err){
							res.send({status: 0,message:'Có lỗi xảy ra trong quá trình cập nhật'});
						}else{
							res.send({status: 1,message:'Cập nhật thành công user mới'});
						}
					});	
				}else{
					res.send({status: -1,message:'Có giá trị không phù hợp'});
				}
			}
		}
	}
	login(req,res){
		let data_req = req.body;
		if (!data_req) {
			res.json({status:-1,messinger:"Không có dữ liệu"});
		}
		if (Validate.isEmail(data_req.username) == true) {
			let query = {'email' : data_req.username};
			userModel.login(query,function(err,data){
				if (err) {
					res.json({status:-1,messinger:"Có lỗi xảy ra trong quá trình kiểm tra"});
				}
				if (data) {
					if (data.password == FUNCION.encode_password(data_req.password)) {
						// Trả kết quả đăng nhập.

						// userModel.addConnect(data._id,socket.id);
						req.session.user = data;
						res.json({status:1,messinger:"Thành công",user:data});
					}else{ 
						// Trả kết quả đăng nhập.
						res.json({status:0,messinger:"Mật khẩu không đúng"});
					}
				}else{
					// Trả kết quả đăng nhập.
					res.json({status:0,messinger:"Email không chính xác"});
				}
			});
		}else{
			let query = {'username' : data_req.username};
			userModel.login(query,function(err,data){
				if (err) {
					res.json({status:-1,messinger:"Có lỗi xảy ra trong quá trình kiểm tra"});
				}
				if (data) {
					if (data.password == FUNCION.encode_password(data_req.password)) {
						// Trả kết quả đăng nhập.
						// userModel.addConnect(data._id,socket.id);
						req.session.user = data;
						res.json({status:1,messinger:"Thành công",user:data});
					}else{
						// Trả kết quả đăng nhập.
						res.json({status:0,messinger:"Mật khẩu không đúng"});
					}
				}else{
					// Trả kết quả đăng nhập.
					res.json({status:0,messinger:"Tài khoản không chính xác"});
				}
			});
		}
	}
}