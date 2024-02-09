const express=require("express")
const resumeModel=require("../model/resumeModel")
const router=express.Router()

router.post("/adddetails",async(req,res)=>{
    
    let data=req.body
    let resume=new resumeModel(data)
    let result=await resume.save()
    res.json(
        {status:"success"}
    )
})

module.exports=router