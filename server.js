/**
 * Created by Dac Hai on 10/05/2017.
 */
'use strict';

const express = require('express');
const session = require("express-session")({secret: "my-secret", resave: true, saveUninitialized: true});
const sharedsession = require("express-socket.io-session");
const app = express();
const server = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

// Cấu hình express Views
app.use( express.static( __dirname + '/app/public'));
app.set('view engine','ejs');
app.set('views','./app/views');
app.use(session);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongosee 
mongoose.connect("mongodb://localhost/ThiThuOnline");

// Socket IO
io.use(sharedsession(session));
io.on('connection', function (socket) {
	require('./app/routes/socket')(socket);
}); 

// Routes
let API = require('./app/routes/api');
app.use('/api',API);


// URL ADMIN
app.get('/admin/*',function(req,res){
	if (req.session.user) {
		if (req.session.user.level == 'admin' || req.session.user.level == 'bientap' || req.session.user.level == 'dev'){
			res.render('admin');
		}else{
			res.render('index');
		}
	}else{
		res.render('index');
	}
})
// URL FRONT END
app.get('*',function(req,res){
	res.render('index');
});

// Server start
server.listen(port,function() {
	console.log(" Server start...");
});