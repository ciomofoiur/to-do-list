import React, { useContext } from "react";
import { AppContext } from "./context";
import Day from "./Day";
import "./index.css";

const Board = () => {
  const { days } = useContext(AppContext);

  return (
    <div className="grid-container">
      {days.map((day) => {
        return (
          <div className="day-container">
            <h2>{day}</h2>
            <Day />
          </div>
        );
      })}
      {/* <Day />
      <Day />
      <Day />
      <Day />
      <Day /> */}
    </div>
  );
};

export default Board;
