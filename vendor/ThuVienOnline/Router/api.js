/**
 * Created by Dac Hai on 19/05/2017.
 */

'use strict';
let express = require('express');
let router = express.Router();

/* Module Login */
let loginRouter = require('../Modules/Login/router/loginRouter');
router.use('/login',loginRouter);

/* Module Register */
let registerRouter = require('../Modules/Register/router/registerRouter');
router.use('/register',registerRouter);

module.exports = router
