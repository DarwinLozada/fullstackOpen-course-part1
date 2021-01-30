import React, { useEffect } from "react";

const FavAnecdote = ({ props }) => {
  useEffect(() => {
    const favAnecdoteIndex = props.scores.indexOf(Math.max(...props.scores));

    props.setFavAnecdote(props.quotes[favAnecdoteIndex]);
  }, [props.scores, props.quotes, props]);

  return (
    <>
      <section className="fav-anecdote-section">
        <h2>Favorite Anecdote</h2>
        <p className="fav-quote">{props.favAnecdote}</p>
      </section>
    </>
  );
};

export default FavAnecdote;
