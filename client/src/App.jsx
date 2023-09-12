import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Coursepage from "./pages/Coursepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Userpage from "./pages/Userpage";
import { useSelector } from "react-redux";

function App() {
  const isEducator = Boolean(useSelector((state) => state.user.educator));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coursepage/:id" element={<Coursepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/mycourses"
          element={isEducator ? <Userpage /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
