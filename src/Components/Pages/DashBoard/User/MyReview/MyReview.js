import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../../firebase.init";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const email = user.email;

  const handleAddReview = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const rating = event.target.rating.value;
    console.log("clicked", review, rating);

    const url = `https://serene-wildwood-78626.herokuapp.com/users/${email}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ review, rating }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review added successfully.");
      });
  };

  return (
    <div>
      <h1 className="text-2xl pb-2 text-blue-600 text-center font-bold">
        Reviews
      </h1>
      <form
        className=" back-color mx-auto md:w-1/2 text-white p-10 rounded-3xl"
        onSubmit={handleAddReview}
      >
        <div className="form-control mb-3">
          <label className="input-group">Review</label>
          <textarea
            className="textarea textarea-bordered w-full text-black"
            name="review"
            required
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputState">Ratings (Select one)</label>
          <select
            className="form-control rounded-md my-2 p-2 text-black w-full"
            name="rating"
            required
          >
            <option selected>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-1/2 block mx-auto mt-8 btn btn-primary"
        >
          Add Review
        </button>
      </form>
    </div>
  );
};

export default MyReview;
