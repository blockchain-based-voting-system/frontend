import React, { useEffect, useState } from "react";
import axios from "../../axios";
import PollsLayout from "../../layouts/Polls";

const Polls = () => {
  const [polls, setPolls] = useState();

  useEffect(() => {
    axios.get("/polls/").then((res) => setPolls(res.data.polls));
  }, []);

  return <>{polls ? <PollsLayout link="/poll/" polls={polls} /> : null}</>;
};

export default Polls;
