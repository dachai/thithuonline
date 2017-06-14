/**
 * Created by Dac Hai on 14/05/2017.
 */
 'use strict';
let mongosse = require('mongoose');
// Users Schema
let userSchema = mongosse.Schema({
	firstname:{
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
		required: false
	},
	old_pasword:{
		type: String,
		required: false
	},
	email:{
		type: String,
		required: false
	},
	more:{
		avatar:{
			type: String,
			required: false
		},
		cover:{
			type: String,
			required: false
		},
		birthday:{
			type: String,
			required: false
		},
		job:{
			type: String,
			required: false
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
	facebookId:{
			type: String,
			required: false
	},
	level:{
		type: String,
		required: true
	},
	status:{
		type:String,
		required:true
	},
	public:{ // action // private
		type:String,
		required:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
var User = module.exports = mongosse.model('user', userSchema);
module.exports = User;