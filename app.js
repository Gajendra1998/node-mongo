const express = require("express");
const app = express();
app.use(express.json()) 
// addStudent route
const addStudent=require('./routes/addStudent');
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./config/keys').MongoURI; 
//connect to database
mongoose
  .connect(db, {
     useNewUrlParser:true,useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB !");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB");
    console.error(error);
  });
  app.get('/',(req,res)=>res.send("Hello world"));
  // route address of addStudent
   app.use('/api',addStudent);
  //port setup
const port=1000;
app.listen(port, () => {
console.log(`app listening at port:${port}`)
});
