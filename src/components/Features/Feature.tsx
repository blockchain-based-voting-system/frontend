import React from "react";

type FeatureProps = {
  title: JSX.Element;
  children: JSX.Element;
};

const Feature = (props: FeatureProps) => {
  return (
    <div className="feature-container">
      {props.title}
      {props.children}
    </div>
  );
};

export default Feature;
