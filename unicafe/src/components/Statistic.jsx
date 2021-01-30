import React from "react";

const Statistic = ({ state }) => {
  console.log(state.value.toString());
  if (state.value.toString().length > 5) {
    state.value = parseFloat(state.value).toFixed(2);
  }

  if (state.key === "Positive") {
    state.value += "%";
  }

  return (
    <>
      <p className="statistic">
        <span className="statistic-key"> {state.desc} </span>
        <span className="statistic-value"> {state.value} </span>
      </p>
    </>
  );
};

export default Statistic;
