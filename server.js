/**
 * Created by Dac Hai on 10/05/2017.
 */
'use strict';

const express = require('express');
const session = require('express-session');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Cấu hình express Views
app.use( express.static( __dirname + '/public'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(session({
	secret: 'xinchaof',
	resave: false,
	saveUninitialized: true,
	cookie: { secure: true }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Mongosee 
mongoose.connect("mongodb://localhost/ThiThuOnline");
// Socket IO
io.on('connection', function (socket) {

	// Nhận lệch check đăng nhập.
	socket.on('dangnhap',function (data) {
		console.log(data.taikhoan);
		console.log(data.matkhau);
		// Trả kết quả đăng nhập.
		socket.emit('ketquadangnhap',{status:1,messinger:"Thành công"});
	});
});
// Routes
let API = require('./app/routes/api');
app.use('/api',API);
app.get('/',function(req,res){
	res.render('index');
});

let $va = require('./libs/validate.js');
// Server start
server.listen(8000,function() {
	console.log(" Server start...");
});