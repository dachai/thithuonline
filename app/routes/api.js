/**
 * Created by Dac Hai on 19/05/2017.
 */
'use strict';

let express = require('express'); 
let router = express.Router();
// define the home page route
router.get('/', function (req, res) {
  res.send('Đây là trang chủ api');
});

//User
let userController = require('../controller/userController')
let UserController = new userController();
router.post('/user/:token',(req, res) => UserController.addUser(req, res));
router.post('/login/:token', (req,res)=> UserController.login(req,res));
router.get('/checklogin',function(req,res){
	if (req.session.user) {
		res.send(req.session.user);
	}else{
		res.send('NO_LOG_IN');
	}
});
router.get('/logout/:token',function(req,res){
	if (req.session.user) {
		delete req.session.user;
		res.send('SUCCESS_LOG_OUT');
	}
});

module.exports = router