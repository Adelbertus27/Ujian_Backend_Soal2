var express = require('express')
var app = express();

var mongoose = require('mongoose')
var User = require('./model/user')
var url = 'mongodb://adel:12345@localhost:27017/dataCPU'

// Connect ke mongoose
mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

// Connect ke localhost 1234
app.listen(1234, ()=>{
    console.log('Terhubung!')
})