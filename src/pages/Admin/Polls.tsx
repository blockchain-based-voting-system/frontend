import React, { useEffect, useState } from "react";
import axios from "../../axios";
import Button from "../../components/Button";
import Chart from "../../components/Polls/Chart";
import Panel from "../../components/Polls/Panel";

const Polls = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ name: "", description: "", votes: {} });
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    axios.get("/polls/").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const endElection = () => {
    setSubmitting(true);

    axios
      .post("/polls/end")
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
          loading={submitting}
          type="button"
          text="End Election"
          onClick={endElection}
          className="end-election-button button-primary"
        />
      </>
    </Panel>
  );
};

export default Polls;
