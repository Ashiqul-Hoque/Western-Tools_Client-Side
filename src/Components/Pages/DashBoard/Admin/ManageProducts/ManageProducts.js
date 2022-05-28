import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import ProductRow from "./ProductRow";
import useProduct from "../../../../../hooks/useProduct";

const ManageProducts = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useProduct();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  if (loading) {
    return (
      <HashLoader
        color={"#123abc"}
        loading={loading}
        css={override}
        size={50}
      ></HashLoader>
    );
  }

  const handleDelete = (id) => {
    console.log("clicked", id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://serene-wildwood-78626.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = allProducts.filter((product) => product._id !== id);
          console.log(remaining);
          setAllProducts(remaining);
        });
    }
  };

  const reverseTools = allProducts.slice().reverse();
  return (
    <div>
      <h2 className="text-2xl">All Products: {reverseTools.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reverseTools.map((tool, index) => (
              <ProductRow
                key={tool._id}
                tool={tool}
                index={index}
                // refetch={refetch}
                handleDelete={handleDelete}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
