import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import "./Header.css";
import logo from "../../Assets/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    toast.success("Sign Up successfully", {
      autoClose: 2000,
    });
    localStorage.removeItem("accessToken");
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="navbar bg-stone-900 sticky top-0 z-50 text-white md:px-10">
        <div className="navbar-start">
          {/* -----------------Mobile menubar---------------- */}
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-800 rounded-box w-52"
            >
              <li className="my-auto">
                <NavLink to="/home">Home</NavLink>
              </li>
              {user && (
                <li className="my-auto">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <ul className="p-2 bg-stone-700">
                    <li>
                      <NavLink to="/dashboard/myOrder">My Order</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/review">Add a Review</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/manageOrders">
                        Manage Orders
                      </NavLink>
                      <NavLink to="/dashboard/manageProducts">
                        Manage Products
                      </NavLink>
                      <NavLink to="/dashboard/addProduct">Add Product</NavLink>
                      <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
                    </li>
                  </ul>
                </li>
              )}
              <li className="my-auto">
                <NavLink to="/myPortfolio">My Portfolio</NavLink>
              </li>
              <li className="my-auto">
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li className="my-auto">
                {user ? (
                  <button
                    className="btn btn-outline btn-primary"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
          {/* -----------------Brand name---------------- */}
          <img src={logo} alt="" />
          <Link
            to="/"
            className="text-2xl pl-2 text-red-600 font-bold whitespace-nowrap"
          >
            Western Tools Co.
          </Link>
        </div>
        {/* -----------------Desktop menubar---------------- */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="my-auto">
              <NavLink to="/home">Home</NavLink>
            </li>

            {user && (
              <li className="my-auto">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}

            <li className="my-auto">
              <NavLink to="/myPortfolio">My Portfolio</NavLink>
            </li>
            <li className="my-auto">
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li className="my-auto">
              {user ? (
                <button className="btn btn-outline btn-info" onClick={logout}>
                  Sign Out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
