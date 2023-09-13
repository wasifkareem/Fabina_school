import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";

const Mycourses = () => {
  const eduId = useSelector((state) => state.user.educator._id);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/courses/user/${eduId}`
        );
        setCourses(res.data);
      } catch (err) {}
    };
    getCourses();
  }, []);

  return (
    <div className=" flex flex-wrap  sm:pt-16 border border-gray-400 sm:w-[55vw] sm:min-h-[100vh] sm:pl-16  ">
      {courses.map((item) => (
        <CourseCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default Mycourses;
