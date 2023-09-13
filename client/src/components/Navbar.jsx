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
  return (
    <div className=" fixed w-full z-10 bg-white  flex justify-between items-center h-14 border border-gray-500 rounded-b-lg">
      <div
        className=" cursor-pointer text-black font-bold text-3xl  pt-3 pl-2 sm:pl-3"
        onClick={handleClick}
      >
        Fabina School
      </div>

      {isUser ? (
        <button
          onClick={handleLogout}
          className=" border px-2 py-1 mr-2 sm:mr-5 border-gray-600 text-gray-600 font-semibold cursor-pointer rounded hover:bg-gray-600 hover:border-none hover:transition hover:text-white"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={loginHandle}
          className=" border px-2 py-1 mr-2 sm:mr-5 border-gray-600 text-gray-600 font-semibold cursor-pointer rounded hover:bg-gray-600 hover:border-none hover:transition hover:text-white"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
