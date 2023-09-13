import express from "express";
import Course from "../models/Course.js";
const router = express.Router();

//GET ALL COURSES
router.get("/", async (req, res) => {
  try {
    const courses = (await Course.find()).reverse();
    res.status(200).json(courses);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET COURSES BY ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET MY COURSES
router.get("/user/:id", async (req, res) => {
  try {
    const course = (await Course.find({ educatorId: req.params.id })).reverse();
    res.status(200).json(course);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//CREATE COURSES
router.post("/addCourse", async (req, res) => {
  const newCourse = new Course(req.body);
  try {
    const savedCourse = await newCourse.save();
    res.status(200).json(savedCourse);
  } catch (err) {
    console.log("hello");
    res.status(500).json(err);
  }
});

export default router;
