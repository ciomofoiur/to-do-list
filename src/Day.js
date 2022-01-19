import React from "react";
import WeatherWindow from "./WeatherWindow";
import TasksList from "./TasksList";

const Day = () => {
  return (
    <div className="day-container">
      <WeatherWindow />
      <TasksList />
    </div>
  );
};

export default Day;
