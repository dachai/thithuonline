/**
 * Created by Dac Hai on 10/05/2017.
 */
'use strict';

const express = require('express');
const session = require("express-session")({secret: "my-secret", resave: true, saveUninitialized: true});
const sharedsession = require("express-socket.io-session");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

// Cấu hình express Views
app.use( express.static( __dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname);
app.use(session);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongosee
mongoose.connect("mongodb://localhost/ThiThuOnline");

let Router = require('./vendor/Bootstraps/router/router.js');
app.use('/',Router);

// Server start
server.listen(port,function() {
	console.log(" Server start...");
});
