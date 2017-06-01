/**
 * Created by Dac Hai on 15/05/2017.
 */
 'use strict';

module.exports = class Validate{
	// var ten = '0964957713';
	// var value = [ten];
	// var data = [
	// 	{
	// 		// 'required':'chưa có tên',
	// 		// 'min':{
	// 		// 	'long':'6',
	// 		// 	'msg' :'Chưa đủ 6 ký tự'
	// 		// },
	// 		// 'max': {
	// 		// 	'long':'10',
	// 		// 	'msg' :'Tên quá 10 ký tự'
	// 		// },
	// 		// 'undefined' : 'Biến không tồn tại',
	// 		// 'date':'Không phải dạng ngày tháng',
	// 		// 'email':'Không phải email',
	// 		// 'phone':'Không phải số điện thoại',
	//		//	'username': 'user name của bạn có dấu nên không hợp lệ',
	//		// 	'number' : 'Không phải định dạng số'
	// 	}
	// ];
	check(value,data){
		let errors = [];
		let d=0;
		for( let i = 0 ; i < value.length ; i++){
			if (data[i].required) {
				if (value[i] == '') {
					errors['required' + i] = data[i].required;
					d++;
				}
			}
			if (data[i].min) {
				if (value[i].length < data[i].min.long) {
					errors['min' + i] = data[i].min.msg;
					d++;
				}
			}
			if (data[i].max) {
				if (value[i].length > data[i].max.long) {
					errors['max' + i] = data[i].max.msg;
					d++;
				}
			}
			if (data[i].undefined) {
				if (typeof value[i] == 'undefined'){
				    errors['undefined' + i] = data[i].undefined;
				    d++;
				}
			}
			if (data[i].date) {
				let day = value[i].slice(0,2);
				let month = value[i].slice(3,5);
				let year = value[i].slice(6,10);
				let date = new Date(year,month-1,day);
				if (date.getFullYear() == year && date.getMonth() + 1 == month && date.getDate() == day){
				}else{
					errors['date' + i] = data[i].date;
					d++;
				}
			}
			if (data[i].email) {
				let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				if(email.test(value[i]) == false){
					errors['email' + i] = data[i].email;
					d++;
				};
			}
			if (data[i].phone) {
			    let phone = /^[0-9-+]+$/;
			    if (phone.test(value[i]) == false) {
			        errors['phone' + i] = data[i].phone;
			        d++;
			    }else{
			    	if (value[i].length == 10 || value[i].length == 11) {
			            if (value[i].length == 10) {
			                if (value[i].substring(0, 2) == "09") {
			                } else {
			                    errors['phone' + i] = data[i].phone;
			                    d++;
			                }
			            } else
			            if (value[i].substring(0, 2) == "01") {
			            } else {
			               errors['phone' + i] = data[i].phone;
			               d++;
			            }
			        } else {
			            errors['phone' + i] = data[i].phone;
			            d++;
			        }
			    }
			}
			if (data[i].username) {
				let username = /^[a-z0-9]+$/
				if (username.test(value[i]) == false) {
					errors['username' + i] = data[i].username;
					d++;
				}
			}
			if (data[i].number) {
				if (isNaN(value[i]) == true) {
					errors['number' + i] = data[i].number;
					d++;
				}
			}
		}
		if (d==0) {
			return true
		}else{
			return errors;
		}
	}
	isEmail(value){
		let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return email.test(value); // true: đúng, false:sai
	}
};