import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Chart from "../../components/Polls/Chart";

const Polls = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });

  useEffect(() => {
    axios.get("/polls/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div></div>;

  return (
    <div className="polls-container">
      <span className="title-small">{data.name}</span>
      <span className="text-normal">{data.description}</span>

      <div className="votes-wrapper">
        <Chart votes={data.votes} />
      </div>
    </div>
  );
};

export default Polls;
