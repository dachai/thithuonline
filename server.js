/**
 * Created by Dac Hai on 10/05/2017.
 */
'use strict';

const express = require('express');
const session = require("express-session")({secret: "my-secret", resave: true, saveUninitialized: true});
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const port = process.env.PORT || 8000;

// Cấu hình express Views
app.use( express.static( __dirname + '/public'));
app.set('view engine','ejs');
app.set('views', __dirname);
app.use(session);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mongosee
// let urlDB = "mongodb://caodachai:Hai002010!@#@thithuonline-shard-00-00-5ovjg.mongodb.net:27017,thithuonline-shard-00-01-5ovjg.mongodb.net:27017,thithuonline-shard-00-02-5ovjg.mongodb.net:27017/thithuonline?ssl=true&replicaSet=thithuonline-shard-0&authSource=admin"
// mongoose.connect("mongodb://caodachai3:hai002010@ds127492.mlab.com:27492/thithuonline",{ useMongooseUri: true});
// mongoose.connect(urlDB);
mongoose.connect('mongodb://caodachai3:hai002010@ds127492.mlab.com:27492/thithuonline', function(err){
    if(err){
        console.log("Failed to connect to database");
    }
    else {
        console.log("Successfully connected to database");
    }
});

let Router = require('./vendor/Bootstraps/router/router.js');

app.use('/',Router);

// Server start
server.listen(port,function(){
	console.log("Server start ...")
});
