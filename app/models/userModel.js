/**
 * Created by Dac Hai on 14/05/2017.
 */
 'use strict';
let mongosse = require('mongoose');
let md5 = require('md5');
// Users Schema
let userSchema = mongosse.Schema({
	ten:{
		type: String,
		required: true
	},
	ho:{
		type: String,
		required: true
	},
	taikhoan:{
		type: String,
		required: true
	},
	matkhau:{
		type: String,
		required: true
	},
	matkhaucu:{
		type: String,
		required: false
	},
	email:{
		type: String,
		required: true
	},
	thongtinthem:{
		anhdaidien:{
			type: String,
			required: false
		},
		ngaysinh:{
			type: String,
			required: false
		},
		doituong:{
			type: String,
			required: true
		},
		sobaidalam:{
			type: Number,
			required: false
		},
		solanphamquy:{
			type: Number,
			required: false
		},
		sobaidadang:{
			type: Number,
			required: false
		},
		diemsotrungbinh:{
			toan:{
				type: Number,
				required: false
			},
			ly:{
				type: Number,
				required: false
			},
			hoa:{
				type: Number,
				required: false
			},
			sinh:{
				type: Number,
				required: false
			},
		},
	},
	quyentruycap:{
		type: String,
		required: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
var User = module.exports = mongosse.model('User', userSchema);
//
// Get User
module.exports.GetUser = function (callback,limit) {
	User.find(callback).limit(limit);
}
// Post User
module.exports.AddUser = function (data, callback) {
	data.matkhau = md5(data.matkhau + 'ankid');
	console.log(data.matkhau);
	//User.create(data, callback);
}
// // Delete chuyên mục
// module.exports.DeleteChuyenmuc = function (id,callback) {
// 	var query = {_id:id};
// 	Chuyenmuc.remove(query,callback);
// }