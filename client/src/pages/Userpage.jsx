import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Create from "../components/Create";
import Mycourses from "../components/Mycourses";
import { useSelector } from "react-redux";

const Userpage = () => {
  const name = useSelector((state) => state.user.educator.firstName);
  const [refresh, setRefresh] = useState("");

  return (
    <>
      <Navbar />
      <div className=" flex flex-col sm:flex-row bg-gradient-to-br from-purple-50 to-purple-200 ">
        <section className=" sm:fixed flex flex-col sm:mt-16 items-center bg-gradient-to-b  from-gray-200 to-gray-500 sm:w-[40vw] mx-3 h-36 my-2 rounded-md mb-[70vh] mt-16 shadow-xl ">
          {/* <img
            className="  w-24 rounded-lg border-4 border-black ml-2 "
            src="https://pbs.twimg.com/profile_images/1688121142924423168/wUmk5_3i_400x400.jpg"
            alt=""
          /> */}
          <div
            className=" mb-2 sm:mr-20 
           mx-3 sm:ml-0"
          >
            <p className=" sm:mt-3 w-fit flex text-3xl sm:text-4xl font-semibold text-gray-600  ">
              Hey,<p className=" w-fit first-letter:uppercase">{name}</p>
            </p>
            <p className=" font-semibold mt-1 text-sm text-gray-600 ">
              Start your Educator journey with Fabina, add Your courses here.
            </p>
          </div>
          <Create setRefresh={setRefresh} />
        </section>

        <section className=" sm:ml-[45%]   ">
          <Mycourses refresh={refresh} />
        </section>
      </div>
    </>
  );
};

export default Userpage;
