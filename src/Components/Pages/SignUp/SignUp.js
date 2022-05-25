import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import auth from "../../../firebase.init";
import Header from "../../Header/Header";
import useToken from "../../../hooks/useToken";
import Footer from "../../Footer/Footer";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // const [token] = useToken("" || user || gUser);
  // console.log(token);

  const navigate = useNavigate();

  let signInError;

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  if (loading || gLoading || updating) {
    return (
      <HashLoader
        color={"#123abc"}
        loading={loading}
        css={override}
        size={50}
      ></HashLoader>
    );
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  // if (token) {
  //   navigate("/home");
  // }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };

  return (
    <div>
      <Header></Header>
      <div className="flex justify-center items-center bg-slate-600">
        <div>
          <div className="card w-96 shadow-xl my-10 glass">
            <div className="card-body">
              <h2 className="text-center text-2xl font-bold text-white">
                Sign Up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white text-lg">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name is Required",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white text-lg">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white text-lg">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>

                {signInError}
                <input
                  className="btn btn-active btn-primary w-full max-w-xs border-0 text-white"
                  type="submit"
                  value="Sign Up"
                />
              </form>
              <p>
                <small className="text-white">
                  Already have an account?
                  <Link className="ml-3 font-bold text-blue-400" to="/login">
                    Please login
                  </Link>
                </small>
              </p>
              <div className="divider text-white">OR</div>
              <div>
                <button
                  onClick={() => signInWithGoogle()}
                  className="btn btn-active w-full max-w-xs mt-1 text-white"
                >
                  <img
                    style={{ width: "30px" }}
                    src={"https://i.ibb.co/1zMrpYg/google.png"}
                    alt=""
                  />
                  <span className="px-2">Google Sign In</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
