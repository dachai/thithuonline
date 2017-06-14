/**
 * Created by Dac Hai on 13/06/2017.
 */

 'use strict';
let express = require('express');
let router = express.Router();
let registerController = require('../controller/registerController');
registerController = new registerController();

/* Kiểm tra Thông tin có tồn tại chưa */
router.post('/check',(req,res)=>{
	registerController.Check(req,res);
})
/* Gửi dữ liệu đăng ký */
router.post('/',(req,res) => {
	registerController.Register(req,res);
});
/* Gửi dữ liệu đăng ký bằng FAcebook*/
router.post('/facebook',(req,res) => {
	registerController.RegisterFacebook(req,res);
});

module.exports = router