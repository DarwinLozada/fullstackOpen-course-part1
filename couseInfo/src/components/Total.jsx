import React from "react";

const Total = ({ parts }) => {
  let totalExercises = parts.reduce((sum, x) => {
    return sum + x.exercises;
  }, 0);

  return (
    <>
      <p>The total number of exercises is {totalExercises}</p>
    </>
  );
};

export default Total;
