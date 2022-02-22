import React, { useContext, useEffect, useState } from "react";
import axios from "../../axios";
import Chart from "../../components/Polls/Chart";
import Panel from "../../components/Polls/Panel";
import { AuthContext } from "../../contexts/Auth";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });
  const [votable, setVotable] = useState("");

  const authContext = useContext(AuthContext);

  useEffect(() => {
    axios.get("/polls/").then((res) => {
      setData(res.data);
      setLoading(false);
    });

    axios
      .post("/polls/check-voteability", {
        id: authContext.id.toString(),
      })
      .then((res) => {
        setVotable(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <div></div>;

  return (
    <Panel name={data.name} description={data.description}>
      <Chart
        enableVote={votable === "not-voted"}
        userId={authContext.id}
        userName={authContext.name}
        votes={data.votes}
      />
    </Panel>
  );
};

export default User;
