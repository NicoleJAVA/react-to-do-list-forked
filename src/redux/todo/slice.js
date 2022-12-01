import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);

      return state;
    },

    removeTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    updateTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            item: action.payload.item,
          };
        }

        return task;
      });
    },

    completeTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            completed: action.payload.completed,
          };
        }

        return task;
      });
    },
  },
});

export const { addTask, removeTask, updateTask, completeTask } =
  todoSlice.actions;
