/**
 * Created by Dac Hai on 03/06/2017.
 */

'use strict';
let categoryModel = require('../models/categoryModel');
let Validate = require('../libs/validate');
categoryModel = new categoryModel();
Validate = new Validate();
module.exports = class categoryController{
	getCategory (req,res) {
		let query;
		if (req.query.level){
			query = { level:req.query.level }
		}else if (req.query.drug){
			query = { drug: req.query.drug }
		}else if (req.query.drug && req.query.level){
			query = { drug: req.query.drug , level:req.query.level }
		}
		categoryModel.getCategory(query,function (err,category) {
			if(err){
				res.send({status:"404", error: "Không có dữ liệu."});
			}else{
				res.json(category);
			}
		});
	}
	addCategory (req,res){
		if (!req.body){
			return res.send({status: "404", error: "Dữ liệu không tồn tại!"});
		}else{
			let category = req.body;
			// VALIDATE
			let value = [
				category.name,
				category.desc,
				category.level
			];
			let data = [
				{
					'required':'Bạn chưa nhập tên chuyên mục',
					'undefined':'Biến không tồn tại'
				},
				{
					'required':'Bạn chưa nhập mô tả',
					'undefined':'Biến không tồn tại'
				},
				{
					'required':'Bạn chưa nhập level',
					'undefined':'Biến không tồn tại',
					'number':'không phải dạng số'
				}
			];
			let errors = Validate.check(value,data);
			if (errors == true) {
				categoryModel.addCategory(category,function (err,data) {
					if(err){
						res.send({status: 0,message:'Có lỗi xảy ra trong quá trình cập nhật'});
					}else{
						res.send({status: 1,message:'Cập nhật thành công chuyên mục mới'});
					}
				});
			}else{
				res.send({status: -1,message:'Có giá trị không phù hợp'});
			}
		}
	}
	deleteCategory(req,res){
		if (!req.body){
			return res.json({status: "404", error: "Dữ liệu không tồn tại!"});
		}else{
			var value = [req.body.id]
			var data = [
				{
					'required':'Bạn chưa nhập ID',
					'undefined':'Giá trị không tồn tại'
				}
			]
			let errors = Validate.check(value,data);
			if (errors == true) {
				categoryModel.deleteCategory(req.body.id,function (err) {
					if (err){
						return res.json({status: "0", error: "có lỗi xảy ra trong quá trình cập nhật"});
					}else{
						res.json({status:1 , message:"Thành công"});
					}
				})
			}else{
				res.send({status: -1,message:'Có giá trị không phù hợp'});
			}
		}
	}
}