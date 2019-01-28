var mongoose = require('mongoose')
var Schema = mongoose.Schema

var produkSchema = new Schema({
    namacpu: String,
    tipe: String,
    platform: String,
    rilis: String,
    ramsisa: Number,
    ramtotal: Number   
})

var User = mongoose.model('produk', produkSchema)

module.exports = User 