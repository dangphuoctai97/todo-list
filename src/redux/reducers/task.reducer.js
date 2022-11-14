import { createReducer } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  taskList: JSON.parse(localStorage.getItem("taskList")) || [],
};

const taskReducer = createReducer(initialState, {
  CREATE_TASK: (state, action) => {
    const { values } = action.payload;
    const newTask = {
      id: uuidv4(),
      ...values,
    };
    const newTaskList = [newTask, ...state.taskList];
    localStorage.setItem("taskList", JSON.stringify(newTaskList));

    return {
      ...state,
      taskList: newTaskList,
    };
  },
  UPDATE_TASK: (state, action) => {
    const { id, values } = action.payload;
    const newTaskList = [...state.taskList];
    const newTask = {
      ...values,
      id: id,
    };
    const index = newTaskList.findIndex((item) => item.id === id);
    newTaskList.splice(index, 1, newTask);
    localStorage.setItem("taskList", JSON.stringify(newTaskList));

    return {
      ...state,
      taskList: newTaskList,
    };
  },
  DELETE_TASK: (state, action) => {
    const { id } = action.payload;
    const newTaskList = state.taskList.filter((item) => item.id !== id);

    localStorage.setItem("taskList", JSON.stringify(newTaskList));

    return {
      ...state,
      taskList: newTaskList,
    };
  },
});

export default taskReducer;
