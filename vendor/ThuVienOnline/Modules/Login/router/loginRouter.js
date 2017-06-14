/**
 * Created by Dac Hai on 12/06/2017.
 */

'use strict';
let express = require('express');
let router = express.Router();
let loginController = require('../controller/loginController');
loginController = new loginController();

/* Đăng nhập */
router.post('/',(req,res) => {
	loginController.Login(req,res);
});
/* Check login bình thường */
router.get('/check',(req,res) => {
	loginController.CheckLogin(req,res);
})
/* Check login Facebook */
router.post('/facebook',(req,res) => {
	loginController.CheckLoginFacebook(req,res);
})

module.exports = router