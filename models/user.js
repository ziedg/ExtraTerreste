const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema= new Schema({

    login:String,
    password:String,
    age:Number,
    famille:String,
    race:String,
    norriture:String,
    friends : [],
})



const User = mongoose.model('users',UserSchema);

module.exports = User;

