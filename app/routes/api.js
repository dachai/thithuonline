/**
 * Created by Dac Hai on 19/05/2017.
 */

'use strict';
let jwt = require('jsonwebtoken');
let express = require('express'); 
let router = express.Router();
let FUNCTION = require('../libs/function');
FUNCTION = new FUNCTION();

// User
let userController = require('../controllers/userController');
userController = new userController();
// Category
let categoryController = require('../controllers/categoryController');
categoryController = new categoryController();

// Tạo User mới
router.post('/user',(req, res) => userController.addUser(req, res));

// Thêm chuyên mục mới.
router.post('/category',(req,res) => categoryController.addCategory(req,res));

// Xem chuyên mục
router.get('/category',(req,res) => categoryController.getCategory(req,res));

// Xóa chuyên mục
router.delete('/category',(req,res)=>categoryController.deleteCategory(req,res));

// Kiểm tra trạng thái đăng nhập
router.get('/checklogin',function(req,res){
	if (req.session.user) {
		res.json(req.session.user);
	}else{
		res.json('NO_LOG_IN');
	}
});
// Đăng nhập
router.post('/login', (req,res)=> userController.login(req,res));

// Đăng xuất
router.get('/logout',function(req,res){
	if (req.session.user) {
		delete req.session.user;
		res.send('SUCCESS_LOG_OUT');
	}
});
router.get('/token',function (req,res) {
	console.log(req.query);
	jwt.verify(req.query.token, 'caodachai!@#', function(err, decoded) {
		console.log(decoded.data.more.score) // bar
	});
})

module.exports = router