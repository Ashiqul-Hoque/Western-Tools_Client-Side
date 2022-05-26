import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../../firebase.init";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  console.log(user.email);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <h2>My Orders : {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Order Quantity</th>
              <th>Total Cost</th>
              <th>Address</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.product}</td>
                <td>{order.orderQuantity}</td>
                <td>{order.cost}</td>
                <td>{order.address}</td>
                <td>{order.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
