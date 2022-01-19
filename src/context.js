import React, { useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const [tasks, setTasks] = useState(["do laundry", "exercise", "read"]);

  return (
    <AppContext.Provider value={{ days, tasks }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
