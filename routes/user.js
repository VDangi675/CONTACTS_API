const express = require("express")
const bodyparser = require("body-parser")
const Userdata = require("../modules/user")


const route = express.Router()



route.get("/v1/contacts" ,async(req,res)=>{
    try{
 const userdata = await Userdata.find()
 res.status(200).json({
    status:"Sucess",
    userdata
 })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})


route.get("/v1/contacts/:id" ,async(req,res)=>{
    try{
 const userdata = await Userdata.findOne({_id:req.params.id})
 res.status(200).json({
    status:"Sucess",
    userdata
 })
    }catch(error){
        res.status(404).json({
            status:"Failed",
            error:"There is no contact with that id"
        })
    }
})

route.post("/v1/contacts",async (req,res)=>{
    try{
        const userdata = await Userdata.create(req.body)
        res.status(200).json({
            status:"Sucess",
            userdata
        })

    }catch(e){
        res.status(404).json({
            status:"Failed",
           error:`Missing required field(s):${e}`
           
        })
    }
})



route.delete("/v1/contacts/:id",async(req,res)=>{
    try{
        const userdata = await Userdata.deleteOne({_id:req.params.id})
        res.status(200).json({
           status:"Sucess",
           userdata
        })
           }catch(error){
               res.status(404).json({
                   status:"Failed",
                  error:"There is no contact with that id"
               })
           }
})


route.put("/v1/contacts/:id",async(req,res)=>{
    try{
        const userdata = await Userdata.updateOne({_id:req.params.id},req.body)
        res.status(200).json({
           status:"Sucess",
           userdata
        })
           }catch(error){
               res.status(404).json({
                   status:"Failed",
                   error:"There is no contact with that id"
               })
           }
})


route.patch("/v1/contacts/:id",async (req,res)=>{
    try{
        const userdata = await Userdata.updateOne({_id:req.params.id},req.body)
        res.status(200).json({
           status:"Sucess",
           userdata
        })
           }catch(error){
               res.status(500).json({
                   status:"Failed",
                   error:"There is no contact with that id"
               })
           }
})



module.exports = route