var User = require('../../../../Bootstraps/Models/User');

module.exports = class loginModel{
	getUserOne(query,callback){
		User.findOne(query,callback);
	}
}