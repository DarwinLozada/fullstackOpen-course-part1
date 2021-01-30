import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ name, parts }) => {
  return (
    <div>
      <Header courseName={name} />
      {parts.map((part) => {
        return <Content part={part} />;
      })}
      <Total parts={parts} />
    </div>
  );
};

export default Course;
