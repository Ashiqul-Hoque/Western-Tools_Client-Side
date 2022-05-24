import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer footer-center p-8 bg-black text-primary-content">
        <div class="grid grid-flow-col gap-4 font-bold text-base  text-white">
          <Link to="/home" className="hover:text-red-600">
            Home
          </Link>
          <Link to="/myPortfolio" className="hover:text-red-600">
            My Portfolio
          </Link>
          <Link to="/blogs" className="hover:text-red-600">
            Blogs
          </Link>
          <Link to="/login" className="hover:text-red-600">
            Login
          </Link>
        </div>
        <div>
          <img src={logo} alt="" />
          <p class="font-bold text-xl text-red-600">Western Tools Co.</p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
