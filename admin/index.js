
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const collection = require("./mongo"); // Importing the 'collection' model
const admindetails =require("./newCollection");
mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schema and model for MongoDB
const reviewSchema = new mongoose.Schema({
  Name: String,
  Admission: String,
  Subject: String,
  Descript: String,
  rat1: String,
  rat2: String,
  rat3: String,
  rat4: String,
  rat5: String,
});

const Review = mongoose.model('Review', reviewSchema);

// Route to handle form submission
app.post('/feedback', async (req, res) => {
  try {
    const newReview = new Review(req.body.review);
    await newReview.save();
    res.status(201).send('Review submitted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});
// app.post('/feedback', async (req, res) => {
//   try {
//     const newReview = new Review(req.body.review);
//     await newReview.save();
//     res.status(201).send('Review submitted successfully');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

app.post("/",async(req,res)=>{
      const{addmision,password}=req.body
      console.log("hii");
      console.log(req.body);
      
      // const data={
      //     addmision:addmision,
      //     password:password
      // }
      
      try{
          const check=await collection.findOne({addmision:addmision,password:password})
          // console.log(data);
  
          if(check){
              res.json("exist")
          }
          else{
              res.json("notexist")
          }
          
      }
      catch(e){
          res.json("notexist")
      }
  })


  //admin verification
app.post("/admin",async(req,res)=>{
      const{adminid,password}=req.body
      console.log("hii");
      console.log(req.body);
      
      // const data={
      //     addmision:addmision,
      //     password:password
      // }
      
      try{
          const week=await admindetails.findOne({adminid:adminid,password:password})
          // console.log(data);
  
          if(week){
              res.json("exist")
          }
          else{
              res.json("notexist")
          }
          
      }
      catch(e){
          res.json("notexist")
      }
  })



  //sign up code

  app.post("/signup",async(req,res)=>{
    const{name,addmision,password}=req.body
    if (!name || !addmision || !password) {
      return res.status(400).json({ message: "All fields are required" });
  }

    console.log(req.body);
    const data={
        name:name, 
        addmision:addmision,
        password:password
    }
    
    try{
        const check=await collection.findOne({name:name,addmision:addmision})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notexist")
    }
})



//student data fetching from mongodb
app.get("/student", async(req,res)=>{
 
  await collection.find()
  .then(user=>res.json(user))
  .catch(err=>res.json(err))
})

//feedback data fetching from mongodb
app.get("/feedbackpersubject", async (req, res) => {
  try {
    const peer = await Review.find({ Subject: "Technical Training" });
    console.log(peer);
    const deer = await Review.find({ Subject: "Math" });
    console.log(deer);
    const heer = await Review.find({ Subject: "DAA" });
    console.log(heer);
    const keer = await Review.find({ Subject: "Operating System" });
    console.log(keer);
    const teer = await Review.find({ Subject: "COA" });
    console.log(teer);
    const combinedData = { peer, deer,heer,keer,teer }; // Combine the data into one object
    res.json(combinedData); // Send the combined data in one response
  } catch (err) {
    res.json(err);
  }
});


//rating

app.get("/rating", async (req, res) => {
  try {
    const aeer = await Review.find({ rat1:"One star" });
    console.log(aeer);
    const beer = await Review.find({ rat2: "Two star" });
    console.log(beer);
    const ceer = await Review.find({ rat3: "Three Star" });
    console.log(ceer);
    const geer = await Review.find({ rat4: "Four star" });
    console.log(geer);
    const meer = await Review.find({ rat5: "Five star" });
    console.log(meer);
    const combinedData = { aeer, beer,ceer,geer,meer }; // Combine the data into one object
    res.json(combinedData); // Send the combined data in one response
  } catch (err) {
    res.json(err);
  }
});



// app.post("/completeprofile", async (req, res) => {
//   const { name, admission } = req.body; // corrected spelling of "admission"
//   console.log(req.body);
//   try {
//     const comp = await collection.findOne({ name, admission }); // corrected database operation to findOne
//     const pomp = await Review.findOne({ Name:name }); // corrected database operation to find
//     console.log(pomp)
//     const bothdata = { comp, pomp };
//     res.json(bothdata);
//   } catch (err) {
//     res.status(500).json({ error: err.message }); // better error handling with status code and error message
//   }
// });

















// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






