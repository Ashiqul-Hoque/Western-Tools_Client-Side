import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import noImg from "../../../../Assets/no-user.png";
import auth from "../../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [control, setControl] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const email = user.email;

  useEffect(() => {
    fetch(`https://serene-wildwood-78626.herokuapp.com/users/${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [email, control]);

  const handleUserInfo = (event) => {
    event.preventDefault();
    console.log("click");
    const education = event.target.education.value;
    const address = event.target.address.value;
    const phone = parseInt(event.target.phone.value);
    console.log(education, address, phone);

    const url = `https://serene-wildwood-78626.herokuapp.com/users/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ education, address, phone }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          setControl(!control);
          toast.success("Profile Updated");
        }
      });
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h1 className="mb-5 text-primary text-2xl font-bold">My Profile</h1>
        <div className="w-48 mask mask-squircle ml-10">
          <img src={noImg} alt="" />
        </div>
        <div className="mt-5">
          <h1 className="text-xl">Name: {user?.displayName} </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-xl">Email: {user?.email} </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-xl">Education: {userInfo.education} </h1>
        </div>
        <div className="mt-2">
          <h1 className="text-xl">Address: {userInfo.address}</h1>
        </div>
        <div className="mt-2">
          <h1 className="text-xl">Phone number: {userInfo.phone}</h1>
        </div>
      </div>

      <div className="bg-blue-400 rounded-3xl">
        <h1 className="text-white text-2xl font-bold text-center mt-8 ">
          Add Information
        </h1>
        <form className="my-4 p-10" onSubmit={handleUserInfo}>
          <div className="form-control mb-3 ">
            <label className="input-group ">
              <span>Education</span>
              <input
                type="text"
                name="education"
                className="input input-bordered text-lg w-full"
                required
              />
            </label>
          </div>
          <div className="form-control mb-3">
            <label className="input-group">
              <span>Address</span>
              <textarea
                className="textarea textarea-bordered w-full "
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
                className="input input-bordered text-lg w-full"
                required
              />
            </label>
          </div>

          <button
            type="submit"
            className="btn bg-green-600 hover:bg-green-800 mt-5 mx-auto border-none block w-1/2"
          >
            Update
          </button>
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default MyProfile;
