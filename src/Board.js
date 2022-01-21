import React, { useContext } from "react";
import { AppContext } from "./context";
import Day from "./Day";
import "./index.css";

const Board = () => {
  const { daysOfWeek } = useContext(AppContext);

  return (
    <>
      <div className="grid-container">
        {daysOfWeek.map((day) => {
          return (
            <div className="day-container" key={Math.random() * 100000}>
              <h2>{day}</h2>
              <Day />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Board;
