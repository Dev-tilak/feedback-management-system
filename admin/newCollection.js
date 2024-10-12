const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/your_database_name")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("not connected")
})
const newadminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    adminid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const admindetails =mongoose.model("admindetails",newadminSchema)


module.exports = admindetails ;