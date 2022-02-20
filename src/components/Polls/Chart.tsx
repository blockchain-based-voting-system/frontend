import React, { useEffect } from "react";

const Chart = (votes: any) => {
  const getNames = () => {
    const names = [];

    for (const name in votes.votes) {
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

    for (const name in votes.votes) {
      total += parseInt(votes.votes[name]);
    }

    return total;
  };

  const getBars = () => {
    const bars = [];
    const total = getTotal();

    for (const name in votes.votes) {
      const count = votes.votes[name];
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
            {votes.votes[name]}
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
    </div>
  );
};

export default Chart;
