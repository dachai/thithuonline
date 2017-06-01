/**
 * Created by Dac Hai on 20/05/2017.
 */
'use strict';
let md5 = require('md5');
module.exports = class Ham{
	encode_md5(data){
		return data = md5(data);
	}
	encode_password(matkhau){
		return matkhau = md5(matkhau + 'ankid');
	}
}