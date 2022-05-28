import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Blogs from "./Components/Pages/Blogs/Blogs";
import AddProduct from "./Components/Pages/DashBoard/Admin/AddProduct/AddProduct";
import MakeAdmin from "./Components/Pages/DashBoard/Admin/MakeAdmin/MakeAdmin";
import ManageOrders from "./Components/Pages/DashBoard/Admin/ManageOrders/ManageOrders";
import ManageProducts from "./Components/Pages/DashBoard/Admin/ManageProducts/ManageProducts";
import DashBoard from "./Components/Pages/DashBoard/DashBoard";
import MyProfile from "./Components/Pages/DashBoard/MyProfile/MyProfile";
import MyOrder from "./Components/Pages/DashBoard/User/MyOrder/MyOrder";
import Home from "./Components/Pages/Home/Home";
import Reviews from "./Components/Pages/Home/Reviews/Reviews";
import Login from "./Components/Pages/LogIn/Login";
import MyPortfolio from "./Components/Pages/MyPortfolio/MyPortfolio";
import Purchase from "./Components/Pages/Purchase/Purchase";

import SignUp from "./Components/Pages/SignUp/SignUp";
import RequireAuth from "./Components/Shared/RequireAuth";
import { ToastContainer } from "react-toastify";
import RequireAdmin from "./Components/Shared/RequireAdmin";
import MyReview from "./Components/Pages/DashBoard/User/MyReview/MyReview";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>} />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <DashBoard></DashBoard>
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myOrder" element={<MyOrder></MyOrder>}></Route>
          <Route path="myReview" element={<MyReview></MyReview>}></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders></ManageOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct></AddProduct>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>
        </Route>

        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route path="*" element={<ErrorPage></ErrorPage>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
