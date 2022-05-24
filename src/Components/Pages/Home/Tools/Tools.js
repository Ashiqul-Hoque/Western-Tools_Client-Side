import React, { useEffect, useState } from "react";
import Product from "../Tools/Product/Product";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="py-8 bg-red-600">
      <h1 className="text-3xl pb-5 text-white text-center">Products</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mx-8">
        {tools.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Tools;
