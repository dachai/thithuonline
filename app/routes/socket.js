
/**
 * Created by Dac Hai on 29/05/2017.
 */
'use strict';

//User
let userController = require('../controllers/userController');
let UserController = new userController();
let userModel = require('../models/userModel.js');
userModel = new userModel();

module.exports = function(socket) {
	// socket.on('dangnhap',function (dulieu) {
	// 	UserController.dangnhapSOCKET(dulieu,socket);
	// });
	socket.on('disconnect', function() {
		userModel.login({status:socket.id},function(err,data){
			if (data) {
				userModel.removeConnect(socket.id);
			}
		});
    });
};