import React from "react";
import { useNavigate } from "react-router";

type Candidate = {
  id: number;
  name: string;
};

type Poll = {
  id: number;
  name: string;
  candidates: Array<Candidate>;
};

type PollsProps = {
  polls: Array<Poll>;
  link: string;
};

const Polls = (props: PollsProps) => {
  const navigate = useNavigate();

  return (
    <div className="polls-wrapper">
      {props.polls.map(({ id, name, candidates }, index) => {
        return (
          <div
            onClick={() => navigate(`${props.link}${id}`)}
            key={index}
            className="poll-wrapper"
          >
            <div className="poll-title title-small">{name}</div>

            <div className="candidates-wrapper">
              {candidates.map((candidate, index) => (
                <div key={`can${index}`} className="candidate-name">
                  {candidate.name}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Polls;
