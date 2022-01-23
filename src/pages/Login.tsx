import React from "react";
import { RouteProps } from "react-router";
import LoginLayout from "../layouts/Login";

const Login = (props: RouteProps): JSX.Element => {
  return (
    <div>
      <LoginLayout>
        <span>Login</span>
      </LoginLayout>
    </div>
  );
};

export default Login;
