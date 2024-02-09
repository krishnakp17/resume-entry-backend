const mongoose=require("mongoose")
const resumeSchema=new mongoose.Schema(
    {
        name:String,
        phno:String,
        email:String,
        qual:String,
        tenth_mark:String,
        twelfth_mark:String,
        degree:String,
        pg:String,
        skills:String,
        hobbies:String

    }
)
module.exports=mongoose.model("adddetails",resumeSchema)