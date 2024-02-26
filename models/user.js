const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userschema = new mongoose.Schema({
 username:{type:String,uniq:true},
 password:string


})