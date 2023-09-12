import React from "react";
import Navbar from "../components/Navbar";
import Create from "../components/Create";
import Mycourses from "../components/Mycourses";

const Userpage = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col">
        <section className=" flex items-center bg-gradient-to-r from-teal-400 to-teal-600 sm:flex-1 mx-3 h-36 my-2 rounded-md ">
          <img
            className="  w-24 rounded-lg border-4 border-black ml-2 "
            src="https://pbs.twimg.com/profile_images/1688121142924423168/wUmk5_3i_400x400.jpg"
            alt=""
          />
          <div className=" mb-2 mx-3">
            <p className=" text-3xl font-semibold text-gray-100">Hey,Wasif</p>
            <p className=" font-semibold mt-1 text-sm">
              Start your Educator journey with Fabina, add Your courses here.
            </p>
          </div>
        </section>
        <section className="">
          <Create />
        </section>
        <section className="">
          <Mycourses />
        </section>
      </div>
    </>
  );
};

export default Userpage;
