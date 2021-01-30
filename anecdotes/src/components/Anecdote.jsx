import React, { useState, useEffect } from "react";
import Button from "./Button";
import Votes from "./Votes";
import FavAnecdote from "./FavAnecdote";

const Anecdote = ({ props }) => {
  const [randomQuoteIndex, setRandomQuoteIndex] = useState(
    Math.floor(Math.random() * props.quotes.length)
  );
  const [quote, setQuote] = useState(props.quotes[randomQuoteIndex]);
  const [favAnecdote, setFavAnecdote] = useState();

  const giveQuoteIndex = () => {
    let index = Math.floor(Math.random() * props.quotes.length);
    while (index === randomQuoteIndex) {
      index = Math.floor(Math.random() * props.quotes.length);
    }
    return index;
  };

  useEffect(() => {
    setQuote(props.quotes[randomQuoteIndex]);
  }, [randomQuoteIndex, props.quotes]);

  const handleClickAnecdote = () => {
    setRandomQuoteIndex(giveQuoteIndex);
  };
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p className="quote">{quote}</p>
      <div className="container">
        <Votes
          props={{
            randomIndex: randomQuoteIndex,
            quotes: props.quotes,
            scores: props.scores,
            setScores: props.setScores
          }}
        />
        <Button
          props={{
            clickFunction: handleClickAnecdote,
            prefix: "anecdote",
            desc: "Next anecdote"
          }}
        />
      </div>
      <FavAnecdote
        props={{
          scores: props.scores,
          quotes: props.quotes,
          favAnecdote: favAnecdote,
          setFavAnecdote: setFavAnecdote
        }}
      />
    </>
  );
};

export default Anecdote;
