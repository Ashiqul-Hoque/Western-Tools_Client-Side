import React, { useEffect, useState } from "react";
import useProduct from "../../../../hooks/useProduct";
import Product from "../Tools/Product/Product";

const Tools = () => {
  const [allProducts, setAllProducts] = useProduct();
  const reverseTools = allProducts.slice().reverse();

  return (
    <div className="py-8 bg-red-600">
      <h1 className="text-3xl pb-5 text-white text-center">Products</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mx-8">
        {reverseTools.map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Tools;
