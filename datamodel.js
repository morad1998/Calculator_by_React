const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/datamodel'

const db = mongoose.connection;
mongoose.connect(mongoURL,{useNewUrlParser: true, useUnifiedTopology:true}, ()=>{
    console.log('Database works fine');
});

db.on('error', err =>{
    console.log(`${err.message}Error`);
})

db.on('connected', err =>{
    console.log('Mongod Connected');
})