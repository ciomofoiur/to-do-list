import React, { useContext } from "react";
import { AppContext } from "./context";

const Task = () => {
  const { removeTask } = useContext(AppContext);

  return (
    <>
      <div className="task">
        <div>
          <h3>
            nume &nbsp;
            <button onClick={(name) => removeTask(name)}>✔</button>
          </h3>
        </div>
        <h4>descriere</h4>
        <p>interval timp</p>
      </div>
    </>
  );
};

export default Task;
