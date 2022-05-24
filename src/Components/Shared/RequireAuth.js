import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  if (loading) {
    return (
      <div className="py-5 my-5">
        <HashLoader
          color={"#123abc"}
          loading={loading}
          css={override}
          size={50}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;
