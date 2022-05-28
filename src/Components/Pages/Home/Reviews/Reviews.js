import React, { useState } from "react";
import { useQuery } from "react-query";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import noImg from "../../../../Assets/no-user.png";
import user1 from "../../../../Assets/player-3.png";
import user2 from "../../../../Assets/player-1.png";
import user3 from "../../../../Assets/player-5.png";

const Reviews = () => {
  const [user] = useAuthState(auth);
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
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
  console.log(users);
  const reverseUsers = users.slice().reverse().slice(0, 3);

  const uName = ["a", "b", "c"];
  const image = [user1, user2, user3];

  return (
    <div className="bg-red-600 py-16">
      <h1 className="text-white text-3xl pb-5 text-center">
        From Our Happy Customers
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-10">
        {reverseUsers.map((u, index) => (
          <div className="bg-white text-center p-5 rounded-3xl">
            <div className="w-32 mask mask-squircle mb-5 block mx-auto">
              <img src={image[index]} alt="" />
            </div>
            <h1>{uName[index]}</h1>
            <p>"{u.review}"</p>
            <p>
              <span className="font-bold">Rating:</span> {u.rating} out of 5
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
