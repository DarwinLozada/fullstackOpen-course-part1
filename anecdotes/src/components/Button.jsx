import React from "react";

const Button = ({ props }) => {
  return (
    <>
      <div className="button-wrapper">
        <button
          className={props.prefix + "-button"}
          onClick={props.clickFunction}
        >
          {props.desc}
          <div className="animation-box"></div>
        </button>
      </div>
    </>
  );
};

export default Button;
