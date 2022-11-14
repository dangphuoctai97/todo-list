import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./redux/reducers/task.reducer";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export { store };
