import React, { useContext } from "react";
import { AppContext } from "./context";

const NewTask = () => {
  const { addTask } = useContext(AppContext);

  return (
    <div className="new-task-container">
      <input type="text" placeholder="Add new task here" />
      <button type="submit" className="new-task-button" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
