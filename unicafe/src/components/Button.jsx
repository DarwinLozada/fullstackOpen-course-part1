import React from "react";
import "../styles.css";

const Button = ({ state }) => {
  const handleStateChange = () => {
    state.stateFunction(state.value + 1);
  };

  return (
    <>
      <button className="feedBack-buttons" onClick={handleStateChange}>
        {state.name}
      </button>
    </>
  );
};

export default Button;
