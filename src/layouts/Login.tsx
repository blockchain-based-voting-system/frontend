import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

type LayoutProps = {
  children: JSX.Element;
};

const Login = (props: LayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="login-layout-wrapper">
      <div className="left">
        <div onClick={() => navigate(-1)} className="back title-small">
          <span className="icon">
            <IoIosArrowBack />
          </span>
          BACK
        </div>

        <div className="title-large title-green">Blockchain Based</div>
        <div className="title-large title-green">Voting System</div>
        <div className="title-small">the future of voting</div>
      </div>

      <div className="right">{props.children}</div>
    </div>
  );
};

export default Login;
