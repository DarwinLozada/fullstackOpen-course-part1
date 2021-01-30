import React from "react";
import Part from "./Part";

const Content = ({ part }) => {
  return (
    <>
      <p>
        <Part part={part} />
      </p>
    </>
  );
};

export default Content;
