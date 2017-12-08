'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get('/v2/store/inventory', (req, res)=>{
    res.send('/v2/store/inventory');
});

app.post('/v2/store/order', (req, res)=>{
    res.send('/v2/store/order');
});

app.listen(8080, function(){
    console.log('Sample app server started with port 8080');
});