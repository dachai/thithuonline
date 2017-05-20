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
router.get('/user/:token',(req, res) => UserController.getUser(req, res));
router.post('/user/:token',(req, res) => UserController.postUser(req, res));

module.exports = router