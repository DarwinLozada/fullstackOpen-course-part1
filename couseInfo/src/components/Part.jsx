import React from "react";

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name}, {part.exercises} exercises
      </p>
    </>
  );
};

export default Part;
