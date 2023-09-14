import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import { useLocation } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-gradient-to-t from-slate-100 to-slate-300">
      <Navbar />
      <Courses />
    </div>
  );
};

export default Homepage;
