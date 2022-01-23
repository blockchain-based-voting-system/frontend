import React from "react";

type LayoutProps = {
  children: JSX.Element;
};

const Login = (props: LayoutProps) => {
  return (
    <div className="login-layout-wrapper">
      <div className="left">
        <div className="title-large title-green">Blockchain Based</div>
        <div className="title-large title-green">Voting System</div>
        <div className="title-small">the future of voting</div>
      </div>
      {props.children}
    </div>
  );
};

export default Login;
