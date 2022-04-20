import React, { useRef, useState } from "react";
import axios from "../../axios";
import Button from "../../components/Button";

interface ChartProps {
  votes: any;
  enableVote?: boolean;
  userId?: number;
  userName?: string;
}

const Chart = (props: ChartProps) => {
  const votes = props.votes;

  /*
    
  initialAnimations = {
    "Aabhas Dhaubanja": false,
    "Gopal": false,
    ...
  } 
  
  */
  const initialAnimations: any = {};

  for (const vote in votes) {
    initialAnimations[vote] = false;
  }

  const [animations, setAnimations] = useState(initialAnimations);
  const mutex = useRef<boolean>(false);

  const getButtons = () => {
    const names = [];

    const vote = async (candidate: string) => {
      mutex.current = true;

      axios
        .post("/polls/vote", {
          id: props.userId?.toString(),
          name: props.userName,
          candidate,
        })
        .then((_) => window.location.reload())
        .catch((err) => console.log({ err }))
        .finally(() => (mutex.current = false));
    };

    for (const name in votes) {
      names.push(
        <Button
          type="button"
          text="vote"
          onClick={() => {
            if (window.confirm("Are you sure?") && mutex.current === false) {
              setAnimations((prevAnimations: Object) => {
                return {
                  ...prevAnimations,
                  [name]: true,
                };
              });
              vote(name);
            }
          }}
          key={name}
          className="button-wrapper text-normal"
          loading={animations[name]}
          alternate={true}
        />
      );
    }

    return names;
  };

  const getNames = () => {
    const names = [];

    for (const name in votes) {
      names.push(
        <div key={name} className="name-wrapper text-normal">
          {name}
        </div>
      );
    }

    return names;
  };

  const getTotal = () => {
    let total = 0;

    for (const name in votes) {
      total += parseInt(votes[name]);
    }

    return total;
  };

  const getBars = () => {
    const bars = [];
    const total = getTotal();

    for (const name in votes) {
      const count = votes[name];
      bars.push(
        <div key={name} className="bar-wrapper">
          <div
            style={{
              height: count != 0 ? `${(count * 100) / total}%` : "auto",
              border: "2px solid #4daaa7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              color: "white",
              backgroundColor: "rgb(77, 170, 167)",
              paddingBottom: 10,
              paddingTop: 10,
            }}
          >
            {votes[name]}
          </div>
        </div>
      );
    }

    return bars;
  };

  return (
    <div>
      <div className="bars-container">{getBars()}</div>
      <div className="names-wrapper">{getNames()}</div>

      {props.enableVote ? (
        <div className="buttons-wrapper">{getButtons()}</div>
      ) : null}
    </div>
  );
};

export default Chart;
