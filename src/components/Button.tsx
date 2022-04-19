import React from "react";

interface Props {
  text: string;
  type: "button" | "reset" | "submit";
  loading?: boolean;
  className?: string;
  onClick?: any;
  alternate?: boolean;
}

const Button = (props: Props) => {
  const getContent = () => {
    if (props.loading) {
      return (
        <div className="loading-animation-wrapper">
          <div
            className={`loading-animation-dot ${
              props.alternate ? "loading-animation-alternate" : ""
            }`}
          ></div>
          <div
            className={`loading-animation-dot ${
              props.alternate ? "loading-animation-alternate" : ""
            }`}
          ></div>
          <div
            className={`loading-animation-dot ${
              props.alternate ? "loading-animation-alternate" : ""
            }`}
          ></div>
        </div>
      );
    }

    return <span>{props.text}</span>;
  };

  return (
    <button
      onClick={props.onClick}
      className={props.className}
      type={props.type}
    >
      {getContent()}
    </button>
  );
};

export default Button;
