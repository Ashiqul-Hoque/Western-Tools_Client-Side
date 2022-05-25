import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const Purchase = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div>
      <Header></Header>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:p-10 py-8 bg-gray-200 flex justify-center">
            <img
              className="rounded-3xl w-4/6"
              src={product.img}
              alt="product"
            />
          </div>
          <div className="py-5 px-4">
            <h1 className="text-3xl font-bold">Product Name:</h1>
            <h1 className="text-3xl font-bold text-red-600">{product.name}</h1>
            <p className="py-5">
              <span className="font-bold"> Description: </span>
              {product.details}
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
