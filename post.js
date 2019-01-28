var express = require('express')
var app = express();

var mongoose = require('mongoose')
var User = require('./model/user')
var url = 'mongodb://adel:12345@localhost:27017/dataCPU'

// Connect ke mongoose
mongoose.connect(url, ()=>{
    console.log('Terhubung ke MongoDB')
})

// Post data
app.post('/post', function(req,res){
    new User ({
        namacpu: 'Lintang_CPU',
        tipe: 'Windows_NT',
        platform: 'win32',
        rilis: '10.0.17134',
        ramsisa: 11338039296,
        ramtotal: 17063497728
    }).save().then((newUser)=>{
        console.log('Data Masuk' +newUser)
    }).catch((newUser)=>{
        console.log(newUser)
    })
})

// Connect ke localhost 1234
app.listen(1234, ()=>{
    console.log('Terhubung!')
})