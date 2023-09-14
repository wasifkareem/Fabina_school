import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import { useSelector } from "react-redux";

const Mycourses = (refresh) => {
  const eduId = useSelector((state) => state.user.educator._id);
  const [reload, setReload] = useState(false);

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
  }, [refresh, reload]);

  return (
    <div className=" flex flex-wrap  sm:pt-16 border border-gray-400 sm:w-[54vw] sm:min-h-[100vh] sm:pl-16  ">
      {courses.length == 0 ? (
        <p className=" sm:text-5xl text-2xl font-semibold ml-5 sm:h-fit sm:ml-28 sm:mt-52 text-purple-800 opacity-40 text-center border border-purple-700 rounded-lg mt-10 sm:w-96 p-4">
          Your courses will show here
        </p>
      ) : (
        courses.map((item) => (
          <CourseCard
            reload={reload}
            setReload={setReload}
            item={item}
            key={item._id}
          />
        ))
      )}
    </div>
  );
};

export default Mycourses;
