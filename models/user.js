const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const userschema = new mongoose.Schema({
 username:{type:String,uniq:true},
 password:string
})
 userschema.pre('save', async function(next)
 {
    const user = this;
    if(user.isModified('password'))
    {
        user.password = await bcrypt.hash(user.password)
    }
    next();
 })

 const user = mongoose.model('user',userschema)
 module.exports = user ;
 module.exports = user;
   