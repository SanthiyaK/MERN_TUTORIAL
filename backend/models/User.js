const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true,unique:true},
    phone_number:{type: String}
})

const User=mongoose.model("USER",userSchema)
module.exports=User;