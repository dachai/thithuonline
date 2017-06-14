/**
 * Created by Dac Hai on 12/06/2017.
 */

'use strict';
let express = require('express');
let router = express.Router();

let ThuVienOnlineAPI = require('../../ThuVienOnline/router/api');
router.use('/api',ThuVienOnlineAPI);

router.get('*',function(req,res){
	res.render('vendor/bootstraps/Views/index');
});

module.exports = router