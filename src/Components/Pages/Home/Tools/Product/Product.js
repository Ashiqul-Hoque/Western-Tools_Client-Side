import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { name, img, details, price, stock, min, _id } = product;

  const navigate = useNavigate();
  const navigateToProductDetail = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div class="card glass">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-center text-white">{name}</h2>
        <p className="text-white pt-2">{details}</p>
        <p className="text-white font-bold">
          Price : <span className="font-bold text-2xl">${price}/Pcs</span>
        </p>
        <p className="text-white">
          <span className="font-bold">Available :</span>{" "}
          <span className="text-xl">{stock} Pcs</span>
        </p>
        <p className="text-white">
          <span className="font-bold">Minimum Purchase Quantity : </span>
          <span className="text-xl">{min} Pcs</span>
        </p>
        <div class="card-actions justify-end">
          <button
            class="btn bg-white text-rose-600 font-bold hover:bg-red-900 block mx-auto border-none w-3/4 hover:text-white"
            onClick={() => navigateToProductDetail(_id)}
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
