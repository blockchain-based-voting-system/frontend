import React from "react";

type Candidate = {
  id: number;
  name: string;
};

type Poll = {
  name: string;
  candidates: Array<Candidate>;
};

type PollsProps = {
  polls: Array<Poll>;
};

const Polls = (props: PollsProps) => {
  return (
    <div className="polls-wrapper">
      {props.polls.map(({ name, candidates }, index) => {
        console.log({ candidates });

        return (
          <div key={index} className="poll-wrapper">
            <div className="poll-title title-small">{name}</div>

            {candidates.map((candidate, index) => (
              <div key={`can${index}`}>{candidate.name}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Polls;
