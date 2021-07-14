const express = require("express");
const router = express.Router();
const Student= require('../model/Student');
router.post("/postdata", async (req, res) => {
    let student = await new Student({
      Name: req.body.Name,
      contact:req.body.contact,
      subjects:req.body.subjects,
      class:req.body.class,
      society:req.body.society,
      year:req.body.year
    });
    await student.save();
    res.send({
      message: " submitted successfully",
      type: "post"
    });
    console.log(req.body);
  });

  router.put("/edit/:id", async (req, res) => {
    let update_Socity = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    await update_Socity.save();
  res.send({ message: "Your required field  updated"});
  console.log(req.body);
  });

  module.exports = router;




