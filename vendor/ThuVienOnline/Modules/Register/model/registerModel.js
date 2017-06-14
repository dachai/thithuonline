/**
 * Created by Dac Hai on 13/06/2017.
 */
let User = require('../../../../Bootstraps/Models/User');
let Functions = require('../../../Libs/functions');
Functions = new Functions();
module.exports = class registerModel{
	getUserOne(query,callback){
		User.findOne(query,callback);
	}
	addUser(user,callback){
		user.password = Functions.encode_password(user.password);
		User.create(user,callback);
	}
}