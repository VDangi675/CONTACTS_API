const express = require("express")
const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    firstname:{type:String,required:true },
    lastname:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    phone:{type:String,required:true,unique:true},
})

const Userdata = mongoose.model("user",UserSchema)

module.exports = Userdata