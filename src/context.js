import React, { useReducer, useState } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const defaultState = {
  day: {
    dayName: "Monday",
    tasks: [
      {
        name: null,
        description: null,
        interval: null,
      },
    ],
  },
  newTask: "",
};

const AppProvider = ({ children }) => {
  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const [state, dispatch] = useReducer(reducer, defaultState);

  const [tasks, setTasks] = useState(["do laundry", "exercise", "read"]);
  // const [newTask, setNewTask] = useState("");
  // const [days, setDays] = useState([
  //   {
  //     dayName: "Monday",
  //     tasks: [
  //       {
  //         taskName: null,
  //         taskDescription: null,
  //         taskInterval: null,
  //       },
  //     ],
  //   },
  //   {
  //     dayName: "Tuesday",
  //     taskName: null,
  //     taskDescription: null,
  //     taskInterval: null,
  //   },
  //   {
  //     dayName: "Wednesday",
  //     taskName: null,
  //     taskDescription: null,
  //     taskInterval: null,
  //   },
  //   {
  //     dayName: "Thursday",
  //     taskName: null,
  //     taskDescription: null,
  //     taskInterval: null,
  //   },
  //   {
  //     dayName: "Friday",
  //     taskName: null,
  //     taskDescription: null,
  //     taskInterval: null,
  //   },
  // ]);

  const addTask = () => {
    if (state.newtask) {
      const newItem = {
        day: {
          dayName: "Thursday",
          tasks: [
            {
              taskName: "aaa",
              taskDescription: "bbb",
              taskInterval: "ccc",
            },
          ],
        },
      };
      dispatch({ type: "ADD_TASK", payload: newItem });
      dispatch({ type: "CLEAR_INPUT" });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const removeTask = (name) => {
    dispatch({ type: "REMOVE_TASK", payload: name });
  };

  return (
    <AppContext.Provider
      value={{ daysOfWeek, tasks, state, addTask, removeTask }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
