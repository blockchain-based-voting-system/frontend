import React, { useEffect, useState } from "react";
import { RouteProps } from "react-router";
import axios from "../../axios";
import PollsLayout from "../../layouts/Polls";

const User = (props: RouteProps) => {
  const [polls, setPolls] = useState();

  useEffect(() => {
    axios.get("/polls/").then((res) => setPolls(res.data.polls));
  }, []);

  return <>{polls ? <PollsLayout link="/poll/" polls={polls} /> : null}</>;
};

export default User;
