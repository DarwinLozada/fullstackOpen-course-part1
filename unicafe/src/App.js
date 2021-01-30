import React, { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";
import "./styles.css";

export default function App() {
  const [goodFeedback, goodFeedbackState] = useState(0);
  const [neutralFeedback, neutralFeedbackState] = useState(0);
  const [badFeedback, badFeedbackState] = useState(0);

  return (
    <div className="App">
      <h1>Give feedback </h1>
      <div className="button-container">
        <Button
          state={{
            stateFunction: goodFeedbackState,
            name: "Good",
            value: goodFeedback
          }}
        />
        <Button
          state={{
            stateFunction: neutralFeedbackState,
            name: "Neutral",
            value: neutralFeedback
          }}
        />

        <Button
          state={{
            stateFunction: badFeedbackState,
            name: "Bad",
            value: badFeedback
          }}
        />
      </div>
      <Statistics states={[goodFeedback, neutralFeedback, badFeedback]} />
    </div>
  );
}
