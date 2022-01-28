import React from "react";

type FeatureTitleProps = {
  title: string;
  icon: JSX.Element;
  align: "left" | "right";
};

const FeatureTitle = (props: FeatureTitleProps) => {
  return (
    <div className="title-container">
      {props.align === "left" ? (
        <>
          <div className="title">{props.icon}</div>
          <div className="title">{props.title}</div>
        </>
      ) : (
        <>
          <div className="title">{props.title}</div>
          <div className="title">{props.icon}</div>
        </>
      )}
    </div>
  );
};

export default FeatureTitle;
