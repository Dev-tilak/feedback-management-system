const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/your_database_name")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("not connected")
})
const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    addmision:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const collection =mongoose.model("collection",newSchema)
module.exports = collection ;