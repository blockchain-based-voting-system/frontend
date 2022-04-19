import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Button from "../../components/Button";
import Chart from "../../components/Polls/Chart";
import Panel from "../../components/Polls/Panel";

const Result = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    axios.get("/polls/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const resetElection = () => {
    setSubmitting(true);

    axios
      .post("/polls/reset")
      .then((_) => window.location.reload())
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
      });
  };

  if (loading) return <div></div>;

  return (
    <Panel name={data.name} description={data.description}>
      <>
        <Chart votes={data.votes} />

        <Button
          type="button"
          text="RESET ELECTION"
          className="end-election-button button-primary"
          onClick={resetElection}
          loading={submitting}
        />
      </>
    </Panel>
  );
};

export default Result;
