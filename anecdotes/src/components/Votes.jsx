import React, { useEffect, useState } from "react";
import Button from "./Button";

const Votes = ({ props }) => {
  const [votes, setVotes] = useState(0);
  const scores = props.scores;
  const scoresCopy = scores.slice();

  useEffect(() => {
    setVotes(scores[props.randomIndex]);
  }, [props.randomIndex, scores]);

  const handleClickVote = () => {
    scoresCopy[props.randomIndex] += 1;
    props.setScores(scoresCopy);
  };

  return (
    <>
      <section className="vote-section">
        <p>This has {votes} votes</p>
        <Button
          props={{
            clickFunction: handleClickVote,
            prefix: "vote",
            desc: "Vote"
          }}
        />
      </section>
    </>
  );
};

export default Votes;
