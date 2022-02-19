import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import PollLayout from "../../layouts/Poll";

const Poll = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof params.id !== "number" && typeof params.id !== "string") {
      navigate("/");
    }
  }, []);

  if (typeof params.id !== "number" && typeof params.id !== "string") {
    return <div></div>;
  }

  return (
    <div>
      <PollLayout id={params.id} />
    </div>
  );
};

export default Poll;
