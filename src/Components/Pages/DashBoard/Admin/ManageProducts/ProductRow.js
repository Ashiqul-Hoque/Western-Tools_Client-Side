import React from "react";

const ProductRow = ({ tool, index, handleDelete }) => {
  const { img, name, stock, price, _id } = tool;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{stock} Pcs</td>
      <td>$ {price}/Pcs </td>
      <td>
        <button
          className="btn btn-xs bg-red-600 border-none"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
