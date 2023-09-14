import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isUser = Boolean(useSelector((state) => state.user.educator));

  const handleClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const loginHandle = () => {
    navigate("/login");
  };

  const courseHandle = () => {
    navigate("/mycourses");
  };

  const homeHandle = () => {
    navigate("/");
  };

  const handleReg = () => {
    navigate("/register");
  };
  return (
    <div className=" fixed w-full z-10 bg-white  flex justify-between items-center h-14 border border-gray-500 rounded-b-lg">
      <div
        className=" cursor-pointer text-black font-bold sm:text-3xl text-2xl  pl-2 sm:pl-3"
        onClick={handleClick}
      >
        Fabina School
      </div>

      <div className=" flex">
        <button
          onClick={homeHandle}
          className=" ease-in duration-500 hidden lg:block border px-2 py-1 mr-2 sm:mr-5 border-gray-600 text-gray-600 font-semibold cursor-pointer rounded hover:bg-gray-600 hover:border-none hover:transition hover:text-white"
        >
          Home
        </button>
        {isUser ? (
          <>
            <button
              onClick={courseHandle}
              className="ease-in duration-500 border px-2 py-1 mr-2 sm:mr-5 border-gray-600 text-gray-600 font-semibold cursor-pointer rounded hover:bg-gray-600 hover:border-none hover:transition hover:text-white"
            >
              My courses
            </button>
            <button
              onClick={handleLogout}
              className="ease-in duration-500 border px-2 py-1 mr-2 sm:mr-5 border-gray-600 text-gray-600 font-semibold cursor-pointer rounded hover:bg-gray-600 hover:border-none hover:transition hover:text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleReg}
              className="ease-in duration-500 border px-2 py-1 mr-2 sm:mr-5 border-gray-600 text-gray-600 font-semibold cursor-pointer rounded hover:bg-gray-600 hover:border-none hover:transition hover:text-white"
            >
              Register
            </button>

            <button
              onClick={loginHandle}
              className="ease-in duration-500 border px-2 py-1 mr-2 sm:mr-5 border-gray-600 text-gray-600 font-semibold cursor-pointer rounded hover:bg-gray-600 hover:border-none hover:transition hover:text-white"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
