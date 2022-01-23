import React from "react";
import { RouteProps } from "react-router";
import Features from "./Features";
import Landing from "./Landing";

const Home = (props: RouteProps): JSX.Element => {
  return (
    <>
      <Landing />
      <Features />
    </>
  );
};

export default Home;
