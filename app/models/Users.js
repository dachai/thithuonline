/**
 * Created by Dac Hai on 14/05/2017.
 */
var mongosse = require('mongoose');
// Users Schema
var usersSchema = mongosse.Schema({
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
			type: Date,
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
				type: String,
				required: false
			},
			ly:{
				type: String,
				required: false
			},
			hoa:{
				type: String,
				required: false
			},
			sinh:{
				type: String,
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
var Users = module.exports = mongosse.model('Users', usersSchema);
//
// // Get Chuyên mục
// module.exports.GetChuyenmuc = function (callback,limit) {
// 	Chuyenmuc.find(callback).limit(limit);
// }
// // Post Chuyên mục
// module.exports.AddChuyenmuc = function (data, callback) {
// 	Chuyenmuc.create(data, callback);
// }
// // Delete chuyên mục
// module.exports.DeleteChuyenmuc = function (id,callback) {
// 	var query = {_id:id};
// 	Chuyenmuc.remove(query,callback);
// }