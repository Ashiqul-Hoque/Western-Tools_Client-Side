import React, { useEffect } from "react";
import Header from "../../Header/Header";
import "./Login.css";
import {
  // useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import useToken from "../../../hooks/useToken";
import Footer from "../../Footer/Footer";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let signInError;

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const [token] = useToken(user || gUser);

  // const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading) {
    return (
      <HashLoader
        color={"#123abc"}
        loading={loading}
        css={override}
        size={50}
      ></HashLoader>
    );
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500 mb-1">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
  };

  // const resetPassword = async (data) => {
  //   const email = data?.email;
  //   console.log(email);
  //   console.log("clicked");
  //   if (email) {
  //     await sendPasswordResetEmail(auth, email);
  //     toast("Email sent");
  //   } else {
  //     toast("Please enter your email address");
  //   }
  // };

  return (
    <div>
      <Header></Header>
      <div className="flex justify-center items-center bg-slate-600">
        <div className="card w-96 shadow-xl glass my-10">
          <div className="card-body text-white">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white text-lg">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs text-black"
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
                  className="input input-bordered text-black w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Must be 8 characters or longer",
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
                value="Login"
              />
            </form>
            <p>
              <small>
                New to Western Tools Co.
                <Link className="text-blue-400 font-bold ml-5" to="/signup">
                  Create New Account
                </Link>
              </small>
            </p>
            {/* <p className="flex align-items-center">
              <small>
                Forget Password ?
                <button
                  className="text-decoration-none btn-link ml-5"
                  onClick={resetPassword}
                >
                  Enter email & click here
                </button>
              </small>
            </p> */}
            <div className="divider text-white">OR</div>
            <div>
              <button
                onClick={() => signInWithGoogle()}
                className="btn btn-active w-full max-w-xs mt-2 mb-3 text-white"
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
      <Footer></Footer>
    </div>
  );
};

export default Login;
