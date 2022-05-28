import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://serene-wildwood-78626.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) => setAllOrders(data));
  }, []);

  return (
    <div>
      <h1 className="my-3 text-xl font-bold">
        Total Orders : {allOrders.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Customer</th>
              <th>Product</th>
              <th>Order Quantity</th>
              <th>Total Cost</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.email}</td>
                <td>{order.product}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.cost}</td>
                <td>{order.status}</td>
                <td>
                  <button className="btn btn-xs bg-green-600 border-none">
                    Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
