export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        day: {
          dayName: action.payload.day.dayName,
          tasks: [
            {
              name: action.payload.day.tasks.taskName,
              description: action.payload.day.tasks.taskDescription,
              interval: action.payload.day.tasks.taskInterval,
            },
          ],
        },
      };

    case "CLEAR_INPUT":
      return {
        ...state,
        newTask: "",
      };

    case "REMOVE_TASK":
      const remainingTasks = state.day.tasks.filter(
        (task) => task.name !== action.payload
      );
      return {
        ...state,
        tasks: remainingTasks,
      };
    default:
      break;
  }
};
