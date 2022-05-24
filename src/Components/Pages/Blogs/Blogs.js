import React from "react";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const Blogs = () => {
  return (
    <div>
      <Header></Header>
      <div className="m-14">
        <div>
          <h1 className="text-2xl font-bold text-red-600">
            How to improve the performance of a React Application?
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            What are the different ways to manage a state in a React
            application?
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          </p>
        </div>

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            How does prototypical inheritance work?
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            You have an array of products. Each product has a name, price,
            description, etc. How will you implement a search to find products
            by name?
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-red-600">
            What is a unit test? Why should write unit tests?
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
