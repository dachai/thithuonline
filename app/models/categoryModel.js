/**
 * Created by Dac Hai on 03/06/2017.
 */

'use strict';
let mongosse = require('mongoose');

// Category Schema
let categorySchema = mongosse.Schema({
	name:{
		type: String,
		required: true
	},
	desc:{
		type: String,
		required: true
	},
	slug:{
		type: String,
		required: true
	},
	drug:{
		type: String,
		required: false
	},
	level:{
		type:Number,
		required:true
	},
	location:{
		type:Number,
		required:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});
var Category = module.exports = mongosse.model('category', categorySchema);
module.exports = class categoryModel{
	// Lây danh sách category
	getCategory(query,callback,limit) {
		Category.find(query,callback).limit(limit);
	}
	addCategory(data, callback) {
		Category.create(data, callback);
	}
	deleteCategory(id,callback){
		Category.remove({_id : id},callback);
	}
}
// // Delete chuyên mục
// module.exports.DeleteChuyenmuc = function (id,callback) {
// 	var query = {_id:id};
// 	Chuyenmuc.remove(query,callback);
// }
