const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const signupRoute=require("./controllers/signupRouter")
const resumeRoute=require("./controllers/resumeRouter")
const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://krishna:krishna17@cluster0.yiellsj.mongodb.net/resumeDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)
app.use("/api/resume",signupRoute)
app.use("/api/resumeadd",resumeRoute)
app.listen(3000,()=>{
    console.log("server running")
})