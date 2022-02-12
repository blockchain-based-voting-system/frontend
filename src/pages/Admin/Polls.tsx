import React, { useEffect, useState } from "react";
import axios from "../../axios";

const Polls = () => {
  const [polls, setPolls] = useState();

  useEffect(() => {
    axios.get("/polls/").then((res) => setPolls(res.data.polls));
  }, []);

  return (
    <div>
      <h1>polls</h1>
      {JSON.stringify(polls)}
    </div>
  );
};

export default Polls;
