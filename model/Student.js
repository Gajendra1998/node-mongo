// Schema for student
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const StudentSchema = mongoose.Schema({
  Name: { type: String},
  contact:{
    type:Number,
  },
  subjects:{
  type:[]
  },

  class:{
    type:String
  },
  society:{
  type: []
  },
  year:{
   type: String
  }
});
const Student = mongoose.model("Student", StudentSchema);
module.exports =Student;



