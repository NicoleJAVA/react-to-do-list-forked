import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);

      return state;
    },
  },
});

export const { addTask } = todoSlice.actions;
export const reducer = todoSlice.reducer;
