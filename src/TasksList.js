import React, { useContext } from "react";
import { AppContext } from "./context";
import Task from "./Task";

const TasksList = () => {
  const { tasks } = useContext(AppContext);
  return (
    <>
      {tasks.map(() => {
        return (
          <div key={Math.random() * 100000}>
            <Task />
          </div>
        );
      })}
    </>
  );
};

export default TasksList;
