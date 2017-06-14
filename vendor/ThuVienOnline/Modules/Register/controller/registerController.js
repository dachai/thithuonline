/**
 * Created by Dac Hai on 13/06/2017.
 */

'use strict';
let jwt = require('jwt-simple');
let key = require('../../../Libs/key.js');
let registerModel = require('../model/registerModel');
let Validate = require('../../../Libs/validate');
registerModel = new registerModel();
Validate = new Validate();

module.exports = class registerController{
	Check(req,res){
		var value = req.body;
		if(value.username){
			let query = { 'username' : value.username}
			registerModel.getUserOne(query,function(err,user){
				if(err){
					res.json({status:-1,messige:'Có lỗi xảy ra trong quá trình kiểm tra'})
				}else{
					if(user){
						res.json({status:0,messige:'Đã tồn tại tài khoản.'})
					}else{
						res.json({status:1,messige:'Tài khoản chưa tồn tại.'})
					}
				}
			})
		}
		if(value.email){
			let query = { 'email' : value.email}
			registerModel.getUserOne(query,function(err,user){
				if(err){
					res.json({status:-1,messige:'Có lỗi xảy ra trong quá trình kiểm tra'})
				}else{
					if(user){
						res.json({status:0,messige:'Đã tồn tại Email.'})
					}else{
						res.json({status:1,messige:'Email chưa tồn tại.'})
					}
				}
			})
		}
	}
	Register(req,res){
		let value = req.body;
		if(value){
			let error = [];
			if(Validate.isRequired(value.lastname) == false){
				error.push('Bạn chưa nhập Họ |')
			}

			if(Validate.isRequired(value.firstname) == false){
				error.push('Bạn chưa nhập Tên |')
			}

			if(Validate.isRequired(value.email) == false){
				error.push('Bạn chưa nhập Email |')
			}else if(Validate.isEmail(value.email) == false){
				error.push('Định dạng Email không chính xác |')
			}

			registerModel.getUserOne({ 'email' : value.email},function(err,user){
				if(err){
					error.push('Có lỗi xảy ra khi kiểm tra email |')
				}else{
					if(user){
						error.push('Email đã tồn tại |')
					}
				}
			})

			if(Validate.isRequired(value.username) == false){
				error.push('Bạn chưa nhập Tài khoản |')
			}else if(Validate.isUsername(value.username) == false){
				error.push('Tài khoản không được chứa đấu hoặc ký tự đặc biệt |')
			}else if(Validate.isMin(value.username,6) == false){
				error.push('Tài khoản phải nhiều hơn 6 ký tự |')
			}else if(Validate.isMax(value.username,100) == false){
				error.push('Tài khoản phải ít hơn 100 ký tự |')
			}

			registerModel.getUserOne({ 'username' : value.username},function(err,user){
				if(err){
					error.push('Có lỗi xảy ra khi kiểm tra Tài khoản |')
				}else{
					if(user){
						error.push('Tài khoản đã tồn tại |')
					}
				}
			})

			if(Validate.isRequired(value.password) == false){
				error.push('Bạn chưa nhập mật khẩu |')
			}else if(Validate.isMin(value.password,6) == false){
				error.push('Mật khẩu phải nhiều hơn 6 ký tự |')
			}else if(Validate.isMax(value.password,100) == false){
				error.push('Mật khẩu không được quá 100 ký tự |')
			}

			if(Validate.isRequired(value.old_password) == false){
				error.push('Bạn chưa xác nhận mật khẩu |')
			}else if(Validate.isEqual(value.old_password,value.password) == false){
				error.push('Mật khẩu xác nhận không chính xác')
			}
			if(error.length == 0){
				let data = {
					'firstname' : value.firstname,
					'lastname' : value.lastname,
					'username' : value.username,
					'email' : value.email,
					'password' : value.password,
					'level' : 'user',
					'status' : 'off',
					'public' : 'active',
				}
				registerModel.addUser(data,function(err,user){
					if(err){
						res.json({status:-1,message:'Có lỗi xảy ra trong quá trình cập nhật tài khoản mới'});
					}else{
						let token = jwt.encode(user, key);
						res.json({status: 1, token:token});
					}
				});
			}else{
				res.json({status:0,message: error});
			}
		}else{

		}
	}
	RegisterFacebook(req,res){
		let value = req.body;
		if(value){
			let error = [];
			if(Validate.isRequired(value.lastname) == false){
				error.push('Bạn chưa nhập Họ |')
			}
			if(Validate.isRequired(value.firstname) == false){
				error.push('Bạn chưa nhập Tên |')
			}
			if(value.email){
				if(Validate.isRequired(value.email) == false){
				error.push('Bạn chưa nhập Email |')
				}else if(Validate.isEmail(value.email) == false){
					error.push('Định dạng Email không chính xác |')
				}
				registerModel.getUserOne({ 'email' : value.email},function(err,user){
					if(err){
						error.push('Có lỗi xảy ra khi kiểm tra email |')
					}else{
						if(user){
							error.push('Email đã tồn tại |')
						}
					}
				})
			}
			if(Validate.isRequired(value.username) == false){
				error.push('Bạn chưa nhập Tài khoản |')
			}else if(Validate.isUsername(value.username) == false){
				error.push('Tài khoản không được chứa đấu hoặc ký tự đặc biệt |')
			}else if(Validate.isMin(value.username,6) == false){
				error.push('Tài khoản phải nhiều hơn 6 ký tự |')
			}else if(Validate.isMax(value.username,100) == false){
				error.push('Tài khoản phải ít hơn 100 ký tự |')
			}
			registerModel.getUserOne({ 'username' : value.username},function(err,user){
				if(err){
					error.push('Có lỗi xảy ra khi kiểm tra Tài khoản |')
				}else{
					if(user){
						error.push('Tài khoản đã tồn tại |')
					}
				}
			})
			if(error.length == 0){
				registerModel.addUser(value,function(err,user){
					if(err){
						res.json({status:-1,message:'Có lỗi xảy ra trong quá trình cập nhật tài khoản mới'});
					}else{
						let token = jwt.encode(user, key);
						res.json({status: 1, token:token});
					}
				});
			}else{
				res.json({status:0,message: error});
			}
		}else{
			res.json({status:0,message: 'Không tìm thấy dữ liệu'});
		}
	}
}
