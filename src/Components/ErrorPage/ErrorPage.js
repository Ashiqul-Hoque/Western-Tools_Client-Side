import React from "react";
import "./ErrorPage.css";
import Header from "../Header/Header";
import img404 from "../../Assets/img404.png";

const ErrorPage = () => {
  return (
    <div>
      <Header></Header>
      <div>
        <img className="errorImg" src={img404} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
