import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/coursepage/${item._id}`);
  };
  return (
    <div
      className="  cursor-pointer  bg-neutral-100 shadow-xl border-gray-300 border mt-3 mx-4 rounded-md overflow-hidden h-[60vh] sm:w-[300px]"
      onClick={handleClick}
    >
      <img
        className=" h-52 object-cover min-w-full"
        src={item.img}
        alt="python course"
      />
      <h1 className=" text-xl font-semibold ml-3 mt-2">{item.title}</h1>
      <p className=" mt-1 mx-3 text-gray-600">{item.desc.slice(0, 60)}...</p>
      <div className="flex mt-10 mr-4 justify-end  font-semibold text-xl">
        ${item.price}
      </div>
    </div>
  );
};

export default CourseCard;
