import React from "react";
import { useParams } from "react-router";

const Poll = () => {
  const params = useParams();

  return (
    <div>
      <h1>{JSON.stringify(params)}</h1>
    </div>
  );
};

export default Poll;
