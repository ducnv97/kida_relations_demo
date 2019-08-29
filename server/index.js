/*
Copyright (c) 2017, ZOHO CORPORATION
License: MIT
*/

var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var morgan = require('morgan');
var serveIndex = require('serve-index');
var http = require('http');
var chalk = require('chalk');
const fs = require('fs');
require('dotenv').config()

process.env.PWD = process.env.PWD || process.cwd();

let usercontroller = require('../src/controllers/client/user');
const choiceChanelId = require('../src/middleware/choiceChanelId');
const lineProvider = require('../service/LineService/line.provider');

var app = express();
var port = 5000;

app.set('port', port);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(errorHandler());

app.use('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/plugin-manifest.json', function (req, res) {
    res.sendfile('plugin-manifest.json');
});

app.get('/', function (req, res) {
    console.log("sever runned");

    res.send("server runed").status(200)
})

app.get('/test', usercontroller.test)

app.post('/webhook/:chanelid', choiceChanelId, lineProvider, usercontroller.handleAddUser, usercontroller.autoReplyMessageToUser);

app.post('/pushmessage/:chanelid', choiceChanelId, lineProvider, usercontroller.handlePushMessage);

app.use('/app', express.static('app'));
app.use('/app', serveIndex('app'));


const server = http.createServer(app);

export {app, server};


