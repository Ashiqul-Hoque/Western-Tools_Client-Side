import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Header/Header";

const DashBoard = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-8">
          <h2 className="text-2xl font-bold text-purple-500">
            Welcome to Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 text-base-content bg-slate-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            <li>
              <Link to="/dashboard/myOrder">My Order</Link>
            </li>
            <li>
              <Link to="/dashboard/review">Add a Review</Link>
            </li>
            <li>
              <Link to="/dashboard/manageOrders">Manage Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/manageProducts">Manage Products</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashboard/makeAdmin">Make Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
