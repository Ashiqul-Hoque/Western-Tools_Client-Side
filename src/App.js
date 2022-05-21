import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/LogIn/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
      </Routes>
    </div>
  );
}

export default App;
