import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/courses/");
        setCourses(res.data);
      } catch (err) {}
    };
    getCourses();
  }, []);

  return (
    <div className=" flex flex-wrap sm:py-20 sm:ml-12 sm:min-h-[100vh]">
      {courses.map((item) => (
        <CourseCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Courses;
