import React, { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  if (isLoading) {
    return (
      <HashLoader
        color={"#123abc"}
        loading={isLoading}
        css={override}
        size={50}
      ></HashLoader>
    );
  }
  const reverseTools = tools.slice().reverse();
  return (
    <div>
      <h2 className="text-2xl">All Products: {reverseTools.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
                refetch={refetch}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
