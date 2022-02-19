import React, { useEffect, useState } from "react";
import axios from "../axios";

type PollProps = {
  id: number | string;
};

const Poll = (props: PollProps) => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`/polls/${props.id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log({ error }));
  }, []);

  if (!data) return <div></div>;

  return (
    <div>
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
};

export default Poll;
