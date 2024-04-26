const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Devi:devi@cluster0.uuosljn.mongodb.net/recipe'

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true})

var db= mongoose.connection

db.on('connected', ()=>{
   console.log('Mongodb connection is successful');
})

db.on('error', ()=>{
    console.log('Mongodb connection is failed');
 })

 module.exports = mongoose
