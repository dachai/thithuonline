/**
 * Created by Dac Hai on 14/05/2017.
 */
 'use strict';
let mongosse = require('mongoose');
let FUNCTION = require('../libs/function');
FUNCTION = new FUNCTION();
// Users Schema
let userSchema = mongosse.Schema({
	fistname:{
		type: String,
		required: true
	},
	lastname:{
		type: String,
		required: true
	},
	username:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	old_pasword:{
		type: String,
		required: false
	},
	email:{
		type: String,
		required: true
	},
	more:{
		avatar:{
			type: String,
			required: false
		},
		birthday:{
			type: String,
			required: false
		},
		job:{
			type: String,
			required: true
		},
		task_number:{
			type: Number,
			required: false
		},
		error_number:{
			type: Number,
			required: false
		},
		post_number:{
			type: Number,
			required: false
		},
		score:{
			math:{
				type: Number,
				required: false
			},
			physical:{
				type: Number,
				required: false
			},
			chemistry:{
				type: Number,
				required: false
			},
			disciple:{
				type: Number,
				required: false
			},
		},
	},
	level:{
		type: String,
		required: true
	},
	status:{
		type:String,
		required:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
var User = module.exports = mongosse.model('user', userSchema);
module.exports = class userModel{
	getUser(callback,limit) {
		User.find(callback).limit(limit);
	}
	addUser(data, callback) {
		data.password = FUNCTION.encode_password(data.password);
		User.create(data, callback);
	}
	login(query,callback){
		User.findOne(query,callback);
	}
	addConnect(id,value){
		User.findOne({_id: id}, function(err, user){
		   user.status = value;
		   user.save();
		});
	}
	removeConnect(value){
		User.findOne({status: value}, function(err, user){
		   user.status = 'off';
		   user.save();
		});
	}
} 
// // Delete chuyên mục
// module.exports.DeleteChuyenmuc = function (id,callback) {
// 	var query = {_id:id};
// 	Chuyenmuc.remove(query,callback);
// }