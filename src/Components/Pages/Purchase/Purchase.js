import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [product, setProduct] = useState({});
  const { name, details, price, stock, img, min } = product;
  const [available, setAvailable] = useState({});
  const [minimum, setMinimum] = useState({});
  const [orderAmount, setOrderAmount] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  useEffect(() => {
    setAvailable(stock);
    setMinimum(min);
  }, []);

  const handleOrderError = (event) => {
    const orderQuantity = event.target.value;
    setOrderAmount(orderQuantity);
    console.log(orderQuantity, orderAmount);
  };

  const handleOrder = (event) => {
    event.preventDefault();
    const product = name;
    const productId = id;
    const userName = user.displayName;
    const email = user.email;
    const address = event.target.address.value;
    const phone = event.target.phone.value;
    const orderQuantity = event.target.order.value;
    console.log(
      product,
      productId,
      userName,
      email,
      address,
      phone,
      orderQuantity
    );
  };

  return (
    <div>
      <Header></Header>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:p-10 py-8 bg-gray-200 flex justify-center">
            <img
              className="rounded-3xl w-4/6 max-h-96"
              src={img}
              alt="product"
            />
          </div>
          <div className="py-5 px-4">
            <h1 className="text-3xl font-bold">Product Name:</h1>
            <h1 className="text-3xl font-bold text-red-600">{name}</h1>
            <p className="pt-5">
              <span className="font-bold"> Description: </span>
              {details}
            </p>
            <p className="pt-5">
              <span className="font-bold"> Price : </span>$ {price}/Pcs
            </p>
            <p className="pt-5">
              <span className="font-bold"> Available : </span>
              {stock} Pcs
            </p>
            <p className="pt-5">
              <span className="font-bold"> Minimum Purchase Quantity: </span>
              {min} Pcs
            </p>
            <h1 className="text-2xl font-bold text-center py-3">Information</h1>
            <form className="my-4" onSubmit={handleOrder}>
              <div className="form-control mb-3">
                <label className="input-group ">
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    className="input input-bordered text-lg w-full md:w-1/2"
                    disabled
                    value={user.displayName}
                  />
                </label>
              </div>
              <div className="form-control mb-3">
                <label className="input-group">
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    className="input input-bordered text-lg w-full md:w-1/2"
                    disabled
                    value={user.email}
                  />
                </label>
              </div>
              <div className="form-control mb-3">
                <label className="input-group">
                  <span>Address</span>
                  <textarea
                    className="textarea textarea-bordered w-full md:w-1/2"
                    name="address"
                    required
                  ></textarea>
                </label>
              </div>
              <div className="form-control mb-3">
                <label className="input-group">
                  <span>Phone Number</span>
                  <input
                    type="number"
                    name="phone"
                    className="input input-bordered text-lg w-full md:w-1/3"
                    required
                  />
                </label>
              </div>
              <div className="form-control mb-3">
                <label className="input-group">
                  <span>Order Quantity</span>
                  <input
                    onKeyUp={handleOrderError}
                    type="number"
                    name="order"
                    required
                    className="input input-bordered text-lg w-full md:w-1/3"
                  />
                </label>
              </div>
              <div className="form-control mb-3">
                <h1 className="text-2xl font-bold">Total Cost :</h1>
              </div>

              {!(orderAmount >= minimum) || !(orderAmount <= available) ? (
                <button
                  type="submit"
                  className="btn mt-5 mx-auto border-none block"
                  disabled
                >
                  Confirm Purchase
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn bg-green-500 hover:bg-green-800 mt-5 mx-auto border-none block"
                >
                  Confirm Purchase
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Purchase;
