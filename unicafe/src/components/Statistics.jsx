import React from "react";
import "../styles.css";
import Stadistic from "./Statistic";

const Statistics = ({ states }) => {
  const [goodFeedback, neutralFeedback, badFeedback] = states;
  const totalFeedback = goodFeedback + neutralFeedback + badFeedback;

  let average = (goodFeedback - badFeedback) / totalFeedback;
  let positivePercentaje =
    (goodFeedback / totalFeedback) * 100 + "%" || "No data";

  average = isNaN(average) ? "No data" : average;

  return (
    <>
      <div className="statistics-container">
        <h2>Stadistics</h2>

        {average !== "No data" && (
          <>
            <div className="data-container">
              <div className="feedback">
                <Stadistic state={{ desc: "Good", value: goodFeedback }} />
                <Stadistic
                  state={{ desc: "Neutral", value: neutralFeedback }}
                />
                <Stadistic state={{ desc: "Bad", value: badFeedback }} />
              </div>
              <div className="average">
                <Stadistic state={{ desc: "All", value: totalFeedback }} />
                <Stadistic state={{ desc: "Average", value: average }} />
                <Stadistic
                  state={{ desc: "Positive", value: positivePercentaje }}
                />
              </div>
            </div>
          </>
        )}
        {average === "No data" && <span>No feedback received</span>}
      </div>
    </>
  );
};

export default Statistics;
