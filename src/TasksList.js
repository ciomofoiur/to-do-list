import React, { useContext } from "react";
import { AppContext } from "./context";
import Task from "./Task";

const TasksList = () => {
  const { tasks } = useContext(AppContext);
  return (
    <>
      {tasks.map(() => (
        <Task />
      ))}
      {/*<Task />
      <Task />
      <Task /> */}
    </>
  );
};

export default TasksList;
