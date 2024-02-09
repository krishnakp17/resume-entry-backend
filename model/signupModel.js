const mongoose=require("mongoose")
const signupSchema=new mongoose.Schema(
    {
        name:String,
        mobileno:String,
        adddress:String,
        qual:String,
        email:String,
        password:String

    }
)

module.exports=mongoose.model("resume",signupSchema)