import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/react";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  const location = useLocation();

  const override = css`
    display: block;
    margin: 0 auto;
  `;

  if (loading || adminLoading) {
    return (
      <HashLoader
        color={"#123abc"}
        loading={loading}
        css={override}
        size={50}
      ></HashLoader>
    );
  }

  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
