const express = require("express")
const signupModel = require("../model/signupModel")
const router = express.Router()
const bcrypt = require("bcryptjs")

hashPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}
router.post("/signup", async (req, res) => {
    let { data } = { "data": req.body }
    let password = data.password
    const hashedPassword = await hashPasswordGenerator(password)
    data.password = hashedPassword
    let signup = new signupModel(data)
    let result = signup.save()
    res.json(
        { status: "success" }

    )
})
router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await signupModel.findOne({"email":email})
    console.log(data)
    let dbPassword=data.password
    let inputPassword=req.body.password
    console.log(dbPassword)
    console.log(inputPassword)
    const match=await bcrypt.compare(inputPassword,dbPassword)
    if(!match)
    {
        return res.json(
            {
                status:"invalid password"
            }
        )
    }
    res.json({
        status:"success"
     })
})
module.exports=router
