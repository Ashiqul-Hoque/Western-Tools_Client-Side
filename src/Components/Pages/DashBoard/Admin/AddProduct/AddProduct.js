import React from "react";
import "./AddProduct.css";
import { toast, ToastContainer } from "react-toastify";

const AddProduct = () => {
  const handleAddItem = (event) => {
    event.preventDefault();

    let name = event.target.name.value;
    let price = parseInt(event.target.price.value);
    let details = event.target.desc.value;
    let img = event.target.image.value;
    let stock = parseInt(event.target.quantity.value);
    let min = parseInt(event.target.minimum.value);

    const url = `https://serene-wildwood-78626.herokuapp.com/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        details,
        img,
        stock,
        min,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Product successfully added");
      });
  };

  return (
    <div className="pt-4 pb-5">
      <h2 className="text-center text-2xl font-bold mb-3 text-primary">
        Add Product
      </h2>
      <form
        className=" back-color mx-auto md:w-1/2 text-white p-10 rounded-3xl"
        onSubmit={handleAddItem}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Product Name</label>
          <input
            type="text"
            className="form-control rounded-md my-2 p-2 text-black w-full"
            name="name"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Image Link</label>
          <input
            className="form-control rounded-md my-2 p-2 text-black w-full"
            name="image"
            required
          />
        </div>
        <div className="form-control mb-3">
          <label className="input-group">Description</label>
          <textarea
            className="textarea textarea-bordered w-full text-black"
            name="desc"
            required
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Price</label>
          <input
            type="number"
            className="form-control rounded-md my-2 p-2 text-black w-full"
            name="price"
            required
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Quantity</label>
          <input
            type="number"
            className="form-control rounded-md my-2 p-2 text-black w-full"
            name="quantity"
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Minimum Order Quantity</label>
          <input
            type="number"
            className="form-control rounded-md my-2 p-2 text-black w-full"
            name="minimum"
            required
          />
        </div>

        <button
          type="submit"
          className="w-1/2 block mx-auto mt-8 btn btn-primary"
        >
          Submit
        </button>
      </form>
      <ToastContainer autoClose={1000}></ToastContainer>
    </div>
  );
};

export default AddProduct;
